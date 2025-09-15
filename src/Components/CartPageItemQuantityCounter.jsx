import React from 'react'
import QuantityCounter from './QuantityCounter'

export const CartPageItemQuantityCounter = ({handleOnChange,id}) => {
  return (
    <div className="flex justify-between ">
    <h2 className="font-semibold sm:hidden">Util Price</h2>
    <QuantityCounter
      onChangeFnc={handleOnChange}
      productID={id}
      cartPage={true}
    />
  </div>
  )
}
