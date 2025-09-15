import React from 'react'

function Specifications() {
  return (
    <div className='w-full h-full flex justify-center items-center '>
      <table className='w-fit h-fit border'>
        <tr>
            <td className='bg-[#F9F9F9] w-[245px] h-[49px] px-6 py-3 border-e'>Height</td>
            <td className=' w-[390px] h-[49px] px-6 py-3'>61.15 cm</td>
        </tr>
        <tr className='border-t'>
            <td className='bg-[#F9F9F9] w-[245px] h-[49px] px-6 py-3 border-e'>Width</td>
            <td className=' w-[390px] h-[49px] px-6 py-3'>79.95 cm</td>
        </tr>
        <tr className='border-t'>
            <td className='bg-[#F9F9F9] w-[245px] h-[49px] px-6 py-3 border-e'>Weight</td>
            <td className=' w-[390px] h-[49px] px-6 py-3'>39.6 cm</td>
        </tr>
        <tr className='border-t'>
            <td className='bg-[#F9F9F9] w-[245px] h-[49px] px-6 py-3 border-e'>Power</td>
            <td className=' w-[390px] h-[49px] px-6 py-3'>26.92 cm</td>
        </tr>
        <tr className='border-t'>
            <td className='bg-[#F9F9F9] w-[245px] h-[49px] px-6 py-3 border-e'>Speed</td>
            <td className=' w-[390px] h-[49px] px-6 py-3'>78.16 cm</td>
        </tr>
      </table>
    </div>
  )
}

export default Specifications
