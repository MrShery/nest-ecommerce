import React, { useState } from "react";
import Description from "./Description";
import Specifications from "./Specifications";
import Reviews from "./Reviews/Reviews";
import Vendors from "./Vendors";
import QuestionAnswer from "./QuestionAnswer";

function ProductInfo({ ...props }) {
  const [active, setActive] = useState(4);

  return (
    <div className="  w-[93%] h-fit   p-4 sm:w-[500px] md:w-[750px] lg:w-[980px]   lg:py-10 lg:px-12 md:py-8 md:px-10 sm:py-6 sm:px-8 border rounded-3xl">
      <div className=" w-full sm:w-[300px] md:w-[500px] lg:w-[1000px] flex h-fit flex-wrap  sm:gap-3">
        {[
          "Description",
          "Specification",
          "Reviews (10)",
          "Vendor",
          "Questions and Answers",
        ].map((elem, index) => (
          <button
            onClick={() => setActive(index)}
            key={elem + index}
            className={`${
              active == index ? "shadow-lg text-[#3BB77E] " : "text-[#7E7E8F]"
            }  cursor-pointer border rounded-[99px]   hover:shadow-lg px-6 py-2 mb-6 font-bold hover:text-[#3BB77E] myTransition hover:-translate-y-1`}
          >
            {elem}
          </button>
        ))}
      </div>
      {[
        <Description />,
        <Specifications />,
        <Reviews {...props} />,
        <Vendors />,
        <QuestionAnswer />,
      ].map((elem, index) => {
        if (index == active) {
          return elem;
        }
      })}
    </div>
  );
}

export default ProductInfo;
