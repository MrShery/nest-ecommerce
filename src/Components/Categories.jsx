import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import SetionTitle from "./SectionTitle";
import CategoryBadge from "./CategoryBadge";
function Categories({ sideBar, ...props }) {
  return (
    <div
      className={`${!props.showMore && " h-[491px] "} ${
        !props.toggle ? " opacity-100 visible " : " invisible opacity-0 "
      } w-[474px] h-[426px] items-center absolute left-0 top-[150%] px-5   transition-all bg-white z-10   flex flex-col flex-wrap  justify-around  myTransition  shadow border rounded-lg `}
    >
      {sideBar && <SetionTitle title={"Categories"} />}
      <div className={`${props.showMore && " overflow-hidden h-[336px]"}    `}>
        <CategoryBadge />
      </div>
      <button
        className={`${
          props.showMore && "-translate-y-5"
        } flex items-center gap-1  font-bold text-[#253D4E] `}
        onClick={() => props.setShowMore(!props.showMore)}
      >
        {props.showMore ? (
          <CiCirclePlus className="text-[#3BB77E] text-3xl" />
        ) : (
          <CiCircleMinus className="text-[#3BB77E] text-3xl" />
        )}
        {props.showMore ? "Show More..." : "Show less..."}
      </button>
    </div>
  );
}

export default Categories;
