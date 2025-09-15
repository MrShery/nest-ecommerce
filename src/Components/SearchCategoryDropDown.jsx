import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import useCselector from "../Hooks/useCselector";
const CataDropDown = ({ setCategory }) => {
  const [selected, setSelected] = useState("All Categories");
  const [toggle, setToggle] = useState(false);
  const categoryProducts = useCselector("categorySlice");
  const dropDownOption = ["All Categories", ...categoryProducts[0]];
  const showCategories = () => {
    setToggle(!toggle)};
  const selectItem = (item) => {
    setToggle(!toggle);
    setSelected(item);
    setCategory([item]);
  };
  return (
      <div
        onClick={showCategories}
        className="w-full max-w-fit flex items-center gap-2 px-3 justify-center relative  border-e  cursor-pointer z-[150]"
      >
        <h4 className="text-sm">{selected}</h4>
        {toggle && (
          <div className=" shadow-lg bg-white border absolute top-[170%] left-0 w-full min-w-fit  h-fit z-[60]">
            {dropDownOption.map((item, index) => (
              <h2
                key={item + index}
                onClick={() => selectItem(item)}
                className="hover:bg-blue-500 hover:text-white cursor-pointer  text-nowrap ps-2"
              >
                {item}
              </h2>
            ))}
          </div>
        )}
        <RiArrowDownSLine
          className={`${toggle && "rotate-180"} transition-all text-[20px]`}
        />
      </div>
  );
};
export default CataDropDown;
