import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import SubscriptionCTASection from "./SubscriptionCTASection";
// slider images
import sliderImg2 from "../../../../src/assets/slider-img-2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function MainSlider() {
  const navigationBtnClasses =
    " absolute z-10 cursor-pointer hover:bg-[#3BB77E] transition-all  flex items-center justify-center rounded-full bg-[#F2F3F4] sm:px-3 md:px-4 px-[.5px] sm:py-3 md:py-4 py-[.5px] group";

  return (
    <div className="w-full relative mainSlider">
      <button
        className={
          navigationBtnClasses +
          " mainS-custom-prev xs:left-6 left-4 top-[50%] translate-y-[-50%] "
        }
      >
        <IoIosArrowBack className=" sm:text-xl p-1 sm:p-0 text-gray-500 group-hover:text-white transition-all" />
      </button>
      <button
        className={
          navigationBtnClasses +
          " mainS-custom-next xs:right-9 right-2 top-[50%] translate-y-[-50%]"
        }
      >
        <IoIosArrowForward className=" sm:text-xl p-1 sm:p-0 text-gray-500 group-hover:text-white transition-all" />
      </button>

      <Swiper
        spaceBetween={0}
        effect={"fade"}
        loop={true}
        autoplay={true}
        navigation={{
          prevEl: ".mainS-custom-prev",
          nextEl: ".mainS-custom-next",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="ps-4  ">
          <SubscriptionCTASection
            heading="Don't miss amazing"
            brHeading="grocery deals"
            subHeading="Sing Up for daily newsletter"
            slider={true}
            bgImg={"https://nest.botble.com/storage/sliders/1-1.png"}
          />
        </SwiperSlide>
        <SwiperSlide className="ps-4 ">
          <SubscriptionCTASection
            heading="Fresh Vegetables"
            brHeading="Big discount"
            subHeading="Save up to 50% off on your first order"
            slider={true}
            bgImg={sliderImg2}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
