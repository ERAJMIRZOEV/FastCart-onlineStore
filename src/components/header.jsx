import burger from '../assets/material-symbols-light_menu.png'
import logo from '../assets/Group 1116606595.png'
import { Link } from 'react-router-dom'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Head() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-between p-4 h-15 bg-[#eeeeee] shadow-md transition-shadow duration-300 lg:justify-evenly lg:h-[72px] lg:items-center'>
      
      <Link to={'/'}>
        <img className='hidden lg:block' src={logo} alt="" />
      </Link>

      <div className='hidden lg:flex lg:gap-10 items-center lg:text-[17px]'>
        <Link
          to="/"
          className="transition-all duration-200 rounded px-2 py-1 hover:text-blue-600 hover:scale-105 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.1)]"
        >
          Home
        </Link>
        <Link
          to="/contact"
          className="transition-all duration-200 rounded px-2 py-1 hover:text-blue-600 hover:scale-105 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.1)]"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="transition-all duration-200 rounded px-2 py-1 hover:text-blue-600 hover:scale-105 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.1)]"
        >
          About
        </Link>
        <Link
          to="/signup"
          className="transition-all duration-200 rounded px-2 py-1 hover:text-blue-600 hover:scale-105 shadow-[inset_0_-1px_2px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.1)]"
        >
          Sign Up
        </Link>
      </div>

      <div className='flex gap-2 items-center text-[20px] lg:hidden'>
        <img src={burger} alt="" />
        <h1 className='font-bold'>Exclusive</h1>
      </div>

      <div className='flex items-center lg:gap-6'>
        <input
          className='hidden lg:block w-[243px] h-[38px] bg-[#F5F5F5] rounded pl-3'
          placeholder='What are you looking for?'
          type="text"
        />

        <Link
          to="/wishlist"
          className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.2)] transition-all duration-200 hover:text-blue-600 hover:scale-110"
        >
          <FavoriteBorderIcon/>
        </Link>

        <Link
          to="/cart"
          className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.2)] transition-all duration-200 hover:text-blue-600 hover:scale-110"
        >
          <ShoppingCartOutlinedIcon />
        </Link>

        <Link
          to="/login"
          className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.2)] transition-all duration-200 hover:text-blue-600 hover:scale-110"
        >
          <PermIdentityIcon />
        </Link>
      </div>
    </div>
  )
}
