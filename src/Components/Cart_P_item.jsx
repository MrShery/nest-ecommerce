import React from "react";
import { useDispatch } from "react-redux";
import QuantityCounter from "./QuantityCounter";
import ProductCardDiscountedPrice from "./ProductCardDiscountedPrice";
import RatingStars from "./RatingStars";
import SoldBy from "./SoldBy";
import ProductName from "./ProductName";
import { RiDeleteBin6Line } from "react-icons/ri";
import SubTotal from "./SubTotal";
import { removeFromCart, updateQuantity } from "../Redux/Slices/CartItemSlice";

const Cart_P_item = ({ item}) => {
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
  return (
    <div className="w-[100%] h-fit sm:flex  md:gap-5 lg:gap-10 items-center mt-2 bg-[#ECECEC] sm:bg-white py-7 sm:py-0 ">
      <img
        src={item.productImg}
        alt="img"
        className="w-[120px] h-[120px] rounded-lg border"
      />
      <div className="w-[100%] sm:w-[15%] md:w-[18%] lg:w-[32%] md:block flex justify-center flex-col items-center ">
        <ProductName
          title={item.productTitle}
          className="hover:text-[#FDC040]"
        />
        <SoldBy companyName="Global Office" />
        <RatingStars rating={10} content={"(10)"} />
      </div>
      <div className="sm:flex sm:w-[50%] gap-5 lg:gap-0 w-[100%] justify-between px-3 md:px-0 ">
        <ProductCardDiscountedPrice
          productPrice={item.productPrice}
          discount={item.discount}
          className="text-[24px] text-[#4C4C4C]"
        />
      </div>
      <div className=" ">
        <QuantityCounter
          onChangeFnc={handleOnChange}
          productID={item.id}
          cartPage={true}
        />
      </div>
      <SubTotal
        productID={item.id}
        productPrice={item.productPrice}
        discount={item.discount}
      />
      <div className="ps-2">
        <RiDeleteBin6Line
          onClick={() => {
            dispatch(removeFromCart( item ));
          }}
          className="text-lg text-blue-950 hover:text-[#FDC040] myTransition cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Cart_P_item;
