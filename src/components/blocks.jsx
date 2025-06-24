import React from 'react'

export default function Blocks({image, text, bg, clr}) {
  return (
    <div style={{backgroundColor: `${bg}`}} className='w-[170px] h-[145px] border-1 rounded border-[#c8c8c8] flex flex-col gap-5 items-center justify-center'>
        <img src={"http://37.27.29.18:8002/images/" + image} alt="" />
        <p style={{color: `${clr}`}}>{text}</p>
    </div>
  )
}
