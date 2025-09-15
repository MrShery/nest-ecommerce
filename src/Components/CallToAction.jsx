import React from "react";
import { useNavigate } from "react-router";
function CallToAction({ icon, count, title, dropDown, path, ...props }) {
  const navigate = useNavigate();
  const handleClick = () => {
    location.pathname !== `/${encodeURIComponent(path)}`&& navigate(path)
  };
  return (
    <div
      onClick={handleClick}
      className="flex gap-2 items-end relative group py-3 cursor-pointer"
    >
      <div className=" relative ">
        {icon}{" "}
        {count !== "" && (
          <span className=" sm:w-4 xs:w-3  sm:h-4 xs:h-3 absolute -top-2 -right-2 hidden  text-white text-[8px] sm:text-[11px] font-semibold overflow-hidden text-ellipsis  xs:flex items-center justify-center   bg-[#3BB77E] rounded-full   ">
            {count}
          </span>
        )}
      </div>
      <h6 className={`"font-thin -mb-1 " ${props.titleClassName}`}>{title}</h6>
      {dropDown}
    </div>
  );
}

export default CallToAction;
