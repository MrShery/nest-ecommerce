import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useCselector from "../Hooks/useCselector";

function QuantityCounter({ onChangeFnc, productID }) {
  const cartItems = useCselector("cartItem");
  const cartItemQuantity = cartItems.hashMap[productID];
  const [val, setVal] = useState(cartItemQuantity || 1);
  useEffect(() => {
    onChangeFnc(val);
  }, [val, cartItemQuantity]);

  return (
    <>
      <style>
        {` input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `}
      </style>
      <div className="flex  items-center justify-center px-2 py-1 w-fit  bg-white rounded-md border-[#3BB77E] border-2">
        <input
          type="number"
          value={val}
          onChange={(e) => {
            setVal(Number(e.target.value));
          }}
          className="w-6 h-7 md:w-12 md:h-7 text-center outline-none ps-2 text-[#3BB77E] font-semibold"
        />
        <div className="flex flex-col justify-around items-center  gap-2  ">
          <IoIosArrowUp
            className="text-[#3BB77E] p-[1px] cursor-pointer z-10"
            onClick={() => setVal((e) => e + 1)}
          />
          <IoIosArrowDown
            className="text-[#3BB77E] p-[1px] cursor-pointer z-10"
            onClick={() => {
              
              val != 1 && val != 0 && setVal((e) => e - 1);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default QuantityCounter;
