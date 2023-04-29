import React from 'react'
import { LinearGradient as LG } from 'react-text-gradients'
function BgText({inner, outer}) {
  return (
    <div className="my-10 relative flex justify-center items-center">
        <h1 className='text-[40px] md:text-[135px] absolute font-bold text-blue-900 opacity-[0.1]'>{inner}</h1>
        <h1 className='text-[20px] md:text-[45px] font-bold'>{outer}</h1>
      </div>
  )
}

export default BgText
