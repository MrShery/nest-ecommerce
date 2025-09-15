import React, { useEffect, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
function RatingStars({
  rating,
  content,
  className = "",
  yellowStarClassName,
  ...props
}) {
  const [showRating, setShowRating] = useState(0);

  let stars = [1, 2, 3, 4, 5];
  useEffect(() => {
    setShowRating((rating * 16) / 2);
  }, [rating]);

  return (
    <div
      className={` flex relative items-center ${className} `}
    >
      {stars.map((item, index) => (
        <TiStarFullOutline
          onClick={(e) => props.clickAble && setShowRating((index + 1) * 16)}
          key={item + index}
          className="text-[#7e7e7e] cursor-pointer  text-[9px] xs:text-[16px] "
        />
      ))}
      <div
        style={{ width: `${showRating}px` }}
        className={`absolute flex max-w-[80px] left-0  overflow-hidden  `}
      >
        {stars.map((item, index) => (
          <TiStarFullOutline
            onClick={(e) => props.clickAble && setShowRating((index + 1) * 16)}
            className={` text-yellow-300 flex-shrink-0 cursor-pointer text-[9px] xs:text-[15.3px] ${yellowStarClassName} `}
            key={item + index + "s"}
          />
        ))}
      </div>
      {(content != undefined || "" || null) && (
        <span className="ps-2 text-[#7e7e7e]  break-words text-[9px] xs:text-[16px]">
          {`(${content})`}
        </span>
      )}
    </div>
  );
}

export default RatingStars;
