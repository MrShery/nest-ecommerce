import React, { useRef } from "react";
import RatingStars from "../RatingStars";
import RatingLines from "../RatingLines";
import Anchor from "../Anchor";
import Steric from "../Steric";

import ReviewForm from "./ReviewForm";
import ReviewImages from "./ReviewImages";
import ReviewItem from "./ReviewItem";

const Reviews = ({ ...props }) => {
  return (
    <div className="w-[100%] h-full">
      <div className="w-full h-full py-3  flex justify-center flex-wrap gap-4 relative">
        <div className=" h-fit p-8 border">
          <h3 className="text-xl">Customer reviews</h3>
          <div className="flex gap-1 py-4">
            <h3 className="text-3xl font-medium">2.50</h3>
            <RatingStars rating={10} content={"(10 Reviws)"} clickAble={true} />
          </div>
          <div className=" w-fit flex flex-col gap-1">
            <RatingLines />
            <RatingLines />
            <RatingLines />
            <RatingLines />
            <RatingLines />
          </div>
        </div>
        <div className=" flex flex-col gap">
          <div>
            <h3 className="text-2xl font-semibold">Add your review</h3>
            <p className=" text-[#7E7E7E] text-wrap">
              Your email address will not be published. Required fields are
              marked * <Steric className="text-[#FD6E6E]" />
            </p>
          </div>
          <p className="text-[#FD6E6E]">
            Please <Anchor path={"/LogInPage"} title={"login"} /> to write
            review!
          </p>
          <div className="flex gap-2">
            <p className="flex gap-1 items-center font-medium text-[#7E7E7E] ">
              Your rating: <Steric className="text-[#FD6E6E]" />{" "}
              <RatingStars rating={20} title={""} />
            </p>
          </div>
          <p className="font-medium text-[#7E7E7E]">
            Review: <Steric className="text-[#FD6E6E]" />{" "}
          </p>
          <ReviewForm />
        </div>
      </div>
      <h3 className="text-2xl font-semibold pb-4 pt-8">
        Images from customer (26)
      </h3>
      <ReviewImages />
      <h3 className="text-2xl font-bold pb-4 pt-12">
        10 review(s) for "{props.productTitle}"
      </h3>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
};

export default Reviews;
