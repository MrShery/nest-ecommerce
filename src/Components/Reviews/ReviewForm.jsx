import React, { useRef } from "react";
import Button from "../Button";
import { RxImage } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ReviewForm = () => {
  const login = true;
  const inputRef = useRef(null);
  function inputClick() {
    inputRef.current.click();
  }
  return (
    <form onSubmit={(e) => e.target.preventDefault()}>
      <textarea
        className="w-[93.5%] bg-[#E9ECEF] rounded-lg placeholder:py-2 px-4  outline-none  "
        name=""
        id=""
        placeholder="Write your reviews"
        disabled
      ></textarea>
      <div
        onClick={() => inputClick()}
        className="w-[68px] h-[68px]  cursor-pointer  border-dashed border flex flex-col justify-center items-center mb-2 mt-3 "
      >
        <RxImage />
        <input
          ref={inputRef}
          className="w-fit hidden"
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          multiple="multiple"
        />
        <p className="text-[8px]">Upload Photos</p>
      </div>
      <div className="bg-[#CFF4FC] w-fit py-3 px-2 mb-3 rounded text-[2.5vw] sm:text-sm flex items-center gap-2">
        {" "}
        <AiOutlineInfoCircle className="text-base" /> You can upload up to 6
        photos, each photo maximum size is 2 MB.
      </div>
      <Button
        title={"Submit"}
        style={" hover:bg-[#3BB77A] disabled:bg-[#7FD0AB]"}
        disabled={login}
      />
    </form>
  );
};

export default ReviewForm;
