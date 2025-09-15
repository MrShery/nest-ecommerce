import React, { useEffect, useRef, useState } from "react";
import CataDropDown from "./SearchCategoryDropDown";
import { GrSearch } from "react-icons/gr";
import ProductOverviewCard from "./ProductOverviewCard";
import useCselector from "../Hooks/useCselector";
const SearchBar = () => {
  const categoryProducts = useCselector("categorySlice");
  const categoryList = categoryProducts[0];
  const allCategoryProducts = categoryProducts[1];
  const allProducts = useCselector("allProducts");
  const [category, setCategory] = useState(["All Categories"]);
  const [inputVal, setInputVal] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const searchBarRef = useRef(null);
  const searchItems = () => {
    let filterProducts = [];
    let keyIndex = -1;
    if (category.length !== 0 && category[0] !== "All Categories") {
      category.forEach((elem) => {
        keyIndex = categoryList.indexOf(elem);
        if (keyIndex !== -1) {
          let matchProducts = allCategoryProducts[keyIndex].filter((element) =>
            element.productTitle.toLowerCase().includes(inputVal.toLowerCase())
          );
          filterProducts = matchProducts;
        }
      });
      setSearchProducts(filterProducts);
    } else {
      let matchProducts = allProducts.filter(
        (product) =>
          inputVal !== "" &&
          product.productTitle.toLowerCase().includes(inputVal.toLowerCase())
      );
      filterProducts = matchProducts;
      setSearchProducts(filterProducts);
    }
  };
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  const handleClickOutside = (e) => {
    if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
      searchBarRef.current.classList.add("overflow-hidden");
    }
  };
  useEffect(() => {
    let timeOut = setTimeout(() => {
      if (inputVal !== "") {
        searchItems();
      } else {
        searchItems([]);
      }
    }, 1000);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeOut);
    };
  }, [inputVal, category]);

  return (
    <div
      ref={searchBarRef}
      onClick={()=>{searchBarRef.current.classList.remove("overflow-hidden");}}
      className="lg:w-[49vw] w-[53%]   hidden md:hidden lg:block  py-3 rounded-sm bg-white border-[2px] border-[#B1E2CB] relative"
    >
      <div className="flex items-center w-full h-full ">
        <CataDropDown setCategory={setCategory} />

        <div className="flex w-full px-5 items-center">
          <input
            className="outline-none border-none w-full"
            type="text"
            placeholder="Search For Items..."
            value={inputVal}
            onChange={handleInput}
            onClick={() =>
              searchBarRef.current.classList.remove("overflow-hidden")
            }
          />
          <GrSearch
            onClick={() => searchItems()}
            className=" text-2xl text-[#3BB77E] cursor-pointer"
          />
        </div>
      </div>
      {searchProducts != null && searchProducts.length !== 0 && (
        <div className="w-[100.5%]  max-h-[400px] overflow-y-auto flex flex-col gap-2 py-5 px-6 border-[2px] border-[#B1E2CB] border-t-0 absolute top-[100%] -right-[1.5px] bg-white z-[150]">
          {searchProducts.map((elem, index) => (
            <ProductOverviewCard elem={elem} key={index} />
          ))}
        </div>
      )}
      {inputVal !== "" && searchProducts.length == 0 && (
        <div className="w-[100.5%] text-center justify-center max-h-[400px] overflow-y-auto flex flex-col gap-2 py-5 px-6 border-[2px] border-[#B1E2CB] border-t-0 absolute top-[100%] -right-[1.5px] bg-white z-50">
          <h2>Product not Found</h2>
        </div>
      )}
    </div>
  );
};
export default SearchBar;
