import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import CartDropDownTop from "./CartDropDownTop";
import { useNavigate } from "react-router";

function CartDropDown() {
  // ----------------------------------------Getting Cart Items From Store------------------------------------------------
  const cartData = useSelector((state) => state.cartItem);
  const nevigate = useNavigate();
  const handleNevigation = (path) => {
    nevigate(path);
  };
  return (
    <div className="absolute border w-[320px] max-h-screen hidden sm:flex flex-col bg-white py-2 pb-5 justify-center rounded-md right-0 opacity-0 group-hover:opacity-100 top-[230%] group-hover:top-[100%] transition-all invisible  group-hover:visible z-[60]">
      {cartData.item.length != 0 ? (
        <CartDropDownTop data={cartData} />
      ) : (
        <h2 className="w-full text-center border-b py-4 text-gray-500">
          Cart is Empty
        </h2>
      )}
      <div className=" flex justify-between py-4 px-5 ">
        <div className="leading-[22px]">
          <h6 className="text-[12px] text-[#AAAAAA]">Sub Total:</h6>
          <h6 className="text-[12px] text-[#AAAAAA]">Tax:</h6>
          <h5 className="font-bold text-[#AAAAAA]">Total:</h5>
        </div>
        <div className="text-end leading-5">
          <h6 className="text-[#AAAAAA]">${cartData.prices.subTotal}.00</h6>
          <h6 className="text-[#AAAAAA]">${cartData.prices.tax}.00</h6>
          <h5 className="font-bold text-lg text-[#3BB77E]">
            ${cartData.prices.totalPrice}.00
          </h5>
        </div>
      </div>
      <div className="flex justify-between">
        <Button title={"Checkout"} className="text-white" />
        <Button
          onClick={() => {
            handleNevigation("/Cart page");
          }}
          title={"View Cart"}
          className="text-white"
        />
      </div>
    </div>
  );
}

export default CartDropDown;
