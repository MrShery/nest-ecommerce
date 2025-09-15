import React from 'react'

function Button({title,className,onClick}) {
  return (
    <button type='submit' onClick={onClick}  className={`outline-none   bg-[#3BB77E]  transition-all sm:px-[15px] py-2 myTransitionHalfSec    ${className}`}>{title}</button>
  )
}

export default Button
