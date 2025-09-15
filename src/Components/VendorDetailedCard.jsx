import React, { useEffect, useState } from "react";
import { FiHeadphones } from "react-icons/fi";
import ContectInfo from "./ContectInfo";
import { IoLocationOutline } from "react-icons/io5";
import RatingStars from "./RatingStars";
import useCselector from "../Hooks/useCselector";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import SetionTitle from "./SectionTitle";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "Yup";

const VendorDetailedCard = ({ vendor }) => {
  const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(20).required("Please Enter Your Name!!"),
    email: Yup.string().email().required("Please Enter Your Email!!"),
    message: Yup.string().email().required("Please Type Your Message!!"),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const defaultVendor = {
    vendorName: "Unknown",
    rating: "Unknown",
    contact: "+000000000000",
    address: "Unknown",
    logo: "",
    sinceYear: "Unknown",
    description:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.",
    socialLinks: {
      fb: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  };
  const allVendors = useCselector("allVendors");
  const [vendorDets, setVendorDets] = useState(defaultVendor);
  const {
    logo,
    vendorName,
    description,
    sinceYear,
    rating,
    contact,
    address,
    socialLinks,
  } = vendorDets;
  const findVendor = () => {
    let newVendor = [];
    newVendor = allVendors.filter((elem) => elem.vendorName == vendor);
    setVendorDets(newVendor[0]);
  };
  useEffect(() => {
    findVendor();
  }, []);
  return (
    <div className="bg-[#D1E8F2] xl:w-[313px] w-full px-7 py-10 rounded-lg">
      <img src={logo} alt="" className="w-[144px] cursor-pointer" />
      <div className="pt-8">
        <p>Since {sinceYear}</p>
        <h2 className="text-[24px] font-semibold hover:text-green-600 w-fit myTransition cursor-pointer">
          {vendorName}
        </h2>

        <RatingStars rating={rating} content={rating} className="w-fit" />
        <p className="py-4">{description}</p>
      </div>
      <div>
        <h4 className="font-semibold ">Follow Us</h4>
        <div className="flex gap-3 items-center py-3">
          <a href={socialLinks.fb}>
            <FaFacebook className="text-[#3C5A9A] text-[30px]" />
          </a>
          <a href={socialLinks.twitter}>
            <FaTwitter className="text-[#1DA1F2] text-[25px] " />
          </a>
        </div>
        <div className=" py-2">
          <ContectInfo
            icon={<IoLocationOutline />}
            title={"Address:"}
            discription={address}
          />
          <ContectInfo
            icon={<FiHeadphones />}
            title={"Call Us:"}
            discription={contact}
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <SetionTitle
            borderStyle="border-[#ECECEC]"
            line={true}
            border={true}
            title={"Contact Vendor"}
            className="font-bold "
          />
          <p>
            All messages are recorded and spam is not tolerated. Your email
            address will be shown to the recipient.
          </p>
          <div className="relative">
            {<p className="text-red-400 text-sm ">{errors.name}</p>}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="p-4 w-full rounded-xl outline-none focus:outline-[#95D4C3] outline-[.5px] focus:bg-[#D1E8F2]"
            />
          </div>
          <div className="relative">
            {<p className="text-red-400 text-sm ">{errors.email}</p>}
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your Email Address"
              className="p-4 w-full rounded-xl outline-none focus:outline-[#95D4C3] outline-[.5px] focus:bg-[#D1E8F2]"
            />
          </div>
          <div className="relative">
            {<p className="text-red-400 text-sm ">{errors.message}</p>}
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Type Your Message"
              className="p-4 w-full h-[200px] rounded-xl outline-none focus:outline-[#95D4C3] outline-[.5px] focus:bg-[#D1E8F2]"
            ></textarea>
          </div>
          <Button
            title="Send message"
            className="text-white w-fit rounded-xl py-4 px-[30px]"
          />
        </form>
      </div>
    </div>
  );
};

export default VendorDetailedCard;
