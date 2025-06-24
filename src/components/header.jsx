import burger from '../assets/material-symbols-light_menu.png'
import cart from '../assets/Frame 552.png'
import logo from '../assets/Group 1116606595.png'
import wishlist from '../assets/Wishlist.png'

export default function Head() {
  return (
    <div className='flex justify-between p-4 h-15 bg-amber-200 lg:justify-evenly lg:h-[72px] lg:items-center'>

      <img className='hidden lg:block' src={logo} alt="" />

      <div className='hidden lg:flex lg:gap-10 items-center lg:text-[17px] '>
        <h1>Home</h1>
        <h1>Contact</h1>
        <h1>About</h1>
        <h1>Sign Up</h1>
      </div>
      <div className='flex gap-2 items-center text-[20px] lg:hidden'>
      <img src={burger} alt="" />
      <h1 className='font-bold '>Exclusive</h1>
      </div>

      <div className='flex items-center lg:gap-6'>
      <input className='hidden lg:block w-[243px] h-[38px] bg-[#F5F5F5] rounded lg: pl-3' placeholder='What are you looking for?' type="text" name="" id="" />
       <img className='hidden lg:block' src={wishlist} alt="" />
      <img src={cart} alt="" />
      </div>
    </div>
  )
}
