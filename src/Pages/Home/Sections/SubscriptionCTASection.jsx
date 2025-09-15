import React, { useRef } from "react";
import Button from "../../../Components/Button";
import { IoMdPaperPlane } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "up";

const SubscriptionCTASection = ({
  heading,
  brHeading,
  subHeading,
  bgImg,
  slider = false,
}) => {
  const subscribeSchema = Yup.object({
    email: Yup.string().email().required("Please enter Your valid Email "),
  });
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: { email: "" },
    validationSchema: subscribeSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (errors.email) alert(errors.email);
    handleSubmit();
  };
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <section className="w-[98%] relative mt-4 overflow-x-hidden">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className=" w-full h-full flex flex-col justify-center items-center md:items-start gap-4  md:px-16 xs:px-8 px-2 md:py-20 xs:py-10 py-5  rounded-[19px] bg-cover bg-bottom"
      >
        <h2
          className={`md:text-[40px] text-[4vw] font-bold text-wrap text-[#253D4E] leading-[10vw] sm:leading-[4vw] xs:leading-[6vw] ${
            slider && "md:text-[64px] md:leading-[6vw] pb-0 sm:pb-6 "
          }`}
        >
          {heading}
          <br /> {brHeading}
        </h2>
        <p
          className={` md:text-lg text-[3vw]  font-semibold text-[#253D4E] z-[50] ${
            slider && "md:text-[30px] text-[13px]  "
          }`}
        >
          {subHeading}
        </p>
        <form
          onSubmit={onSubmit}
          className="flex z-[50] items-center w-[50vw] md:w-fit rounded-[99px] bg-white gap-2  md:gap-4 mt-8 cursor-text"
          onClick={handleClick}
        >
          <IoMdPaperPlane className="text-xl text-[#7E7E7E] ms-2 md:ms-4  " />
          <input
            ref={inputRef}
            type="text"
            name="email"
            id="subEmail"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="outline-none w-full sm:text-normal xs:text-[12px] text-[8px]"
          />
          <Button
            title={"Subscribe"}
            className={
              " rounded-[99px] md:text-normal text-[14px]  hover:bg-[#29A56C] py-[3px] px-[10px] md:px-10 md:py-[14px] md:ms-8 md:font-semibold  text-white"
            }
          />
        </form>
      </div>
      {!slider && (
        <img
          src="https://nest.botble.com/storage/general/newsletter-image.png"
          alt="img"
          className={`w-[40vw] md:w-[530px] sm:w-[300px] md:h-[288px] xs:h-[188px] h-[13vh] absolute bottom-0 right-0 ${
            slider && "text-[64px]"
          }`}
        />
      )}
    </section>
  );
};

export default SubscriptionCTASection;
