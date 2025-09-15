import React from "react";

const RatingLines = () => {
  return (
    <div className="  flex gap-3 justify-center items-center">
      <h3 className="text-[#7E7E7E]">5 Stars</h3>
      <div className="w-20 h-3 bg-[#E9ECEF]  relative ">
        <div className=" w-4 h-3  bg-[#FFB342] absolute top-0 left-0"></div>
      </div>
      <h3 className="text-[#7E7E7E]">10%</h3>
    </div>
  );
};

export default RatingLines;
