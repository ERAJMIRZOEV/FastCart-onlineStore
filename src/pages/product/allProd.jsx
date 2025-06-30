import React, { useEffect } from 'react'
import Card from '../../components/card';
import { getProd } from '../../reducers/getProduct/reducer';
import { useDispatch, useSelector } from 'react-redux';

export default function AllProd() {

      const dispatch = useDispatch();
      const { data2 } = useSelector((state) => state.products);
      

     useEffect(() => {
        dispatch(getProd());
      }, []);

  return (
    <div className='max-w-[90%] m-auto mb-10 lg:flex lg:justify-center lg:gap-17'>
      <div className=' flex flex-col items-center lg:hidden'>
        <h1 className='self-start'>Home / Explore Our Products</h1>
        <input className='w-[100%] h-[56px] rounded-[8px] border-2 border-gray-300  mt-5 pl-3 lg:hidden' placeholder='Search' type="text"/>
        <div className='flex gap-2'>
            <button className='w-[181px] h-[56px] rounded-[8px] border-2 border-gray-300   mt-5 pl-3 lg:hidden'>Populary</button>
            <button className='w-[181px] h-[56px] rounded-[8px] border-2 border-gray-300  mt-5 pl-3 lg:hidden'>Filter (3)</button>
        </div>
        <div className='flex gap-2 ml-[-60px]'>
            <button className='w-[181px] h-[35px] rounded-[8px] border-2 border-red-700   mt-5 pl-3 lg:hidden'>All products</button>
            <button className='w-[120px] h-[35px] rounded-[8px] border-2 border-red-700  mt-5 pl-3 lg:hidden'>Any</button>
        </div>
      </div>

    <div className='hidden lg:flex flex-col gap-10'>

    <h1 className='mt-20'>Home / Explore Our Product</h1>

    <div className='hidden lg:flex flex-col items-start gap-5'>
        <button>Category</button>
        <button  className='text-red-700 font-[600]'>All products</button>
        <button>Electronics</button>
        <button>Home & Lifestyle</button>
        <button>Medicine</button>
        <button>Sports & Outdoor</button>
        <button className='text-red-700'>See all</button>   
    </div>

     <div className='hidden lg:flex flex-col items-start gap-5'>
        <b>Brands</b>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Samsung</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Apple</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Huawei</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Poco</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Lenovo</p>
        </div>
        <button className='text-red-700'>See all</button>   

    </div>

     <div className='hidden lg:flex flex-col items-start gap-5'>
        <b>Features</b>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Metallic</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Plastic cover</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>8GB Ram</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Super power</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <p>Large Memory</p>
        </div>
        <button className='text-red-700'>See all</button>   

    </div>

    <div className='flex flex-col'>
        <b>Price range</b>
        <input className='lg:accent-amber-700' name='range' min={0} max={2000} type="range" />
        <b for='range'>30</b>
        <button className='w-[240px] h-[44px] text-red-700 border-2 rounded'>Apply</button>
    </div>

    <div className='hidden lg:flex flex-col items-start gap-5'>
        <b>Features</b>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type="radio" name="" id="" />
            <p>Any</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type="radio" name="" id="" />
            <p>Refurbished</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type="radio" name="" id="" />
            <p>Brand new</p>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type="radio" name="" id="" />
            <p>Old items</p>
        </div>

    </div>


    
    <div className='hidden lg:flex flex-col items-start gap-5'>
        <b>Features</b>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <b>⭐⭐⭐⭐⭐</b>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <b>⭐⭐⭐⭐</b>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <b>⭐⭐⭐</b>
        </div>
        <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type="checkbox" name="" id="" />
            <b>⭐⭐</b>
        </div>

    </div>

    </div>

      <div className='flex flex-col items-center mt-15 lg:flex lg:flex-row lg:w-[890px] lg:justify-center lg:gap-10 lg:flex-wrap  lg:mt-39'>
      {data2?.map((el) => (
           <Card key={el.id} id={el.id} image={el.image} price={el.price} name={el.productName} />
))} 

      </div>
    </div>
  )
}