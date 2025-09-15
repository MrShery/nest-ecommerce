import React, { useState } from "react";

function SubMenuDropDown({ subItem, subIndex }) {
  const [show, setShow] = useState(false);
  return (subIndex = 4 && (
    <div key={subIndex}>
      {subIndex != 4 ? (
        <h4 className="text-[#253D4E] font-semibold hover:text-[#87C8A7] cursor-pointer transition-all ">
          {subItem}
        </h4>
      ) : (
        <div
          key={subIndex}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="relative "
        >
          <h4 className="text-[#253D4E] font-semibold hover:text-[#87C8A7] cursor-pointer transition-all ">
            {subItem}
          </h4>
          <div
            className={`${
              show &&
              "group-hover:visible group-hover:opacity-100 group-hover:top-0  "
            } " bg-white transition-all  border shadow-lg absolute text-[16px] flex gap-3 flex-col justify-center px-6 w-[250px] py-6 left-[100%] top-[150%] opacity-0 invisible   rounded-md "`}
          >
            {[
              "Single Post Right Sidebar",
              "Single Post Left Sidebar",
              "Single Post Full Width",
              "Single Post With Product Listing",
            ].map((elem, index) => (
              <h4
                key={index+elem}
                className="text-[#253D4E] font-semibold hover:text-[#87C8A7] cursor-pointer transition-all "
              >
                {elem}
              </h4>
            ))}
          </div>{" "}
        </div>
      )}
    </div>
  ));
}

export default SubMenuDropDown;
