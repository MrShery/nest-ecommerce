import React from 'react'
function AddToCartBtn({title,className,icon,onClick}) {
  return (
    <button
    onClick={onClick}
            type="button "
            className={` text-[7vw] xs:text-[3vw] sm:text-[18px] md:text-[16px] rounded-[4px] px-2 xs:px-2 sm:px-3 md:px-4 py-[1px] xs:py-1 sm:py-1 md:py-2 flex items-center gap-[4px] text-[#3BB77E] hover:bg-[#3BB77E] hover:text-white myTransition hover:-translate-y-[5px]  font-semibold ${className} `}
          >
            {icon}
            <span>{title}</span>
          </button>
  )
}

export default AddToCartBtn
