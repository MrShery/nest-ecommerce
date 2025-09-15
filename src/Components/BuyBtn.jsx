import React from 'react'

function BuyBtn({title,path}) {
  return (
    <button className='bg-[#5A97FA] hover:bg-[#29A56C] myTransition2 sm:px-6 px-[4px] md:py-[18px] py-[7px] text-[10px] sm:text-normal sm:py-[11px] rounded-md text-white font-semibold h-fit w-fit' ><a href={path}>{title}</a></button>
  )
}

export default BuyBtn
