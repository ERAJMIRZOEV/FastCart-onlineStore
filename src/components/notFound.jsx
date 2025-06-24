import React from 'react'

export default function NotFound() {
  return (
    <div className='h-[615px] flex flex-col items-center justify-center gap-10 '>
        <b className='text-[50px] lg:text-[100px]'>404 Not Found</b>
        <p className='lg:text-[20px]'>Your visited page not found. You may go home page.</p>
        <button className='w-[234px] h-[50px] bg-[#DB4444] rounded text-white lg:w-[254px] lg:h-[56px]'>Back to home page</button>
    </div>
  )
}
