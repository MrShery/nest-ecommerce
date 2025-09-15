import React, { useState } from "react";

function ProductAction({ ...props }) {
  const [isHovered,setIsHovered]=useState(false);
  const [showSpin, setShowSpin] = useState(false);
  const actionDivStyling = `relative px-[5px] py-[4px] flex justify-center items-center  border-[#3BB78F]  border-e-[0.5px]  group  ${props.className}  `;
  const toolTipStyling =
    ` absolute w-fit text-nowrap -top-8 bg-[#3BB77E] text-[12px] text-white font-semibold py-1 px-2 rounded myTransition ${isHovered? " opacity-100 visible":"opacity-0 invisible"}  `;
 
    return (
    <div
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
      onClick={(even) => {
        even.stopPropagation();
        props.action();
        setShowSpin(true);
        const timeoutId = setTimeout(() => {
          setShowSpin(false);
        }, 1000);
    
      }}
      className={actionDivStyling}
    >
      {props.icon}
      {showSpin && props.loadingSpin && (
        <div className=" w-full h-full  absolute bg-[#3BB77E] flex justify-center items-center">
          <div className="SpinAnimation"></div>
        </div>
      )}
      {props.toolTip && <div className={toolTipStyling}> {props.toolTipTitle}</div>}
    </div>
  );
}

export default ProductAction;
