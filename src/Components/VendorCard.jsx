import React from "react";
import RatingStars from "./RatingStars";
import ContectInfo from "./ContectInfo";
import { IoLocationOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";

const VendorCard = ({ vendor,vendorsHashMap }) => {
    const { logo, vendorName, sinceYear, rating, contact, address } = vendor;
    const nevigate=useNavigate();
    const handleNevigation=(vendorName)=>{
        nevigate(`/stores/${vendorName}`,{
            state:{vendorName}
        })

    }
  return (
    <div onClick={()=> handleNevigation(vendorName)} className="w-[305px] border rounded-xl px-4 pt-8 pb-6 ">
      <img src={logo} alt="" className="w-[144px] cursor-pointer" />
      <div className="pt-8">
        <p>Since {sinceYear}</p>
        <h2 className="text-[24px] font-semibold hover:text-green-600 w-fit myTransition cursor-pointer">{vendorName}</h2>
        <p>({vendorsHashMap[vendorName]} Products)</p>
        <RatingStars rating={rating} content={rating} className="w-fit" />
      </div>
      <div className="py-5 pb-6">
        <ContectInfo
          icon={<IoLocationOutline />}
          title={"Address:"}
          discription={address}
        />
        <ContectInfo
          icon={<FiHeadphones />}
          title={"Call Us:"}
          discription={contact}
        />
      </div>
      <Button
        title={
          <span className="flex gap-2 items-center">
            {" "}
            Visit Store <FaArrowRight />
          </span>
        }
        className=" rounded-md text-white text-[10.6px] px-4 font-bold hover:bg-[#FDC040] myTransition group"
      />
    </div>
  );
};

export default VendorCard;
