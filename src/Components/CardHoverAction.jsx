import React, { lazy, useState } from "react";
import { TbArrowsShuffle } from "react-icons/tb";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setActiveProduct } from "../Redux/Slices/ActiveProductSlice/ActiveP_Slice";
import { addToWishList } from "../Redux/Slices/WishList/WishListSlice";
import useCselector from "../Hooks/useCselector";
import { addToCompare } from "../Redux/Slices/Compare/CompareSlice";
const ProductAction=lazy(()=> import("./ProductAction")) ;

const CardHoverAction = ({ setPopUp, product }) => {
  const products = useCselector("allProducts");

  const dispatch = useDispatch();
  // ----------------------------------------Classes For Styling------------------------------------------------

  const cardActionIconStyling = `text-[19px]    myTransition  text-[#3BB78F] hover:text-[#FECC40] hover:-translate-y-1 cardIcon `;

  const hoverActionDivStyling =
    " absolute z-20 bg-white cursor-pointer rounded border-[#3BB78F] border-[0.5px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex opacity-0 invisible group-hover:opacity-100 group-hover:visible";
  // ----------------------------------------Card Action Buttons Array That shows on Hover------------------------------------------------
  const cardActionBtnDets = [
    {
      icon: <IoEyeOutline className={cardActionIconStyling} />,
      toolTipTitle: "Quick View",
    },
    {
      icon: <IoHeartOutline className={cardActionIconStyling} />,
      toolTipTitle: "Add To Wishlist",
    },
    {
      icon: <TbArrowsShuffle className={cardActionIconStyling} />,
      toolTipTitle: "Add To Compare",
    },
  ];
  return (
    <div className={hoverActionDivStyling}>
      {cardActionBtnDets.map((item, index) => (
        <ProductAction
          key={index}
          icon={item.icon}
          action={() => {
            dispatch(setActiveProduct({ product: product }));
            index === 0 && setPopUp(true);
            index === 1 && dispatch(addToWishList(products[product.id]));
            index === 2 && dispatch(addToCompare({ newProduct: product }));
          }}
          toolTipTitle={item.toolTipTitle}
          toolTip={true}
          loadingSpin={index == 0 ? false : true}
          styling={index == 2 ? "border-e-0" : ""}
        />
      ))}
    </div>
  );
};

export default CardHoverAction;
