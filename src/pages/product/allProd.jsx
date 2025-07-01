import React, { useEffect } from 'react'
import { getProd } from '../../reducers/getProduct/reducer'
import { useDispatch, useSelector } from 'react-redux'
import stars from '../../assets/Frame 566.png'

export default function AllProd() {
  const dispatch = useDispatch()
  const { data2 } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProd())
  }, [])

  return (
    <div className='max-w-[90%] m-auto mb-10 lg:flex lg:justify-center lg:gap-17'>
      <div className='flex flex-col items-center lg:hidden'>
        <h1 className='self-start'>Home / Explore Our Products</h1>
        <input
          className='w-full h-[56px] rounded-[8px] border-2 border-gray-300 mt-5 pl-3'
          placeholder='Search'
          type='text'
        />
        <div className='flex gap-2'>
          <button className='w-[181px] h-[56px] rounded-[8px] border-2 border-gray-300 mt-5 pl-3'>
            Populary
          </button>
          <button className='w-[181px] h-[56px] rounded-[8px] border-2 border-gray-300 mt-5 pl-3'>
            Filter (3)
          </button>
        </div>
        <div className='flex gap-2 ml-[-60px]'>
          <button className='w-[181px] h-[35px] rounded-[8px] border-2 border-red-700 mt-5 pl-3'>
            All products
          </button>
          <button className='w-[120px] h-[35px] rounded-[8px] border-2 border-red-700 mt-5 pl-3'>
            Any
          </button>
        </div>
      </div>

      <div className='hidden lg:flex flex-col gap-10'>
        <h1 className='mt-20'>Home / Explore Our Product</h1>

        <div className='hidden lg:flex flex-col items-start gap-5'>
          <button>Category</button>
          <button className='text-red-700 font-[600]'>All products</button>
          <button>Electronics</button>
          <button>Home & Lifestyle</button>
          <button>Medicine</button>
          <button>Sports & Outdoor</button>
          <button className='text-red-700'>See all</button>
        </div>

        <div className='hidden lg:flex flex-col items-start gap-5'>
          <b>Brands</b>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Samsung</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Apple</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Huawei</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Poco</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Lenovo</p>
          </div>
          <button className='text-red-700'>See all</button>
        </div>

        <div className='hidden lg:flex flex-col items-start gap-5'>
          <b>Features</b>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Metallic</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Plastic cover</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>8GB Ram</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Super power</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <p>Large Memory</p>
          </div>
          <button className='text-red-700'>See all</button>
        </div>

        <div className='flex flex-col'>
          <b>Price range</b>
          <input className='lg:accent-amber-700' name='range' min={0} max={2000} type='range' />
          <b>30</b>
          <button className='w-[240px] h-[44px] text-red-700 border-2 rounded'>Apply</button>
        </div>

        <div className='hidden lg:flex flex-col items-start gap-5'>
          <b>Features</b>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type='radio' />
            <p>Any</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type='radio' />
            <p>Refurbished</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type='radio' />
            <p>Brand new</p>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4 accent-amber-700' type='radio' />
            <p>Old items</p>
          </div>
        </div>

        <div className='hidden lg:flex flex-col items-start gap-5'>
          <b>Features</b>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <b>⭐⭐⭐⭐⭐</b>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <b>⭐⭐⭐⭐</b>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <b>⭐⭐⭐</b>
          </div>
          <div className='flex items-center gap-3'>
            <input className='w-4 h-4' type='checkbox' />
            <b>⭐⭐</b>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-start gap-6 mt-20'>
        
  {data2?.map((el) => (
    <div
      key={el.id}
      className='group relative flex flex-col items-start gap-3 w-[100%] sm:w-[48%] lg:w-[31%] h-[370px] border rounded-lg overflow-hidden bg-white shadow-sm'
    >
      <div className='absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        
        <button className='bg-white rounded-full p-2 shadow hover:bg-gray-100 text-xl'>❤️</button>
        <button className='bg-white rounded-full p-2 shadow hover:bg-gray-100 text-xl'>👁️</button>
      </div>
      <img
        className='w-full h-[250px] object-cover'
        src={'http://37.27.29.18:8002/images/' + el.image}
        alt={el.productName}
      />
      <h1 className='px-2 font-medium'>{el.productName}</h1>
      <div className='flex gap-3 px-2'>
        <p className='text-red-500'>${el.price}</p>
        <p className='line-through text-gray-400'>$1160</p>
      </div>
      <img className='h-5 px-2' src={stars} alt='stars' />
      <button
        onClick={() => dispatch(addToCart(el.id))}
        className='absolute bottom-0 left-0 w-full py-2 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>

    </div>
  )
}
