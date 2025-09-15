import React, { useState } from "react";
import { RiGalleryView2 } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Categories from "./Categories";

function CategoriesBtn() {
  const [toggle, setToggle] = useState(true);
  const [showMore, setShowMore] = useState(true);
  return (
    <div className="relative z-[100]">
      <button
        onClick={() => setToggle(!toggle)}
        className="bg-[#29A56C] font-bold text-white rounded-md px-6 py-3 flex items-center gap-2"
      >
        <RiGalleryView2 className="text-xl " /> Browse All Categories{" "}
        {toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      <Categories
        toggle={toggle}
        setToggle={setToggle}
        showMore={showMore}
        setShowMore={setShowMore}
        sideBar={false}
      />
    </div>
  );
}

export default CategoriesBtn;
