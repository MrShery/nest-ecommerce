import React from "react";
import ProductName from "./ProductName";
import SoldBy from "./SoldBy";
import RatingStars from "./RatingStars";
import ProductCardDiscountedPrice from "./ProductCardDiscountedPrice";
import ProductCardPrice from "./ProductCardPrice";
import AddToCartBtn from "./AddToCartBtn";
import { addToCart } from "../Redux/Slices/CartItemSlice";
import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToWishList } from "../Redux/Slices/WishList/WishListSlice";
import { useDispatch } from "react-redux";

const WishItem = ({ item}) => {
  const dispatch = useDispatch();

  return (
    <div
      className="w-[100%] h-fit sm:flex  md:gap-5 lg:gap-10 items-center mt-2 bg-[#ECECEC] sm:bg-white py-7 sm:py-0 "
    >
      <img
        src={item.productImg[0]}
        alt="img"
        className="sm:w-[120px] sm:h-[120px] w-[160px] h-[160px]  rounded-lg border md:mx-0 mx-auto "
      />
      <div className="w-[100%] sm:w-[15%] md:w-[18%] lg:w-[32%] md:block flex justify-center flex-col items-center ">
        <ProductName
          title={item.productTitle}
          className="hover:text-[#FDC040]"
        />
        <SoldBy companyName="Global Office" />
        <RatingStars rating={10} content={"10"} className="w-[112px]" />
      </div>
      <div className="sm:flex sm:w-[50%] gap-5 lg:gap-0 w-[100%] justify-between px-3 md:px-0 ">
        <div className=" sm:flex flex justify-between gap-1 sm:w-[21%] py-4 md:py-0  ">
          <h2 className="font-semibold sm:hidden">Price</h2>
          <div className="flex gap-2 flex-wrap lg:flex-nowrap">
            <ProductCardDiscountedPrice
              productPrice={item.productPrice}
              discount={item.discount}
              className=" text-base font-normal"
            />
            <ProductCardPrice
              productPrice={item.productPrice}
              className=" text-xs pt-1 font-thin text-black"
            />
          </div>
        </div>
        <div className=" sm:flex  md:gap-10 py-4 md:py-0">
          <div className="flex justify-between ">
            <h2 className="font-semibold sm:hidden">Status</h2>
            <p className="bg-[#DEF9EC] text-[#81B13D] rounded-md md:px-3 px-1 text-nowrap my-auto h-fit sm:text-[16px] text-[10px] font-semibold py-1">
              In Stock
            </p>
          </div>
          <div className="flex justify-between pb-4 pt-6 md:p-0">
            <h2 className="font-semibold sm:hidden">Action</h2>
            <AddToCartBtn
              onClick={() => dispatch(addToCart(item))}
              icon={<IoCartOutline className="text-white text-base " />}
              title="Add to cart"
              className="flex items-center hover:translate-y-0 bg-[#3BB77E] text-nowrap hover:bg-[#FDC040] text-white rounded-full  text-[12px] sm:py-[1vw] px-[1vw]"
            />
          </div>
        </div>
        <div className="flex   justify-between items-center">
          <h2 className="font-semibold sm:hidden">Remove</h2>
          <RiDeleteBin6Line
            onClick={() => dispatch(addToWishList(item))}
            className="text-lg text-blue-950 me-10  hover:text-[#FDC040] myTransition cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default WishItem;
