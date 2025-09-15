import React from "react";
import NaturalFoodLogo from "../assets/NaturalFoodLogo.png";
import Anchor from "./Anchor";
import RatingStars from "./RatingStars";
import ProductKeyFeatures from "./ProductKeyFeatures";
import { IoLocationOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { LuHeadphones } from "react-icons/lu";

const Vendors = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className=" flex gap-2">
        <img src={NaturalFoodLogo} alt="" />
        <div>
          <Anchor title={"GoPro"} style={"font-semibold"} path={"/"} />
          <RatingStars rating={5} content={"(60) Reviews"} />
        </div>
      </div>
      <div className="ps-7">
      <ProductKeyFeatures
        icon={<GrLocation className="text-lg text-[#7FD0AB] " />}
        style={{gap:"6px"}}
        content={
          <span className="font-semibold">
            Address:{" "}
            <span className="font-normal">
              521 Pat Crest, Dameonhaven, Michigan, IT
            </span>
          </span>
        }
      />
      <ProductKeyFeatures
        icon={<LuHeadphones className="text-lg text-[#7FD0AB] " />}
        style={{gap:"6px",paddingTop:"10px"}}
        content={
          <span className="font-semibold">
            Contact Seller:
            <span className="font-normal">
            +17749778923
            </span>
          </span>
        }
      />
      </div>
      <p className="font-semibold text-gray-500 pt-9">Sequi sit ipsam illo maxime repellat. Adipisci illum odit illo assumenda consequatur eligendi. Quisquam debitis voluptas qui dolore qui modi.</p>
    </div>
  );
};

export default Vendors;
