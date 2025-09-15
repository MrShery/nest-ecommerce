import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";

const NavAccordion = ({ linksData, icon, title, path, onClick, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={` flex flex-col gap-3 py-5 h-fit border-b px-2 ${className} `}
    >
      <div className="flex justify-between " onClick={() => setIsOpen(!isOpen)}>
        <div className="flex gap-2 items-center text-sm">
          {icon}
          <span>{title}</span>
        </div>

        {linksData.length !== 0 && (
          <IoIosArrowDown
            className={`"  text-xl mt-1 myTransition " ${
              isOpen && "rotate-180"
            }`}
          />
        )}
      </div>
      {isOpen &&
        linksData.map((link, index) => (
          <Link
            onClick={onClick}
            to={path}
            state={title === "Browse Categories" && link}
            key={"NavLink" + link + index}
            className="text-sm px-2"
          >
            {link}
          </Link>
        ))}
    </div>
  );
};

export default NavAccordion;
