import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoMdArrowForward } from "react-icons/io";
import { RiGalleryView2 } from "react-icons/ri";
import { TbSortAscending2 } from "react-icons/tb";
import useCselector from "../Hooks/useCselector";
import ProductCard from "./ProductCard";
import Button from "./Button";

const ShopPageProductContainer = () => {
  const allProducts = useCselector("allProducts");
  const filteredProducts = useCselector("filteredProducts");
  const [showProducts, setShowProducts] = useState([]);
  const [activePageNum, setActivePageNum] = useState(1);
  const [pages, setPages] = useState(2);
  const [totalItems,setTotalItems]=useState(0)
  const makeProductSlice = (products, index) => {
    let start = (index - 1) * 12;
    let end = start + 12;
    let productSlice = products.slice(start, end);
    setTotalItems(products.length)
    setShowProducts(productSlice);
  };
  useEffect(() => {
    setPages(Math.floor(allProducts.length / 12));
    if (filteredProducts.length !== 0) {
      makeProductSlice(filteredProducts, activePageNum);
    } else makeProductSlice(allProducts, activePageNum);
  }, [activePageNum, allProducts, filteredProducts]);
  return (
    <div>
      <div className="flex items-center justify-between text-lg px-5 py-3">
        <p>
          We found <span className="text-[#3BB77E] font-semibold"> {totalItems}</span> items for you!
        </p>
        {/* <div className="flex gap-2 text-[#B0B0B0] py-5">
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
        </div> */}
      </div>
      <div className="flex gap-4 justify-around flex-wrap">
        {showProducts.map((elem, index) => (
          <ProductCard key={`shopItem ${index}`} index={index} {...elem} />
        ))}
        {showProducts.length == 0 && <div>No More Products</div>}
      </div>
      <div className="flex gap-2 py-16 px-3">
        {new Array(pages).fill(0).map((elem, index) => (
          <Button
            key={`filterBtn${index}`}
            onClick={() => {
              setActivePageNum(index + 1);
            }}
            title={index + 1}
            className={`  border  rounded-full px-4   hover:bg-[#3BB77E] hover:text-white ${
              index == activePageNum - 1
                ? "bg-[#3BB77E] text-white "
                : "bg-white"
            }`}
          />
        ))}

        <Button
          onClick={() => {
            showProducts.length !== 0 && setActivePageNum(activePageNum + 1);
          }}
          title={<IoMdArrowForward />}
          className={`hover:bg-[#3BB77E] px-3 md:px-3 bg-white hover:text-white  border rounded-full`}
        />
      </div>
    </div>
  );
};

export default ShopPageProductContainer;
