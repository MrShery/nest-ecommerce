import React from "react";
import ProductCardDiscountedPrice from "./ProductCardDiscountedPrice";
import ProductName from "./ProductName";
import RatingStars from "./RatingStars";
import { useLocation, useNavigate } from "react-router";

const SideBarProductItem = ({ elem, index }) => {
  const nevigate = useNavigate();
  const location = useLocation();
  const handleNevigation = () => {
    location.pathname !== `/products/${elem.id}` &&
      nevigate(`/products/${elem.id}`, {
        state:{props: elem,
        popUp: false,}
      });
    window.scrollTo(0,0);
  };
  return (
    <div
      onClick={() => handleNevigation()}
      className={`${index != 0 && "border-dotted border-t-2"} px-2 py-1 flex `}
    >
      <img
        src={elem.productImg[0]}
        alt="image"
        className="w-[80px] h-[80px] p-"
      />
      <div>
        <ProductName
          title={elem.productTitle}
          className="text-[#47BC96] leading-[18px]"
        />

        <ProductCardDiscountedPrice productPrice={elem.productPrice} />
        <RatingStars
          rating={elem.rating}
          yellowStarClassName="text-[12.3px]"
          className="w-[60px]"
        />
      </div>
    </div>
  );
};

export default SideBarProductItem;
