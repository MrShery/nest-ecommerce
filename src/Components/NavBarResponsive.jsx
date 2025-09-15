import React, { useEffect, useState } from "react";
import { GrCurrency, GrSearch } from "react-icons/gr";
import useCselector from "../Hooks/useCselector";
import { RiGalleryView2 } from "react-icons/ri";
import { Link } from "react-router";
import NavAccordion from "./NavAccordion";
import { BiHomeAlt } from "react-icons/bi";
import NavData from "./NavMenuData";
import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import CompIcon from "../assets/icon-compare.svg";
import CartIcon from "../assets/icon-cart.svg";
import UserIcon from "../assets/icon-user.svg";
import CallToAction from "./CallToAction";
import HeadPhone from "../assets/icon-headphone.svg";

import Logo from "../Components/Logo";
import SearchBarResNavBar from "./SearchBarResNavBar";
const NavBarResponsive = ({ setNavOpen }) => {
  const navMenuData = NavData;
  const categoryProducts = useCselector("categorySlice");
  const categoryList = categoryProducts[0];
  const handleOnClick=()=>{
    setNavOpen(false)
  }

 
  return (
    <nav
      
      className=" mx-w-[100px] h-screen z-[1000] fixed left-0 top-0 py-8  overflow-y-scroll bg-white  px-7 overflow-x-hidden resNav  "
    >
      <div className=" flex justify-between items-center py-5 border-b">
        <Logo className="w-[120px]" />
        <div
          onClick={() => setNavOpen(false)}
          className="bg-[#B9CFC4] text-gray-600 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
        >
          x
        </div>
      </div>
      <SearchBarResNavBar setNavOpen={setNavOpen}/>
     
      <div className="border-t">
        <div className="pb-10">
          <NavAccordion
            linksData={categoryList}
            title="Browse Categories"
            icon={<RiGalleryView2 />}
            path={"Shop Page"}
            onClick={handleOnClick}
          />
        </div>
        {navMenuData.map((navItem, index) => (
          <NavAccordion
            key={"navRes" + navItem.title + index}
            linksData={navItem.subMeneu}
            title={navItem.title}
            icon={index === 0 && <BiHomeAlt />}
            path={navItem.path}
            onClick={handleOnClick}
            className={index == navMenuData.length - 1 && "border-none"}
          />
        ))}
        <div className="w-[320px] min-h-[251px] px-2 py-3 max-h-fit border rounded-md my-5 ">
          <NavAccordion
            linksData={["English", " Tiếng Việt", "Arabic", "Urdu"]}
            title="Languages"
            icon={<FaGlobe />}
            path={""}
            onClick={handleOnClick}
            className="border-none py-[6.5px]"
          />
          <NavAccordion
            linksData={["USD", "EURO", "VND", "NGN"]}
            title="Currency"
            icon={<GrCurrency />}
            path={""}
            onClick={handleOnClick}
            className="border-none py-[6.5px]"
          />
          <div className="px-2 ">
            <CallToAction
              icon={<img src={CartIcon} alt="icon" className="w-4 " />}
              title={"Traking Order"}
              count={""}
              dropDown={""}
              path={"/Cart Page"}
              titleClassName="text-sm"
            />
          </div>
          <div className="px-2">
            <CallToAction
              icon={<img src={CompIcon} alt="icon" className="w-4 " />}
              title={"Compare"}
              count={""}
              dropDown={""}
              path={"/comparePage"}
              titleClassName="text-sm"
            />
          </div>
          <div className="px-2">
            <CallToAction
              icon={<img src={UserIcon} alt="icon" className="w-4 " />}
              title={"Log in/Sign Up"}
              count={""}
              dropDown={""}
              path={"/comparePage"}
              titleClassName="text-sm"
            />
          </div>
          <div className="flex gap-2 px-2 items-center text-center py-2  ">
            <img src={HeadPhone} alt="#image" className="w-4" />
            <p className=" text-sm font-bold ">1900 - 888</p>
          </div>
        </div>
        <div>
          <h4 className=" text-sm font-semibold text-[#253D4E]">Follow Us </h4>
          <div className="flex gap-2 py-3">
            {[
              <FaFacebookF className="text-white p-[1.5px] " />,
              <FaTwitter className="text-white p-[1.5px] " />,
              <FaInstagram className="text-white p-[1.5px] " />,
              <FaWhatsapp className="text-white p-[1.5px] " />,
              <FaYoutube className="text-white p-[1.5px] " />,
            ].map((social, index) => (
              <Link
                key={"navSocial" + index}
                className="w-[27px]  h-[27px] rounded bg-[#3BB77E] flex justify-center items-center"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm font-semibold py-10 text-[#5c5d5e] ">
          Copyright © 2025 Nest all rights reserved. Powered by Botble.
        </p>
      </div>
    </nav>
  );
};

export default NavBarResponsive;
