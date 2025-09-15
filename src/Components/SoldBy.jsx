import React from 'react'

const SoldBy = ({companyName,className,pathName="/"}) => {
  return (
    <span className={`text-gray-500 text-[4.2vw] xs:text-[2.2vw] sm:text-[16px]   ${className}`}>
          Sold By
          <a
            href={pathName}
            className="text-[#3BB78F] hover:text-[#FECC40] transition-all px-1"
          >
            {companyName}
          </a>
        </span>
  )
}

export default SoldBy
