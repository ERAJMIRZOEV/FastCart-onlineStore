import logos from '../assets/Frame 741.png'


export default function Foot() {
  return (
    <div className='bg-[#000000] text-white flex flex-col p-15 pt-10 gap-10 text-[17px] lg:flex-row  lg:justify-around'>
        <div className='flex flex-col gap-5'>
        <b>Exclusive</b>
        <b>Subscribe</b>
        <p>Get 10% off your first order</p>
        <input className='w-[290px] h-[48px] pl-4 border-1 rounded' placeholder='Enter your email' type="text" name="" id="" />
        </div>

        <div className='flex flex-col gap-3'>
            <b>Support</b>
            <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>

        <div className='flex justify-between lg:justify-baseline lg:gap-20'>
            <div className='flex flex-col gap-3'>
                <b>Account</b>
                <p>My Account</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>

            <div className='flex flex-col gap-3'>
                <b>Quick Link</b>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
        </div>

        <div className='flex flex-col items-start gap-3'>
            <b className='text-[20px]'>Social</b>
            <img src={logos} alt="" />
        </div>
    </div>
  )
}
