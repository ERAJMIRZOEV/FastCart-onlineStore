import comp from '../assets/Frame 570.png'
import stars from '../assets/Frame 566.png'

export default function Card({id, image, price, name}) {
  return (
    <div key={id} className='flex flex-col items-start gap-3'>
        <img className='w-[270px] h-[250px]' src={"http://37.27.29.18:8002/images/" + image} alt="" />
        <h1>{name}</h1>
        <div className='flex gap-3'>
            <p>{price}</p>
            <p className='line-through text-gray-400'>$400</p>
        </div>
            <img className='h-5' src={stars} alt="" /> 
    </div>
  )
}
