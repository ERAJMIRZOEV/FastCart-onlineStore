import djoystik from '../assets/Frame 961 (1).png'
import djoystik2 from '../assets/Frame 961.png'
import deliveryIcon from '../assets/icon-delivery.png'
import returnIcon from '../assets/Icon-return.png'
import Card from './card'


export default function DetailPage() {
  return (
    <>
    <div className='max-w-[85%] m-auto'>

    <div className='mt-[50px] lg:flex items-start lg:gap-20'>
        <img className='lg:hidden' src={djoystik} alt="" />
        <img className='hidden lg:block' src={djoystik2} alt="" />
        <div className='flex flex-col gap-10'>
            <h1>Havic HV G-92 Gamepad</h1>
            <div className='flex'>
                <p>⭐⭐⭐⭐</p>
                <p>150 revievs</p>
                <p className='text-green-800'>In Stock</p>
            </div>
            <b>$192.00</b>
            <p>PlayStation 5 Controller Skin High quality vinyl <br /> with air channel adhesive for easy bubble <br /> free install & mess free removal Pressure <br /> sensitive.</p>
            <div className='flex gap-4'>
                <p>Colours:</p>
                <p>🔵</p>
                <p>🔴</p>
            </div>
            <div className='flex items-center gap-4'>
                <p>Size: </p>
                <button className='border-amber-700 border-2 text-[20px] rounded-[10px] p-2'>XS</button>
                <button className='border-amber-700 border-2 text-[20px] rounded-[10px] p-2'>S</button>
                <button className='border-amber-700 border-2 text-[20px] rounded-[10px] p-2'>M</button>
                <button className='border-amber-700 border-2 text-[20px] rounded-[10px] p-2'>L</button>
                <button className='border-amber-700 border-2 text-[20px] rounded-[10px] p-2'>XL</button>
            </div>
            <div className='flex justify-between'>
                <div>
                    <button className='w-[40px] h-[44px] border-2 rounded-[5px]'>-</button>
                    <input className='w-[80px] h-[44px] border-2 rounded-[5px] border-[#DB4444 ]' type="text" name="" id="" />
                    <button className='w-[40px] h-[44px] rounded-[5px] text-white bg-[#DB4444]'>+</button>
                </div>
           <button className='w-[100px] lg:w-[1754 0px] h-[44px] text-white bg-[#DB4444]  border-2 rounded'>Buy Now</button>
                <button className='w-[40px] h-[44px] border-2 rounded-[5px]'>❣️</button>
            </div>

            <div>

            <div className='flex items-center gap-5 h-20 border-2 rounded'>
                <img src={deliveryIcon} alt="" />
                <div>
                    <p>Free Delivery</p>
                    <p>Enter your postal code for Delivery Availability</p>
                </div>
            </div>

            <div className='flex items-center h-20 gap-5 border-2 rounded mb-20'>
                <img src={returnIcon} alt="" />
                <div>
                    <p>Return Delivery</p>
                    <p>Free 30 Days Delivery Returns. Details</p>
                </div>
            </div>
            </div>


               
        </div>
        </div>

        
            <div className='flex gap-5 lg mb-10'>
        <h1 className='bg-amber-700 w-6 h-13 rounded'>&nbsp;</h1>
        <button className="mt-2 text-red-700 font-[600]">Just For You</button>
        
      </div>

         
         <div className='ml-18 lg:flex lg:justify-between mb-20 '>
                     <Card/>
                     <div className='hidden lg:flex ml-20 lg:gap-20'> 
                     <Card/>
                     <Card/>
                     <Card/>
                     </div>
                 </div>
    </div>
    </>
  )
}
