import React, { useState } from "react";
import BreadCrum from "../../Components/BreadCrum";
import "./CSS/style.css";
import useCselector from "../../Hooks/useCselector";
import FilterCol from "../../Components/FilterCol";
import PriceRange from "../../Components/PriceRange";
import Button from "../../Components/Button";
import { CiFilter } from "react-icons/ci";
import { GrPowerCycle } from "react-icons/gr";
import { RiGalleryView2 } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FilterContainer from "../../Components/FilterContainer";
import { TbSortAscending2 } from "react-icons/tb";
import ShopPageProductContainer from "../../Components/ShopPageProductContainer";
import SubscriptionCTASection from "../Home/Sections/SubscriptionCTASection";
import ServicesSection from "../Home/Sections/ServicesSection";

const ShopPage = () => {


  return (
    <div className="w-full flex flex-col gap-4 h-fit p-2">
    
       <FilterContainer />
     <ShopPageProductContainer/>
     <SubscriptionCTASection
        heading="Stay home & get your daily"
        brHeading="needs from our shop"
        subHeading="Start Your Daily Shopping with Nest Mart"
      bgImg="https://nest.botble.com/themes/nest/imgs/banner/banner-10.png"/>
      <ServicesSection />
    </div>
  );
};

export default ShopPage;
