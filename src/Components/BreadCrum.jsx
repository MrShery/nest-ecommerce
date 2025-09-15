import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
const BreadCrum = () => {
  const location = useLocation();
  const URL = decodeURIComponent(location.pathname);
  const locationData = URL.split("/");
  const styling =
    " font-semibold text-[14px] text-green-600  cursor-pointer hover:text-[#FECC40] capitalize transition ";
  return (
    <div className="w-full h-fit flex gap-2 items-center p-[1.8%]  border border-b">
      <Link to="/" className={styling + "text-green-600 "}>
        Home
      </Link>

      {locationData.map(
        (elem, index) =>
          elem != "" && (
            <Link
              key={index + elem}
              to={elem != locationData[locationData.length - 1] && elem}
              className={
                `${elem != locationData[locationData.length - 1] && styling}` +
                " flex items-center gap-2 text-[#253D4E] capitalize"
              }
            >
              {" "}
              <span className="text-[10px] font-extrabold">{">"}</span>
              {elem}
            </Link>
          )
      )}
    </div>
  );
};

export default BreadCrum;
