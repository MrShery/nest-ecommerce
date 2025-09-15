import React, { useEffect, useState } from "react";
import useCselector from "../Hooks/useCselector";
import CategoriesIcons from "./../assets/CategoriesIcons/categoriesIcons.json";
import { Link, useLocation } from "react-router";

const CategoryBadge = ({ sideBar = false }) => {
  const categoriesData = useCselector("categorySlice") || [[], []];
  const categories = categoriesData?.[0] || [];
  const categoriesHashMap = categoriesData?.[1] || [];
  const [totalCategories, setTotalCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (sideBar) {
      setTotalCategories(Array.isArray(categories) ? categories.slice(0, 10) : []);
    } else {
      setTotalCategories(Array.isArray(categories) ? categories : []);
    }
  }, [categoriesData, sideBar]);

  const safeCategoryCount = (catItem) => {
    const index = categories.indexOf(catItem);
    const categoryItems = categoriesHashMap?.[index];
    return Array.isArray(categoryItems) ? categoryItems.length : 0;
  };

  if (!Array.isArray(totalCategories)) return null;

  return (
    <ul className={`${!sideBar ? "flex flex-wrap" : ""}`}>
      {totalCategories.map((catItem, index) => (
        <li
          key={index + catItem}
          className={`${
            !sideBar ? "w-[191px] px-[18px]" : "w-full"
          } flex list-none justify-center hover:shadow-lg transition h-[50px] py-[9px] me-[15px] mt-[15px] shadow border bg-white rounded`}
        >
          <Link
            to={
              location.pathname !== encodeURIComponent(location.pathname)
                ? "/Shop Page"
                : "#"
            }
            state={catItem}
            className={`${
              !sideBar ? "font-semibold" : "text-[14px]"
            } flex gap-4 items-center text-[#253D4E] leading-5 w-full px-3`}
          >
            <img
              src={CategoriesIcons[index]}
              alt=""
              className="w-[30px] h-[30px]"
            />
            {catItem}
            {sideBar && (
              <span className="w-5 h-5 rounded-full bg-[#B1E2CB] text-center ms-auto">
                {safeCategoryCount(catItem)}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBadge;
