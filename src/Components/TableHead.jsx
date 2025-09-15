import React from "react";

const TableHead = ({ headings, width = "98%",...props }) => {
  // ====================Table Heading Classes=========================
  const tHeadClasses = " lg:text-lg text-[14px] font-semibold text-[#253D4E]";
  // ====================Table Heading Classes End=========================
  return (
    <div
      className={` w-[${width}] sm:w-[90%] md:w-[98%] sm:flex justify-between hidden lg:px-7 py-4 md:px-14 px-7 bg-[#ECECEC] rounded-lg `}
    >
      <h2 className={tHeadClasses}>{headings[0]}</h2>
      <div className={` flex lg:justify-between gap-28 lg:gap-10 lg:w-[55%] md:w-[60%] ${props.whichItem==="wishItem"&&"lg:w-[47%] md:w-[55%] md:gap-16  gap-8 "}`}>
        <div className={` flex gap-3 lg:gap-9 ${props.whichItem==="wishItem"&&"lg:gap-26 md:gap-16 ms-auto   "} `}>

        <h2 className={tHeadClasses}>{headings[1]}</h2>
          <h2 className={tHeadClasses}>{headings[2]}</h2>
        </div>
        <div className={` flex gap-3 lg:gap-5 ${props.whichItem==="wishItem"&&"lg:gap-28 md:gap-16 ms-auto  "} `}>
          <h2 className={tHeadClasses}>{headings[3]}</h2>
        <h2 className={tHeadClasses}>{headings[4]}</h2>
        </div>
      </div>
    </div>
  );
};

export default TableHead;
