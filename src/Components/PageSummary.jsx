import React from "react";

const PageSummary = ({ totalItems, title,className}) => {
  return (
    <div className=" w-full px-3 py-10">
      <h2 className={` text-[8vw] xs:text-[22px] sm:text-[38px] md:text-[48px] myTransition font-bold text-[#253D4E] ${className}`} >{title}</h2>
      <p className=" text-[4vw] xs:text-[18px] sm:text-[20px]   text-[#4C4C4C] font-bold pt-4">
        There are <span className="text-[#3BB77E]">{totalItems + " "}</span>
        products in this list
      </p>
    </div>
  );
};

export default PageSummary;
