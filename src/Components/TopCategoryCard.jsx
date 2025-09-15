import React from "react";
import { Link, useLocation } from "react-router";

const TopCategoryCard = ({ totalItems, categoryName }) => {
  const location = useLocation;
  const bgColors=["#FFFCEB","#FFF3EB","#ECFFEC","#F2FCE4","#FFF3FF","#FEEFEA"];
  const selectedBg=bgColors[Math.floor(Math.random()*bgColors.length)]
  return (
    <div style={{backgroundColor:selectedBg}} className="w-[111px] h-fit border rounded-md mx-auto group text-center px-2 py-4 cursor-pointer  hover:shadow-lg myTransition">
      <Link
        to={
          location.pathname != encodeURIComponent(location.pathname) &&
          "/Shop Page"
        }
        state={categoryName}
      >
        <img
          src="https://nest.botble.com/storage/product-categories/image-1.png"
          alt="imgage"
          className="w-fit h-fit p-2  group-hover:scale-105 myTransition"
        />
        <h4
          className=" overflow-hidden text-nowrap text-ellipsis cursor-pointer group-hover:text-[#43BA83] myTransition  "
          title={categoryName}
        >
          {categoryName}
        </h4>
        <p className="text-gray-700 font-medium">{totalItems}</p>
      </Link>
    </div>
  );
};

export default TopCategoryCard;
