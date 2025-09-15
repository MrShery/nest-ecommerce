import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ProductCardImgSlider from './ProductCardImgSlider';
import { GoShareAndroid } from 'react-icons/go';
import ProductAction from './ProductAction';
import { MdOutlineEmail } from 'react-icons/md';

function ProductDetailsPopUpLeftSide({popUp}) {
    let socialIconBgColors = ["bg-[#3B5999]", "bg-[#55ACEE]", "bg-[#0E76A8]"];
    const socialIconStyles="text-[19px] text-white"
  return (
    <div
    className={`${
      popUp
        ? "w-[400px] md:w-[50%] sm:w-[90%] max-w-full h-full "
        : " md-w-full w-[94%] lg:w-[50%] px-2 md:px-2  "
    }`}
  >
    <ProductCardImgSlider popUp={popUp} />
    {!popUp && (
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex gap-1 text-[#7E7E7E] text-sm ">
          <GoShareAndroid className="text-xl " />{" "}
          <span className="mt-[2px]">Share this</span>
        </div>

        <div className="flex gap-2">
          {[
            <FaFacebookF className={socialIconStyles} />,
            <FaTwitter className={socialIconStyles} />,
            <FaLinkedinIn className={socialIconStyles} />,
          ].map((elem, index) => (
            <ProductAction
              key={index}
              icon={<a href="#">{elem}</a>}
              action={() => {}}
              toolTipTitle={""}
              toolTip={false}
              loadingSpin={false}
              className={`border-none cursor-pointer rounded py-2 w-fit myTransition hover:-translate-y-[3px] ${socialIconBgColors[index]}`}
            />
          ))}
        </div>
        <div className="flex center gap-2 text-[#7F7F7F]  myTransition hover:text-[#FECC40] text-[12px]">
          <MdOutlineEmail className="text-[14px]" />
          Email to a Friend
        </div>
      </div>
    )}
  </div>
  )
}

export default ProductDetailsPopUpLeftSide
