import React from "react";
import { Link } from "react-router";

const FooterLinkCol = ({ heading,linksData }) => {
  return (
    <div className="w-[130px] sm:w-[300px] pt-4   ">
      <h2 className="text-2xl font-bold pb-4 text-[#161616e0]">{heading}</h2>
      <ul>
        {linksData.map((elem, index) => (
          <li key={index+elem.title} className="list-none w-fit font-normal text-[15px] hover:text-[#53a753] hover:translate-x-1 myTransition py-[6px]">
            <Link state={elem.title} to={elem.path}>{elem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkCol;
