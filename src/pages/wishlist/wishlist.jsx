import React from 'react'
import Card from '../../components/card'

export default function Wishlist() {
  return (
    <div className='max-w-[85%] m-auto'>
        <div className='flex justify-between mt-10 items-center mb-10'>
      <h1>Whishlist (4)</h1>
        <button className='w-[200px] lg:w-[240px] h-[44px]  border-2 rounded'>Move All To Bag</button>
        </div>

        <div className='ml-10 lg:flex lg:ml-0 justify-between'>
            <Card/>
            <div className='hidden lg:flex lg:gap-18'> 
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>

        <div className='flex justify-between mt-30 mb-10'>

        <div className='flex gap-5 lg'>
        <h1 className='bg-amber-700 w-6 h-13 rounded'>&nbsp;</h1>
        <button className="mt-2 text-red-700 font-[600]">Just For You</button>
        
      </div>
        <button className='w-[100px] lg:w-[240px] h-[44px] text-red-700 border-2 rounded'>See All</button>
      
        </div>

        <div className='ml-10 lg:flex lg:ml-0 justify-between mb-25'>
            <Card/>
            <div className='hidden lg:flex lg:gap-18'> 
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>

    </div>
  )
}
