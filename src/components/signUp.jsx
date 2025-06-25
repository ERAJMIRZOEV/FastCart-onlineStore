import google from '../assets/Icon-Google.png'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='flex flex-col gap-10 pb-30'>
        <div className='flex flex-col text-center text-[20px] font-bold pt-10 '>
        <h1 className='text-[40px]'>Create an account</h1>
        <h2>Enter your details below</h2>
        </div>

        <div className='flex flex-col items-center gap-5'>
            <input className='w-[320px] h-[56px] rounded border-2  border-[#616161] pl-3 lg:w-[420px]' placeholder='Name' type="text" name="" id="" />
            <input className='w-[320px] h-[56px] rounded border-2  border-[#616161] pl-3 lg:w-[420px]' placeholder='Email or phone number' type="text" name="" id="" />
            <input className='w-[320px] h-[56px] rounded border-2  border-[#616161] pl-3 lg:w-[420px]' placeholder='Password' type="password" name="" id="" />
        </div>

        <div className='flex flex-col gap-5 items-center'>
            <button className='w-[320px] h-[56px] rounded bg-[#DB4444] text-white font-[500] lg:w-[420px]'>Create Account</button>
            <button className='w-[320px] h-[56px] rounded border-2 border-[#d0d0d0] lg:w-[420px]'><div className='flex justify-center gap-5'><img src={google} alt="" />Sign up with Google</div></button>
        </div>

        <div className='flex justify-center gap-10'>
            <button>Already have account?</button>
            <Link to={'/login'}>
            <button className='underline'>Log in</button>
            </Link>
        </div>
    </div>
  )
}
