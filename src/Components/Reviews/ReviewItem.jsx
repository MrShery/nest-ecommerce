import React from "react";
import MyImg from "../../assets/cartItem1.jpg";

import ReviewUserImg from "../../assets/ReviewItem_user_img.jpg";
import RatingStars from "../RatingStars";
const ReviewItem = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8 border-b py-5">
      <div>
        <img
          className=" sm:w-[60px] sm:h-[60px] rounded-full"
          src={ReviewUserImg}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          {" "}
          <h4 className="text-gray-500">Augustus Moore</h4>{" "}
          <span className="text-gray-400 text-sm">2 months ago</span>
        </div>
        <RatingStars
          rating={10}
          content={null}
          clickAble={false}
          style={{ fontSize: "18px" }}
        />
        <p className="font-medium text-[15px] text-gray-500 ">
          We have received brilliant service support and will be expanding the
          features with the developer. Nice product!
        </p>
        <div className="flex gap-2 pt-2">
          <img className="w-14 h-14 border rounded" src={MyImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
