import Img1 from "../assets/cartItem2.jpg";
import Img2 from "../assets/cartItem1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default ( {popUp}) => {
  const swiperRef = useRef(null);
  const [activeIndex,setActiveIndex]=useState(0)

  const handleThumbnailClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index)
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        className={`${!popUp&&"md:h-[350px] lg:h-[500px] w-[40vw] md:w-[45vw] lg:w-[36vw]"}  rounded-xl border border-[#ECECEC] relative   `}
      >
        {[Img1, Img2].map((item, index) => (
          <SwiperSlide key={index} >
            <img src={item} alt="#" className={`${!popUp&&"w-full h-full"}`}  />
          </SwiperSlide>
        ))}
        <IoSearchOutline className="absolute right-0 top-2 md:right-4 md:top-4 z-10 md:text-2xl text-[#B8B8B8]" />
      </Swiper>
      <div className={`${!popUp&&"mt-8"} custom-navigation flex  justify-center gap-2 py-3 overflow-auto`}>
        {[Img1, Img2].map((item, index) => (
          <img
          key={index}
            src={item}
            alt=""
            onClick={() => handleThumbnailClick(index)}
            className={`${!popUp?"md:w-24 ms:w-18 w-10 md:h-24 ms:h-18 h-10":"w-14 h-14"}  rounded-xl cursor-pointer p-1 ${activeIndex==index&&"border border-[#A2D2C9]"} `}
          />
        ))}
      </div>
    </>
  );
};
