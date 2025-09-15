import React from "react";
function ProductBadge({ popUp, ...props }) {
  return (
    <div
      className={`${
        props.p_badgeTitle == "Hot"
          ? "bg-[#D71E2D]"
          : props.p_badgeTitle == "New"
          ? "bg-[#02856E]"
          : "bg-[#F74B81]"
      } ${
        !popUp ? "absolute top-0 left-0  rounded-br-3xl" : " rounded-[99px]"
      } sm:px-3 sm:py-1 px-2 py-[1px] md:px-6 md:py-2 w-fit  text-white text-[10px] md:text-sm z-10 `}
    >
      {props.p_badgeTitle}
    </div>
  );
}

export default ProductBadge;
