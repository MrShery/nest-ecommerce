import React from "react";

const SetionTitle = ({ title, border, line, className, ...props }) => {
  return (
    <div
      className={` ${border ? " border-b " : ""} ${
        props.borderStyle
      } w-full  flex flex-col gap-4`}
    >
      <h3
        className={` text-[6vw] sm:text-[22px] md:text-[26px] lg:text-[32px] text-[#253D4E] ${className} `}
      >
        {title}
      </h3>
      {line && <p className="w-[80px] h-[2px]  bg-[#95D4C3] "></p>}
    </div>
  );
};

export default SetionTitle;
