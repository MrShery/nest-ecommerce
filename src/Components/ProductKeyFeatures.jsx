import React from "react";

function ProductKeyFeatures({icon,content,...props}) {
  return (
    <p className={` flex items-center gap-3 text-[10px] xs:text-sm sm:text-normal ${props.className} `}>
      {icon}
      {content}
    </p>
  );
}

export default ProductKeyFeatures;
