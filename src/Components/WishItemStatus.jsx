import React from "react";

const WishItemStatus = ({availibility=true}) => {
  return (
    <div className="flex justify-between ">
      <h2 className="font-semibold sm:hidden">Status</h2>
      <p className="bg-[#DEF9EC] text-[#81B13D] rounded-md md:px-3 px-1 text-nowrap my-auto h-fit  text-[4vw] xs:text-[3vw] sm:text-[9px] font-semibold py-1">
        {availibility?"In Stock":"Out Of Stock"}
      </p>
    </div>
  );
};

export default WishItemStatus;
