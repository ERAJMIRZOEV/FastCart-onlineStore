import React from 'react'

export default function Blocks({id, image, text, bg, clr}) {
  return (
    <div key={id} style={{backgroundColor: `${bg}`}} className='w-[170px] h-[145px] border-1 rounded border-[#c8c8c8] flex flex-col gap-5 items-center justify-center'>
        <img className='w-22' src={"http://37.27.29.18:8002/images/" + image} alt="" />
        <p style={{color: `${clr}`}}>{text}</p>
    </div>
  )
}
