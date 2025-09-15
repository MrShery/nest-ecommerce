import React from "react";


function ProductCardPrice({ productPrice, discount, detailPage=false,comparePage=false, className }) {
  return (
    <div className="relative">
      {detailPage && (
        <span className="text-[12px] font-semibold text-[#FED35F]">
          -{discount}% Off
        </span>
      )}
      <h3
        className={` text-[#B6B6B6] text-[4vw] xs:text-[3vw] sm:text-[19px] md:text-[10px] font-extrabold ${className}`}
      >
        <span className="line-through">
        ${productPrice}.00

        </span>
        {comparePage && (
        <span className="text-[4vw] xs:text-[3vw] sm:text-[19px] md:text-[10px] text-gray-700  font-semibold ">
          (-{discount}%) 
        </span>
      )}
      </h3>
    </div>
  );
}

export default ProductCardPrice;
