import burger from '../assets/material-symbols-light_menu.png'
import cart from '../assets/Frame 552.png'
import logo from '../assets/Group 1116606595.png'
import wishlist from '../assets/Wishlist.png'
import user from '../assets/user.png'
import { Link } from 'react-router-dom';

export default function Head() {
  return (
    <div className='flex justify-between p-4 h-15 bg-[#eeeeee] lg:justify-evenly lg:h-[72px] lg:items-center'>

         <Link to={'/'}><img className='hidden lg:block' src={logo} alt="" /></Link>

      <div className='hidden lg:flex lg:gap-10 items-center lg:text-[17px] '>
        <Link to={'/'} ><h1>Home</h1></Link>
         <Link to={'/contact'} ><h1>Contact</h1></Link>
        <Link to={'/about'}><h1>About</h1></Link>
        <Link to={'/signup'}><h1>Sign Up</h1></Link>
      </div>
      <div className='flex gap-2 items-center text-[20px] lg:hidden'>
      <img src={burger} alt="" />
      <h1 className='font-bold '>Exclusive</h1>
      </div>

      <div className='flex items-center lg:gap-6'>
      <input className='hidden lg:block w-[243px] h-[38px] bg-[#F5F5F5] rounded lg: pl-3' placeholder='What are you looking for?' type="text" name="" id="" />
       <Link to={'/wishlist'}><img className='hidden lg:block' src={wishlist} alt="" /></Link>
      <Link to={'/cart'}><img src={cart} alt="" /></Link>
      <Link to={'/login'}><img src={user} alt="" /></Link>
      </div>
    </div>
  )
}
