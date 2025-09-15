import React from "react";
import Banner from "../../../Components/Banner";

const BannerSection = () => {
  const bannersData = [
    {
      b_imgUrl: "https://nest.botble.com/storage/promotion/1.png",
      b_title: "Everyday Fresh & Clean with Our Products",
    },
    {
      b_imgUrl: "https://nest.botble.com/storage/promotion/2.png",
      b_title: "Make your Breakfast Healthy and Easy",
    },
    {
      b_imgUrl: "https://nest.botble.com/storage/promotion/3.png",
      b_title: "The best Organic Products Online",
    },
  ];
  return (
    <section className="w-full h-fit flex gap-4  flex-wrap justify-around py-10">
      {bannersData.map((banner, id) => (
        <Banner key={id+banner.b_title} bannerTitle={banner.b_title} bannerImgUrl={banner.b_imgUrl} />
      ))}
    </section>
  );
};

export default BannerSection;
