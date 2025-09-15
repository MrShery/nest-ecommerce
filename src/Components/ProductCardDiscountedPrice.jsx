import React, { useEffect } from "react";
import DiscountCalculator from "../Utils/DiscountCalculator";
const ProductCardDiscountedPrice = ({
  productPrice, discount, className
}) => {
  const finalPrice=DiscountCalculator(productPrice, discount)
  // useEffect(()=>{
  //  finalPrice= DiscountCalculator(productPrice, discount)
  // },[productPrice])
  return (
    
    <h3 className={`text-[#3BB78F] font-bold text-[6vw] xs:text-[3vw] sm:text-[19px] md:text-[16px]  ${className}`}>
      ${finalPrice}.00
    </h3>
  

  );
};

export default ProductCardDiscountedPrice;
