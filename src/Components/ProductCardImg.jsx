import React from 'react'

const ProductCardImg = ({productImg}) => {

  return (
    <img src={productImg}   alt="#product image" className="h-full w-full hover:scale-105 myTransitionHalfSec" />
  )
}

export default ProductCardImg
