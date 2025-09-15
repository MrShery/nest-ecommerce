import React, { useRef, useState } from "react";
import MyImg from "../../assets/cartItem1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { HiDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
const ReviewImgSlider = ({ ...props }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [active, setActive] = useState(0);
  const [modalImgUrl, setModalImgUrl] = useState("");
  const imgRef = useRef(null);
  return (
    <div className="w-screen h-screen bg-[#000000e7] fixed top-0 left-0 z-50">
      <div className="w-full py-5 px-6 flex justify-between bg-[#0c0c0cf3] text-white  items-center">
        {" "}
        <h3>{active}/24</h3>{" "}
        <div className="flex gap-4">
          <a download={modalImgUrl} href="#">
            <HiDownload />
          </a>{" "}
          <IoClose
            onClick={() => props.handleCloseModal()}
            className="cursor-pointer"
          />{" "}
        </div>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        onSlideChange={(swiper) => {
          setActive(swiper.activeIndex);
          setModalImgUrl(imgRef.current.src);
        }}
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full h-[400px] "
      >
        <SwiperSlide>
          <img
            ref={imgRef}
            className="w-[317px] h-[317px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
            src={MyImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[317px] h-[317px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
            src={MyImg}
          />
        </SwiperSlide>
      </Swiper>
      <div className="w-full py-4 flex justify-center items-center bg-[#0c0c0cf3] text-white ">
        {" "}
        Organic Food
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={13}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-[100%] h-[100%] border-2 hover:border-red-400 rounded-sm cursor-pointer"
            src={MyImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100%] h-[100%] border-2 hover:border-red-400 rounded-sm cursor-pointer"
            src={MyImg}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewImgSlider;
