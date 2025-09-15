import React from 'react'

const ServieCard = ({title,subTitle,icon}) => {
  return (
    <div className=" w-[95%] sm:w-[245px] md:w-[245px] lg:w-[245px] xl:w-[245px] flex flex-col justify-center items-center h-[156px] rounded-lg bg-[#F4F6FA] group">
      <img src={icon} alt="" className='w-[60px] h-[60px] group-hover:-translate-y-1 myTransition' />
      <h2 className="text-[5vw] xs:text-[18px] md:text-[20px] font-semibold">{title}</h2>
      <p className='text-[#B4B4B4] pt-1'>{subTitle}</p>

    </div>
  )
}

export default ServieCard
