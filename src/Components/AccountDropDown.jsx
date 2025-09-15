import React from "react";
import UserIcon from "../assets/icon-user.svg";

function AccountDropDown() {
  return (
    <div className="absolute border bg-white w-[200px]  h-[127px] flex flex-col gap-4 ps-6 justify-center rounded-lg right-0 opacity-0 group-hover:opacity-100 top-[230%] group-hover:top-[100%] transition-all invisible  group-hover:visible">
      <div className="flex gap-4  hover:text-[#87C8A7] transition-all cursor-pointer ">
        {" "}
        <img src={UserIcon} alt="" className="w-4" /> <h2>Login</h2>
      </div>
      <div className="flex gap-4  hover:text-[#87C8A7] transition-all cursor-pointer ">
        {" "}
        <img src={UserIcon} alt="" className="w-4" /> <h2>Register</h2>
      </div>
    </div>
  );
}

export default AccountDropDown;
