import React from "react";

const ContectInfo = ({ icon, title, discription }) => {
  return (
    <div className="my-2 text-[15px]">
      <span className="text-xl text-[#3BB77E] float-left mt-[2px] me-1">
        {icon}
      </span>

      <p className="cursor-text">
        <span className="font-bold me-1">{title}</span>
        {discription}
      </p>
    </div>
  );
};

export default ContectInfo;
