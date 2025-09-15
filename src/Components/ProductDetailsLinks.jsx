import React from "react";
import Anchor from "./Anchor";

function ProductDetailsLinks({ title, links }) {
  return (
    <div className="flex flex-wrap gap-2 items-center  leading-3 text-[14px]">
      {title}
      {links.map((item, index) => (
        <Anchor
          key={title+index}
          style={"text-[14px]"}
          title={item.title}
          path={item.path}
        />
      ))}
    </div>
  );
}

export default ProductDetailsLinks;
