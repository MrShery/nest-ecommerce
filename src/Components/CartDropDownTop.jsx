import React from "react";
import DiscountCalculator from "../Utils/DiscountCalculator";
import { FaXmark } from "react-icons/fa6";
import { removeFromCart } from "../Redux/Slices/CartItemSlice";
import { useDispatch } from "react-redux";

function CartDropDownTop({ data }) {
  const dispatch=useDispatch();
  return (
    <div className="border-b px-2 h-full overflow-y-auto overflow-x-hidden HideScrollBar flex flex-col gap-4 py-6">
      {data.item.map((item, index) => (
        <div key={index} className="flex gap-2 w-[278px] h-[115px]  ">
          {" "}
          <img src={item.productImg[0]} alt="" className="w-[80px] h-[86px]" />
          <div className="px-3">
            <h3 className=" leading-5 text-[16px] text-[#3BB77E] font-semibold">
              {item.productTitle}
            </h3>
            <h6 className="pt-2">
              {data.hashMap[item.id]}x$
              {DiscountCalculator(item.productPrice, item.discount)}.00
            </h6>
            <p className="text-[12.8px]">(Weight: 5Kg, Boxes:4 Boxes)</p>
          </div>
          <FaXmark
            onClick={() => {
              dispatch(removeFromCart( item ));
            }}
            className="text-[13px]  cursor-pointer mt-1 text-gray-600 hover:text-black myTransition"
          />
        </div>
      ))}
    </div>
  );
}

export default CartDropDownTop;
