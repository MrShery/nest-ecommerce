import React, { useEffect, useState } from "react"; 
import DiscountCalculator from "../Utils/DiscountCalculator";
import useCselector from "../Hooks/useCselector";

const SubTotal = ({ productID, productPrice, discount }) => {
  const data = useCselector("cartItem");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [currItemFinalPrice, setCurrItemFinalPrice] = useState(productPrice);
  const [totalSubPrice, setTotalSubPrice] = useState(0);
  const handleCurrItemQuantity = () => {
    let quantity = data.hashMap[productID] || 1;
    setItemQuantity(quantity);
    let price = DiscountCalculator(productPrice, discount);
    setCurrItemFinalPrice(price);
  };
  useEffect(() => {
    handleCurrItemQuantity();
    setTotalSubPrice(itemQuantity * currItemFinalPrice);
  }, [
    itemQuantity,
    currItemFinalPrice,
    data.hashMap,
    productID,
    productPrice,
    discount,
  ]);
  return (
    <h2 className="text-[#3BB78F] text-[14px] lg:text-[24px] font-bold lg:px-0 sm:px-3">
      ${totalSubPrice}.00
    </h2>
  );
};

export default SubTotal;
