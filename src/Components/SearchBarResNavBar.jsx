import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductOverviewCard from "./ProductOverviewCard";
import { GrSearch } from "react-icons/gr";
import useCselector from "../Hooks/useCselector";

const SearchBarResNavBar = ({ setNavOpen }) => {
  const [inputVal, setInputVal] = useState("");
  const [isFilterCol, setIsFilterCol] = useState(false);
  const allProducts = useCselector("allProducts");
  const [searchProducts, setSearchProducts] = useState([]);
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  const searchItems = () => {
    let matchProducts = allProducts.filter(
      (element) =>
        inputVal.trim() != "" &&
        element.productTitle.toLowerCase().includes(inputVal.toLowerCase())
    );
    setSearchProducts(matchProducts);
  };
  useEffect(() => {
    const setTime = setTimeout(() => {
      if (inputVal.trim() !== "") {
        searchItems();
        setIsFilterCol(true);
      } else {
        setSearchProducts([]);
        setIsFilterCol(false);
      }
    }, 1000);
    return () => clearTimeout(setTime);
  }, [inputVal]);
  return (
    <div className="flex items-center relative py-[10px]  px-3 bg-[#F2F3F4] ms-auto me-auto rounded mt-5">
      <input
        className="outline-none border-none w-full h-full bg-transparent text-sm text-black font-semibold"
        name="search_Product"
        type="text"
        placeholder="Search For Items..."
        value={inputVal}
        onChange={handleInput}
        onFocus={() => setIsFilterCol(true)}
      />
      <GrSearch
        onClick={() => searchItems()}
        className=" text-2xl text-[#3BB77E] cursor-pointer bg-[#F2F3F4]  h-full "
      />
      {isFilterCol && (
        <div className="w-full absolute h-fit overflow-hidden top-[100%]  left-0 bg-white border ">
          <div className=" max-h-[400px] overflow-y-scroll py-4 px-10">
            {searchProducts.map((product, index) => (
              <ProductOverviewCard
                action={() => setNavOpen(false)}
                elem={product}
                key={"navSearchItem" + index}
              />
            ))}
            
          </div>
          {searchProducts.length == 0 && (
            <div className="text-center px-4 pb-8">No Product Found</div>
          )}

          <button className=" w-full py-2 border text-center  text-[#3BB77E] font-semibold">
            <Link to="/">Show Result</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBarResNavBar;
