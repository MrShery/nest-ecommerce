import React, { useEffect, useRef, useState } from "react";

import MyImg from "../../assets/cartItem1.jpg";

import ReviewImgSlider from "./ReviewImgSlider";


const ReviewImages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <>
      <div className=" w-[98%] flex flex-wrap h-fit  gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <div className="w-[70px] h-[70px] bg-slate-500 relative cursor-pointer border">
            <img
              src={MyImg}
              alt=""
              className="w-full h-full"
              onClick={() => handleOpenModal()}
            />
            {index == 11 && (
              <div
                onClick={() => handleOpenModal()}
                className="w-full h-full absolute top-0  left-0 bg-[#0000009c]  flex justify-center items-center "
              >
                {" "}
                <span className="text-[11px] py-1 font-semibold text-white bg-black px-2 rounded-md">
                  +14 more
                </span>
              </div>
            )}
          </div>
        ))}

        {isModalOpen && (
      <ReviewImgSlider handleCloseModal={handleCloseModal}/>
        )}
      </div>
    </>
  );
};

export default ReviewImages;
