import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TopCategoryCard from "../../../Components/TopCategoryCard";
import SetionTitle from "../../../Components/SectionTitle";
import { useSelector } from "react-redux";
const TopCategories = () => {
  const categorySlice = useSelector((state) => state.categorySlice);
  const categories = categorySlice[0];
  const itemsInEachCategory = categorySlice[1];
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(Math.floor(window.document.body.offsetWidth / 130));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationBtnClasses =
    " cursor-pointer hover:bg-[#3BB77E] transition-all  flex items-center justify-center rounded-full bg-[#F2F3F4] md:px-3 px-[1vw]  md:py-3 py-[1vw]  group";

  return (
    <div className="w-full h-fit overflow-x-hidden">
      <div className="flex justify-between px-3 items-center">
        <SetionTitle
          title={"Top Categories"}
          line={false}
          border={false}
          className={"  text-[#253D4E]  font-extrabold "}
        />
        <div className="flex gap-1">
          <button className={navigationBtnClasses + " topCat-custom-prev"}>
            <FaArrowLeft className="p-0.5 text-gray-500 group-hover:text-white transition-all" />
          </button>
          <button className={navigationBtnClasses + " topCat-custom-next"}>
            <FaArrowRight className="p-0.5 text-gray-500 group-hover:text-white transition-all" />
          </button>
        </div>
      </div>
      <Swiper
        navigation={{
          prevEl: ".topCat-custom-prev",
          nextEl: ".topCat-custom-next",
        }}
        modules={[Navigation]}
        slidesPerView={windowWidth}
        className={"mySwiper"}
      >
        {categories.map((elem, index) => (
          <SwiperSlide key={elem + index} className="py-2">
            <TopCategoryCard
              categoryName={elem}
              totalItems={itemsInEachCategory[index]?.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCategories;
