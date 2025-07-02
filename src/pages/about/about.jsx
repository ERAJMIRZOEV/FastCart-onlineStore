import portrait from '../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'
import icon1 from '../../assets/Services (1).png'
import icon2 from '../../assets/Services (2).png'
import icon3 from '../../assets/Services (3).png'
import icon4 from '../../assets/Services (4).png'
import people1 from '../../assets/Frame 874.png'
import people2 from '../../assets/Frame 875.png'
import people3 from '../../assets/Frame 876.png'
import logos from '../../assets/Frame 877.png'

export default function About() {
  return (
    <div className='max-w-[85%] m-auto mt-20'>
        <div className='flex flex-col items-center justify-center  gap-10 lg:flex-row '>

        <div className='flex flex-col gap-10 text-[20px] '>
            <b className='text-[54px]'>Our Story</b>
            <p>Launced in 2015, Exclusive is South <br /> Asia’s premier online shopping <br /> makterplace with an active presense in <br /> Bangladesh. Supported by wide range <br /> of tailored marketing, data and service <br /> solutions, Exclusive has 10,500 sallers <br /> and 300 brands and serves 3 millioons <br /> customers across the region. </p>
                
            <p className=''>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
        </div>
        <img src={portrait} alt="" />
        </div>
        <div className='lg:flex lg:flex-row lg:justify-center mt-30 mb-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-2  items-center border-2 rounded p-7 transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white'>
                <img src={icon1} alt="" />
                <b className='text-2xl'>10.5k </b>
                <p>Sallers active our site</p>
            </div>
            <div className='flex flex-col gap-2 items-center border-2 rounded p-7 transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white bg-[#e2e2e2]'>
                <img src={icon2} alt="" />
                <b className='text-2xl'>33k</b>
                <p>Sallers active our site</p>
            </div>
           <div className='flex flex-col gap-2 items-center border-2  rounded p-7 transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white'>
                <img src={icon3} alt="" />
                <b className='text-2xl'>45.5k</b>
                <p>Sallers active our site</p>
            </div>
            <div className='flex flex-col gap-2 items-center border-2 rounded p-7 transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white'>
                <img src={icon4} alt="" />
                <b className='text-2xl'>25k</b>
                <p>Sallers active our site</p>
            </div>
        </div>
         


         <div className='flex flex-col gap-15 mb-20 lg:flex-row mt-20 '>
            <div>
                <img src={people1} alt="" />
                <div className='mt-10 flex flex-col items-start gap-4'>
                <h1>Tom Cruise</h1>
                <p>Founder & Chairman</p>
                <img src={logos} alt="" />
                </div>
            </div>
            <div>
                <img src={people2} alt="" />
                <div className='mt-10 flex flex-col items-start gap-4'>
                <h1>Tom Cruise</h1>
                <p>Founder & Chairman</p>
                <img src={logos} alt="" />
                </div>
            </div>
            <div>
                <img src={people3} alt="" />
                <div className='mt-10 flex flex-col items-start gap-4'>
                <h1>Tom Cruise</h1>
                <p>Founder & Chairman</p>
                <img src={logos} alt="" />
                </div>
            </div>
         </div>

        <div className='lg:flex lg:flex-row lg:justify-center mt-30 mb-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-2  items-center border-2 rounded p-7 transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white'>
                <img src={icon1} alt="" />
                <b className='text-2xl'>10.5k </b>
                <p>Sallers active our site</p>
            </div>
            
           <div className='flex flex-col gap-2 items-center border-2  rounded p-7 transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white'>
                <img src={icon3} alt="" />
                <b className='text-2xl'>45.5k</b>
                <p>Sallers active our site</p>
            </div>
            <div className='flex flex-col gap-2 items-center border-2 rounded p-7 transition-all duration-300 hover:scale-105 hover:bg-[#DB4444] hover:text-white'>
                <img src={icon4} alt="" />
                <b className='text-2xl'>25k</b>
                <p>Sallers active our site</p>
            </div>
        </div>  

    </div>
  )
}
