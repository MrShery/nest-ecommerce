import React from "react";
import Logo from "./Logo";
import ContectInfo from "./ContectInfo";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";
import { AiOutlineFieldTime } from "react-icons/ai";
import FooterLinkCol from "./FooterLinkCol";

const Footer = () => {
  let company = [
    { title: "About us", path: "" },
    { title: "Affiliate", path: "" },
    { title: "Career", path: "" },
    { title: "Contact us", path: "" },
  ];
  let categories = [
    { title: "Milks and Dairies", path: "Shop Page" },
    { title: "Clothing & beauty", path: "Shop Page" },
    { title: "Pet Toy", path: "Shop Page" },
    { title: "Baking material", path: "Shop Page" },
    { title: "Fresh Fruit", path: "Shop Page" },
    { title: "Wines & Drinks", path: "Shop Page" },
  ];
  let information = [
    { title: "Contact Us", path: "" },
    { title: "About Us", path: "" },
    { title: "Cookie Policy", path: "" },
    { title: "Terms & Conditions", path: "" },
    { title: "Returns & Exchanges", path: "" },
    { title: "Shipping & Delivery", path: "" },
    { title: "Privacy Policy", path: "" },
  ];
  return (
    <section className="w-full h-fit px-4 py-10 ">
      <div className="flex flex-wrap justify-between">
        <div className=" w-full sm:w-[330px] flex flex-col gap-4">
          <Logo className="w-44" />
          <p className="text-lg">Awesome grocery store website template</p>

          <div>
            <ContectInfo
              icon={<CiLocationOn />}
              title={"Address:"}
              discription={
                "5171 W Campbell Ave undefined Kent, Utah 53127 United States"
              }
            />

            <ContectInfo
              icon={<MdOutlineHeadphones />}
              title={"Call Us:"}
              discription={"(+91) - 540-025-124553"}
            />

            <ContectInfo
              icon={<IoMdPaperPlane />}
              title={"Email:"}
              discription={"sale@Nest.com"}
            />
            <ContectInfo
              icon={<AiOutlineFieldTime />}
              title={"Working Hours:"}
              discription={"10:00 - 18:00, Mon - Sat"}
            />
          </div>
        </div>
        <FooterLinkCol heading="Company" linksData={company} />

        <FooterLinkCol heading="Categories" linksData={categories} />
        <FooterLinkCol heading="Information" linksData={information} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold pt-1">Install App</h2>
        <p className="text-[14px] pb-2">From App Store or Google Play</p>
        <div className="flex gap-2">
          <a href="">
            <img
              src="https://nest.botble.com/storage/general/app-store.jpg"
              alt=""
              className="w-32 hover:-translate-y-1 myTransition"
            />
          </a>
          <a href="">
            <img
              src="https://nest.botble.com/storage/general/google-play.jpg"
              alt=""
              className="w-32 hover:-translate-y-1 myTransition"
            />
          </a>
        </div>
        <div className="pt-2">
          <p>Secured Payment Gateways</p>
          <img
            src="https://nest.botble.com/storage/general/payment-methods.png"
            alt=""
            className="w-56 pt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
