import React from "react";
import ProductName from "./ProductName";
import RatingStars from "./RatingStars";
import ProductCardPrice from "./ProductCardPrice";
import ProductCardDiscountedPrice from "./ProductCardDiscountedPrice";
import { useNavigate } from "react-router";
import { setActiveProduct } from "../Redux/Slices/ActiveProductSlice/ActiveP_Slice";
import { useDispatch } from "react-redux";

const ProductOverviewCard = ({ className, elem, ...props }) => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const handleClick = () => {
    dispatch(setActiveProduct({ product: elem }));
    nevigate(`/products/${elem.id}`)
    props.action();
  };
  return (
    <div
      onClick={handleClick}
      className={`md:flex gap-4 my-1 w-full md:bg-white md:py-0 md:px-0 py-2 px-2 bg-gray-100 cursor-pointer  justify-center md:justify-start items-center myTransition ${className}`}
    >
      <img
      onClick={handleClick}
        src={elem.productImg[0]}
        alt="image"
        className="w-[88.45px] h-[88.45px] mx-auto md:mx-0 rounded-lg"
      />
      <div className="flex flex-col overflow-hidden  ">
        <ProductName
          title={elem.productTitle}
          path={`/products/${elem.id}`}
          className={"hover:text-[#FDC040] text-[#47B78F]  mx-auto md:mx-0"}
        />
        <RatingStars
          rating={elem.rating}
          content={elem.rating}
          className="w-fit  mx-auto md:mx-0"
        />
        <div className="flex justify-center md:justify-start gap-4 items-center">
          <ProductCardDiscountedPrice
            discount={elem.discount}
            className={"text-[18px] "}
            productPrice={elem.productPrice}
          />
          {elem.discount != "" && (
            <ProductCardPrice
              className={"text-sm"}
              productPrice={elem.productPrice}
              discount={elem.discount}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOverviewCard;
