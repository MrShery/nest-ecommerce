import React from 'react'
import Anchor from './Anchor'
import ProductKeyFeatures from './ProductKeyFeatures'
import { LuClock9 } from 'react-icons/lu'
import { FaPaperPlane, FaRegCreditCard } from 'react-icons/fa'

function ProductDetailsDescrip({className}) {
  return (
    <div className={` flex flex-col gap-1 ${className} `}>
    <p className='text-[10px] xs:text-sm sm:text-normal'>
      Short Hooded Coat features a straight body, large pockets with
      button flaps, ventilation air holes, and a string detail along
      the hemline.
    </p>
    <div className={` flex flex-col gap-1 ${className} `}>
      <ProductKeyFeatures
        icon={<LuClock9 className="text-[#3FB881] flex-shrink-0" />}
        content={"1 Year AL Jazeera Brand Warranty"}
      />
      <ProductKeyFeatures
        icon={<FaPaperPlane className="text-[#3FB881] flex-shrink-0" />}
        content={"30 Day Return Policy"}
      />
      <ProductKeyFeatures
        icon={<FaRegCreditCard className="text-[#3FB881] flex-shrink-0" />}
        content={"Cash on Delivery available"}
      />
    </div>
  </div>
  )
}

export default ProductDetailsDescrip
