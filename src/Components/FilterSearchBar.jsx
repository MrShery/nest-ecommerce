import React, { useRef, useState } from "react";
import Button from "./Button";
import { IoSearchOutline } from "react-icons/io5";

const FilterSearchBar = ({ handleOnChange, setInputValue }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value);
    handleOnChange();
  };
  return (
    <form onSubmit={handleSubmit} className="relative w-fit mx-auto my-6">
      <input
      name="name"
        ref={inputRef}
        type="text"
        className="px-6 py-3 md:py-5 pe-24 lg:w-[528px] rounded-full border outline-none shadow-xl"
        placeholder="Search Venders"
      />
      <Button
        onClick={() => {
          setInputValue(inputRef.current.value);
          handleOnChange();
        }}
        title={
          <IoSearchOutline className="text-xl text-white group-hover:text-black myTransition " />
        }
        className=" h-full px-9 rounded-e-full absolute right-0 hover:bg-[#FDC040] myTransition top-[50%] translate-y-[-50%] group"
      />
    </form>
  );
};

export default FilterSearchBar;
