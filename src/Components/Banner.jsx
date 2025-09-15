import React from "react";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = ({ bannerImgUrl, bannerTitle }) => {
  return (
    <div className="w-[95%]  lg:w-[425.66px] h-fit  sm:h-[249px] rounded-lg overflow-hidden relative flex-shrink-0">
      <img src={bannerImgUrl} alt="img" />
      <div className=" w-[100%] xs:w-[50%]  md:w-[40%] lg:w-[60%] h-[50%] flex flex-col justify-between absolute top-[50%] translate-y-[-50%] sm:left-12 ">
        <h2 className="text-wrap font-bold text-[10px] xs:text-[16px] lg:text-[24px] md:text-[22px] h-full sm:leading-7 text-[#253D4E] hover:translate-y-[-10%] myTransition ">
          {bannerTitle}
        </h2>
        <Button
          title={
            <span className="w-full h-full flex items-center justify-center gap-1 group-hover:gap-4 myTransition font-bold text-[5vw] sm:text-[10px] text-white">
              Shop Now <FaArrowRightLong />
            </span>
          }
          className={"rounded-md group  w-fit md:py-2 py-[1px] px-[7px] md:px-[1px]  hover:bg-[#FDC040]"}
        />
      </div>
    </div>
  );
};

export default Banner;
