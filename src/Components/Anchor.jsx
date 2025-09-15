import React from "react";
import { Link } from "react-router";

function Anchor({ style, title, path,...props }) {
  return (
    <Link
      href={path}
      className={` text-[#3BB78F] myTransition hover:text-[#FECC40] ${style} `}
    {...props}>
      {title}
    </Link>
  );
}

export default Anchor;
