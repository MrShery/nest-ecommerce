import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

function ProductWeight({ title, boxes, setFormData }) {
  const [selected, setSelected] = useState(0);
  const handleClick = (index) => {
    setFormData((e) => {
      let title2=title.toLowerCase()
      return { ...e, [title2]: boxes[selected] };
    });

    setSelected(index);
  };
  return (
    <div>
      <span className="block mb-1 text-[#7e7e7e] text-[8px] sm:text-[10px] md:text-[14px] ">{title}</span>{" "}
      <div className="flex sm:gap-1">
        {boxes.map((elem, index) => (
          <div
            onClick={() => {
              handleClick(index);
            }}
            key={elem + index}
            className="border-[#3BB78F] w-fit relative overflow-hidden  border-[0.5px] text-[8px] sm:text-[10px] md:text-normal text-[#7e7e7e]  sm:px-4 px-1 sm:py-2 ms-2 cursor-pointer"
          >
            {elem}
            {selected === index && (
              <span className="absolute  -right-3 -bottom-1 px-2 -rotate-45 bg-[#3BB78F] text-white">
                <IoMdCheckmark className="px-[2.5px] rotate-45 -translate-y-[3px] translate-x-[1px] " />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductWeight;
