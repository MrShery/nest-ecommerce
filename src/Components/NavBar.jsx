import React, { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HeadPhone from "../assets/icon-headphone.svg";
import SubMenu from "./SubMenu";
import NavMenuData from "./NavMenuData";
import CategoriesBtn from "./CategoriesBtn";
import { useLocation, useNavigate } from "react-router";

const NavBar = () => {
  const navMenu = NavMenuData;
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path) => {
    location.pathname != `/${encodeURIComponent(path)}` && navigate(path);
  };

  return (
    <div
      className="w-full hidden justify-between items-center px-2 border-y py-3 sm:hidden lg:flex" 
    >
      <div className="flex gap-10 ">
        <CategoriesBtn />
        <div className="flex gap-3">
          {navMenu.map((item, index) => (
            <ul key={"navMenu" + index} className="group relative">
              <li
                onClick={() => {
                  item.path != undefined && handleNavigation(item.path);
                }}
                className="flex  relative list-none gap-[6px] py-2 items-center font-semibold text-lg text-[#253D4E] hover:text-[#87C8A7] h-fit cursor-pointer  transition-all "
              >
                {index == 0 && (
                  <BiHomeAlt className="text-[11px] pt-[1px] mt-1 " />
                )}
                {item.title}
                {index !== 5 && index !== 6 && (
                  <IoIosArrowDown className="  text-[11px] mt-1 " />
                )}
              </li>
              {/* <SubMenu index={index} item={item} /> */}
           
            </ul>
          ))}
        </div>
      </div>
      <div className="flex items-center text-center lg:hidden xl:flex  ">
        <img src={HeadPhone} alt="#image" className="pb-1" />
        <p className="text-[26px] font-bold text-[#3BB77E] w-36 leading-3">
          1900 - 888 <span className="text-[12px]">24/7 Support Center</span>
        </p>
      </div>
    </div>
  );
};
export default NavBar;
