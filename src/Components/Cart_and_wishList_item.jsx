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
import QuantityCounter from "./QuantityCounter";
import SubTotal from "./SubTotal";
import { removeFromCart, updateQuantity } from "../Redux/Slices/CartItemSlice";
import WishItemStatus from "./WishItemStatus";
import { CartPageItemQuantityCounter } from "./CartPageItemQuantityCounter";

const Cart_and_wishList_item = ({ item, whichItem }) => {
  const dispatch = useDispatch();
  const handleOnChange = (val) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: val,
        productPrice: item.productPrice,
        discount: item.discount,
      })
    );
  };
  const handleOnClick = () => {
    whichItem === "wishItem"
      ? dispatch(addToWishList(item))
      : whichItem === "cartItem" && dispatch(removeFromCart(item));
  };

  return (
    <div className="w-[100%] h-fit sm:flex justify-between  md:gap-5 lg:gap-10 sm:gap-1 items-center mt-2 bg-[#ECECEC] sm:bg-white py-7 sm:py-0 ">
      {/* ==================================Product Image======================================== */}
      <img
        src={item.productImg[0]}
        alt="img"
        className="sm:w-[110px] sm:h-[110px] w-[160px] h-[160px]  rounded-lg border mx-auto "
      />
      <div className="w-[100%] sm:w-[15%] md:w-[18%] lg:w-[32%] md:block flex justify-center flex-col items-center ">
        {/* ================================Product Name======================= */}
        <ProductName
          title={item.productTitle}
          className="hover:text-[#FDC040]"
        />
        {/* =============================Product Company and Brand Name==================================== */}
        <SoldBy companyName={item.brandName} />
        {/* =============================Product Rating==================================== */}
        <RatingStars rating={10} content={"10"} className="w-[112px]" />
      </div>
      <div className="sm:flex sm:w-[50%] gap-5 lg:gap-0 w-[100%] justify-between px-3 md:px-0 ">
        {/* ==================================Product Prices Div===================================== */}
        <div className=" sm:flex flex justify-between gap-1 sm:w-[21%] py-4 md:py-0  ">
          <h2 className="font-semibold sm:hidden">Price</h2>
          <div className="flex gap-2 flex-wrap ">
            <ProductCardDiscountedPrice
              productPrice={item.productPrice}
              discount={item.discount}
              className=" text-[4vw] xs:text-[3vw] sm:text-[14px] font-normal"
            />
            <ProductCardPrice
              productPrice={item.productPrice}
              className=" text-[4.2vw] xs:text-[3vw] sm:text-[14px] pt-1 font-thin text-black"
            />
          </div>
        </div>
        <div className=" sm:flex  md:gap-10 py-4 md:py-0">
          {/* ============================================Conditional Rendering For Product Status OR Quantity============================================== */}
          {whichItem === "wishItem" ? (
            <WishItemStatus />
          ) : (
            whichItem === "cartItem" && (
              <CartPageItemQuantityCounter
                handleOnChange={handleOnChange}
                id={item.id}
              />
            )
          )}

          {/* ============================================Conditional Rendering for product subTotal OR Add to Cart Button============================================== */}
          {whichItem === "wishItem" ? (
            <div className="flex justify-between pb-4 pt-6 md:p-0">
              <h2 className="font-semibold sm:hidden">Action</h2>
              <AddToCartBtn
                onClick={() => dispatch(addToCart(item))}
                icon={<IoCartOutline className="text-white text-base " />}
                title="Add to cart"
                className="flex items-center hover:translate-y-0 bg-[#3BB77E] text-nowrap hover:bg-[#FDC040] text-white rounded-full   text-[4.2vw] xs:text-[3vw] sm:text-[9px] sm:py-[1vw] px-[1vw]"
              />
            </div>
          ) : (
            whichItem === "cartItem" && (
              <div className="flex justify-between pb-4 pt-6 md:p-0">
                <h2 className="font-semibold sm:hidden">SubTotal</h2>
                <SubTotal
                  productID={item.id}
                  productPrice={item.productPrice}
                  discount={item.discount}
                />
              </div>
            )
          )}
        </div>
        <div className="flex   justify-between items-center">
          <h2 className="font-semibold sm:hidden">Remove</h2>
          <RiDeleteBin6Line
            onClick={handleOnClick}
            className="text-lg text-blue-950 me-10  hover:text-[#FDC040] myTransition cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Cart_and_wishList_item;
