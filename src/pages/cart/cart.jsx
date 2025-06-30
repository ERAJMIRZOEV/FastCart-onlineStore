import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteAllCards, getCart, deleteCard } from "../../api/cartApi/cartApi";
import { API } from "../../utils/config";
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Cart() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);
  const productsInCart = data?.productsInCart || [];

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className="max-w-[90%] lg:max-w-[85%] m-auto">
      <h1 className="ml-4 mt-10 mb-10 text-gray-700 text-base lg:text-lg">Home / Cart</h1>

      {productsInCart.length > 0 && (
        <div className="hidden lg:flex items-center justify-between pb-4 px-6 text-gray-600 text-sm border-b border-gray-300">
          <p className="w-1/4 text-center">Product</p>
          <p className="w-1/4 text-center">Price</p>
          <p className="w-1/4 text-center">Quantity</p>
          <p className="w-1/4 text-center">Subtotal</p>
        </div>
      )}

      {productsInCart.length === 0 ? (
        <div className="text-center text-gray-600 mt-10 text-xl">
          🛒 Ваша корзина пуста
        </div>
      ) : (
        productsInCart.map((el) => (
          <div
            key={el.id}
            className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 border border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition duration-300 ease-in-out my-4 bg-white"
          >
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4 lg:w-1/2">
              <img
                className="w-20 h-20 object-cover rounded-xl"
                src={`${API}/images/${el.product.image}`}
                alt="product"
              />
              <h1 className="text-center lg:text-left text-gray-800 font-medium">
                {el.product.productName}
              </h1>
            </div>

            <p className="text-gray-700 font-medium">${el.product.price}</p>

            <div className="flex items-center border rounded-xl overflow-hidden">
              <button className="w-8 h-10 text-lg bg-gray-100 hover:bg-gray-200">−</button>
              <input
                className="w-12 h-10 text-center focus:outline-none"
                value={el.product.quantity}
                type="number"
                readOnly
              />
              <button className="w-8 h-10 text-lg bg-gray-100 hover:bg-gray-200">+</button>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-gray-800 font-semibold">$650</p>
              <button
                className="text-red-600 hover:bg-red-100 rounded-full w-9 h-9 flex items-center justify-center transition duration-200"
                onClick={() => dispatch(deleteCard(el.id))}
              >
                <DeleteOutlineIcon fontSize="medium" />
              </button>
            </div>
          </div>
        ))
      )}

      {productsInCart.length > 0 && (
        <div className="w-full lg:max-w-sm border border-gray-300 rounded-2xl shadow-lg p-6 mb-12 lg:ml-auto">
          <div className="flex justify-between mb-6">
            <Link to={'/allproduct'}>
              <button className="w-[130px] h-[40px] rounded-md border border-gray-400 hover:bg-gray-100 transition text-sm">
                Return to Shop
              </button>
            </Link>

            <button
              className="w-[130px] h-[40px] rounded-md border border-amber-700 text-amber-700 hover:bg-amber-100 transition text-sm"
              onClick={() => dispatch(deleteAllCards())}
            >
              Remove all
            </button>
          </div>

          <h2 className="text-lg font-semibold mb-4 text-gray-800">Cart Total</h2>

          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal:</span>
            <span className="font-medium text-gray-800">$1750</span>
          </div>

          <div className="flex justify-between mb-4 text-gray-600">
            <span>Shipping:</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="flex justify-between mb-6 text-lg font-semibold text-gray-900">
            <span>Total:</span>
            <span>$1750</span>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl transition duration-200">
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
}