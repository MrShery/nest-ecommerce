import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiSignOut } from "react-icons/pi";
import useCselector from "../Hooks/useCselector";

const PaymentCard = () => {
  const cartdata = useCselector("cartItem");
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  useEffect(() => {
    let sub = cartdata.prices.subTotal;
    let taxes = cartdata.prices.tax;
    setTotalPrice(sub);
    setTax(taxes);
  }, [cartdata]);
  return (
    <div className="w-[396px] h-[241px] flex flex-col justify-center border rounded-lg px-8 ">
      <div className="flex justify-around ">
        <div>
          <h3 className="w-[65%]">Tax</h3>
          <div className="py-3">
            <h3>Total</h3>
            <p className="text-[12px] py-2">(Shipping fees not included)</p>
          </div>
        </div>
        <div className="">
          <h3 className="text-[#41BCA1] font-semibold w-[35%] ">${tax}.00</h3>
          <h2 className="text-2xl font-semibold text-[#41BCA1] py-4">
            ${totalPrice}.00
          </h2>
        </div>
      </div>
      <Button
        title={
          <span className="w-full flex items-center justify-center text-white gap-4 font-semibold  myTransition ">
            Proceed To Checkout <PiSignOut />
          </span>
        }
        className={"rounded-md w-full hover:bg-[#FDC040]"}
      />
    </div>
  );
};

export default PaymentCard;
