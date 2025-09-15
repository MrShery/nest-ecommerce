import React from "react";
import { Link } from "react-router";

const ProductName = ({ title, path, className }) => {
  return (
    <h2
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={` truncate font-semibold  hover:text-[#3BB78F] cursor-pointer transition-all py-1 text-[6vw] xs:text-[18px] sm:text-[18px] md:text-[20px]  ${className}`}
      title={title}
    >
      <Link to={path}>{title}</Link>
    </h2>
  );
};
export default ProductName;
