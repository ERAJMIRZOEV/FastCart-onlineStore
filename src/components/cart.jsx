import comp from '../assets/g27cq4-500x500 1.png'

export default function Cart() {
  return (
    <div className='max-w-[85%] m-auto'>

        <h1 className='ml-4 mt-10 mb-10'>Home / Cart</h1>

    <div className='hidden lg:flex items-center justify-center'>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
    </div>

     <div className='flex w-[320px] h-[132px] items-center justify-between p-4 border-2 rounded border-[#c1c1c1] lg:w-[1174px] lg:h-[94px] m-auto'>
        <div className='flex flex-col items-center gap-1 lg:flex-row lg:gap-40'>
            <img src={comp} alt="" />
            <h1>LCD Monitor</h1>
            <p>$650</p>
        </div>

       <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-30'>
        <input className='border-2 rounded w-[72px] h-[44px]' type="number" />
        <p>$650</p>
       </div>
     </div>



    </div>
  )
}
