import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import useCselector from "../../Hooks/useCselector";
import SetionTitle from "../../Components/SectionTitle";
import FilterSearchBar from "../../Components/FilterSearchBar";
import ProductCard from "../../Components/ProductCard";
import VendorDetailedCard from "../../Components/VendorDetailedCard";
import { TbSortAscending2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RiGalleryView2 } from "react-icons/ri";
import CategoriesIcons from "./../../assets/CategoriesIcons/categoriesIcons.json";

const StoreDetailPage = () => {
  const location = useLocation();
  const allProducts = useCselector("allProducts");
  const categories = useCselector("categorySlice");
  const [productsToShow, setProductsToShow] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // -------------------------------------------- Getting Targeted Vendor Name ------------------------------------------------
  const { vendorName } = location.state || {};
  // --------------------------------------------Input Value Handled-----------------------------------------------------------
  const handleOnChange = () => {
    let products = [];
    if (inputValue.trim() != "") {
      products = productsToShow.filter((product) =>
        product.productTitle.toLowerCase().includes(inputValue.toLowerCase())
      );
      setProductsToShow(products);
    }
  };
  // ---------------------------------------------Filter Products of Targeted Store or Vendor----------------------------------
  const filterProducts = () => {
    let products = [];
    if (allProducts) {
      products = allProducts.filter((product) => product.vendor == vendorName);
      setProductsToShow(products);
    }
  };
  // -------------------------------------Conditional Rendering if Vendor Name not Defined-------------------------------------
  if (!vendorName) {
    return <div> Something Went Wrong!!!!</div>;
  }

  useEffect(() => {
    filterProducts();
  }, []);
  return (
    <div className="px-3">
      <div className="py-10 text-center">
        {/* -------------------------------------------Section Title ----------------------------------------------       */}
        <SetionTitle
          title={vendorName}
          line={false}
          border={false}
          className="lg:text-[70px] font-bold"
        />
        <p>
          Exercitationem ex possimus at animi ipsam laboriosam. Unde dolor iure
          perspiciatis qui quia. Molestias et dolor eveniet eaque molestiae.
        </p>
        {/* ------------------------------------------Search Bar -------------------------------------------------------        */}
        <div className="flex gap-2">
          <FilterSearchBar
            setInputValue={setInputValue}
            handleOnChange={handleOnChange}
          />
        </div>
      </div>
      <div className="flex gap-2 flex-wrap-reverse xl:flex-nowrap md:flex-wrap-reverse justify-center">
        <div>
          {/* -------------------------------------Vendor Detail Card that shows on left side of the products-----------------------------------------    */}
          <VendorDetailedCard vendor={vendorName} />
          {/* -----------------------------------------Categories Side Bar that show below the Vendor Detail Card  +Start-----------------------------------------    */}
          <div className="bg-[#F5F5F5] p-5 mt-10 rounded-md">
            <SetionTitle
              line={false}
              border={true}
              title="Categories"
              className="font-semibold text-md"
            />
            <div className="py-3">
              <Link
                to="/Shop Page"
                className="block w-fit hover:text-[#FBC440] myTransition2"
              >
                All Categories
              </Link>
              {categories[0].map((category, index) => (
                <Link
                  key={"store" + category + index}
                  to={location.pathname!=encodeURIComponent(location.pathname)&&"/Shop Page"}
                  className="w-fit flex items-center gap-2 py-1 hover:text-[#FBC440] myTransition2"
                >
                  <img
                    src={CategoriesIcons[index]}
                    className="w-[20.8px] h-[20.8px]"
                    alt=""
                  />
                  {category}
                </Link>
              ))}
            </div>
          </div>
          {/* -----------------------------------------Categories Side Bar that show below the Vendor Detail Card +End-----------------------------------------    */}
        </div>
        {/* ------------------------------------------Products Section---------------------------------------------------  */}
        <div className="px-4 w-full">
          <div className="flex justify-between items-center flex-wrap">
            <p className="font-medium">
              We found{" "}
              <span className="font-semibold text-[#3BB77E]">
                {productsToShow.length}
              </span>{" "}
              items for you!
            </p>
            <div className="flex gap-2 text-[#B0B0B0] ">
              <button className="flex gap-3 items-center border rounded-lg py-[9px] px-[16px] text-[13px]">
                <RiGalleryView2 className="text-xl " />
                <p className="text-[#777777]">
                  Show: <span className=" ms-1 text-black">12</span>
                </p>
                <IoIosArrowDown />
              </button>
              <button className="flex gap-3 items-center border rounded-lg py-[9px] px-[16px] text-[13px]">
                <TbSortAscending2 className="text-xl " />
                <p className="text-[#777777]">
                  Sort By: <span className=" ms-1 text-black">Default</span>
                </p>
                <IoIosArrowDown />
              </button>
            </div>
          </div>

          <div className="flex  gap-6 flex-wrap h-fit w-full py-5 ">
            {productsToShow.map((elem, index) => {
              let props = elem;
              return (
                <ProductCard
                  key={`storeDet_P_card ${index}`}
                  {...props}
                  index={index}
                />
              );
            })}
            {productsToShow.length == 0 && <div>Not Found Any Product!!!</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailPage;
