import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrPowerCycle } from "react-icons/gr";
import PriceRange from "./PriceRange";
import FilterCol from "./FilterCol";
import useCselector from "../Hooks/useCselector";
import Button from "./Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { filterProducts } from "../Redux/Slices/FilteredProduct/FilteredProductSlice";
import { useLocation } from "react-router";

const FilterContainer = () => {
  const dispatch = useDispatch();
  const allProducts = useCselector("allProducts");
  const filteredProducts = useCselector("filteredProducts");
  const location = useLocation();
  const sharedData = location.state;
  const [searchCriteria, setSearchCriteria] = useState({
    categories: [sharedData],
    brands: [],
    tags: [],
    price: [0, 112497],
  });
  const minPrice = searchCriteria.price[0];
  const maxPrice = searchCriteria.price[1];
  const [toggle, setToggle] = useState(false);
  const handlePrice = (value) => {
    setSearchCriteria((e) => {
      return { ...e, price: value };
    });
  };
  const searchProducts = () => {
    let result = allProducts;
    let { categories, brands, tags, price } = searchCriteria;
    if (categories.length) {
      result = result.filter((elem) => categories.includes(elem.category));
    }
    if (brands.length) {
      if (categories.length)
        result = result.filter((elem) => categories.includes(elem.category));
      else
        result = allProducts.filter((elem) =>
          categories.includes(elem.category)
        );
    }
    if (price.length) {
      if (categories.length || brands.length)
        result = result.filter(
          (elem) =>
            elem.productPrice <= maxPrice && elem.productPrice >= minPrice
        );
      else
        result = allProducts.filter(
          (elem) =>
            elem.productPrice <= maxPrice && elem.productPrice >= minPrice
        );
    }

    dispatch(filterProducts({ products: result }));
  };
  useEffect(() => {
    searchProducts();
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <Button
        onClick={() => {
          setToggle(!toggle);
        }}
        title={
          <span className="flex items-center  gap-1 font-extrabold text-[16px]">
            <CiFilter className="text-[17px] mb-1 " /> Filter
            {toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        }
        className="w-fit rounded-[99px] px-[26px] py-[8px] text-[#3BB77E] bg-white border hover:text-[#FDC040] mt-5"
      />
      {toggle && (
        <div className="w-full  gap-3 overflow-hidden h-fit shadow-lg border rounded-md p-5">
          <div className="w-full h-fit flex gap-3 flex-wrap justify-between ">
            <FilterCol
              searchCriteria={searchCriteria}
              title="Categories"
              setSearchCriteria={setSearchCriteria}
            />
            <FilterCol
              searchCriteria={searchCriteria}
              title="Brands"
              setSearchCriteria={setSearchCriteria}
            />
            <FilterCol
              searchCriteria={searchCriteria}
              title="Tags"
              setSearchCriteria={setSearchCriteria}
            />
            <div>
              <h3 className="font-semibold text-xl text-[#254065]">Price</h3>
              <PriceRange
                minVal={minPrice}
                maxVal={maxPrice}
                setterFucntion={handlePrice}
                width={300}
              />
            </div>
          </div>
          <div className="  flex gap-6 py-4 mt-3">
            <Button
              onClick={() => {
                searchProducts();
              }}
              title={
                <span className="flex  gap-1 font-semibold text-[12px]">
                  <CiFilter className="text-[17px]" /> Filter
                </span>
              }
              className="rounded-md px-[18px] py-[10px] text-white"
            />
            <Button
              onClick={() => {
                if (
                  searchCriteria.categories.length ||
                  searchCriteria.brands.length ||
                  searchCriteria.tags.length
                )
                  setSearchCriteria({
                    categories: [],
                    brands: [],
                    tags: [],
                    price: [0, 2497],
                  });
              }}
              title={
                <span className="flex  gap-3  font-semibold text-[12px] ">
                  <GrPowerCycle className="text-[17px]" /> Clear All Filters
                </span>
              }
              className=" bg-white  text-red-800 hover:bg-red-800  hover:text-white   border border-red-800 rounded-md px-[18px] py-[10px]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FilterContainer;
