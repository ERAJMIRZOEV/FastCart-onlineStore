import { useDispatch } from 'react-redux'
import { addToCart } from '../api/cartApi/cartApi'
import stars from '../assets/Frame 566.png'

export default function Card({ id, image, price, name }) {
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className="group relative flex flex-col items-start gap-3 w-[270px] h-[370px] border rounded-lg overflow-hidden bg-white shadow-sm"
    >
      {/* Сердце и глаз */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100 text-xl">
          ❤️
        </button>
        <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100 text-xl">
          👁️
        </button>
      </div>

      <img
        className="w-[270px] h-[250px] object-cover"
        src={"http://37.27.29.18:8002/images/" + image}
        alt=""
      />

      <h1 className="px-2 font-medium">{name}</h1>

      <div className="flex gap-3 px-2">
        <p className="text-red-500">${price}</p>
        <p className="line-through text-gray-400">$1160</p>
      </div>

      <img className="h-5 px-2" src={stars} alt="" />

      <button
        onClick={() => dispatch(addToCart(id))}
        className="absolute bottom-0 left-0 w-full py-2 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
