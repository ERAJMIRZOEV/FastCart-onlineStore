import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import { toast, Toaster } from "sonner";
import { useEffect } from "react";

import { addToCart, deleteAllCards, deleteCard } from "../../api/cartApi/cartApi";
import stars from "../../assets/Frame 566.png";
import { getProd, getProductById } from "../../reducers/getProduct/reducer";
import { removefromWishlist } from "../../reducers/wishlist/reducer";
import { Autoplay, Navigation } from "swiper/modules";
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import  FavoriteIcon  from '@mui/icons-material/Favorite';



const Wishlist = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.wishlist.items);
  const { data2 } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getProd());
  }, [dispatch]);


  const handleAdd = (id) => {
    if (localStorage.getItem("access_token") != null) {
      dispatch(addToCart(id));
    } else {
      navigate("/login");
    }
  };

  const wishlistIds = (useSelector((state) => state.wishlist.items) || []).map((item) => item.id);
  const toggleWishList = (product) => {
    if (localStorage.getItem("access_token") == null) {
      toast.error("please login");
      return;
    }
    const exits = wishlistIds.includes(product.id);
    if (exits) {
      dispatch(removefromWishlist(product.id));
      toast.success("Продукт удалён из WishList");
    } else {
      dispatch(addWishlist(product));
      toast.success("Добавлено в Wishlist");
    }
  };
  const InfoOutlineIcon = () => null;
  const InfoById = (id) => {
    dispatch(getProductById(id));
    navigate("/detailPage");
  };

  const deleteWish = (id) => {
    dispatch(removefromWishlist(id));
  };

  
  const moveAllToBag = () => {
    if (localStorage.getItem("access_token") != null) {
      product.forEach((el) => dispatch(addToCart(el.id)));
      dispatch(deleteAllCards());
      navigate('/cart')
      toast.success("All items moved to cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="p-[20px_45px] ">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div>
          </div>
          <button
            onClick={moveAllToBag}
            className="text-[#000] border-2 border-[#000] px-6 py-2 rounded-md font-semibold"
          >
            Move All To Bag
          </button>
        </div>

      <div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {product.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="relative group bg-white p-4 rounded-xl shadow hover:shadow-md transition-all duration-300">
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                    <button onClick={() => deleteWish(el.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center">
                    <Link
                      to="/detailPage"
                      onClick={() => dispatch(getProductById(el.id))}
                      className="inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"

                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="w-full h-40 flex items-center justify-center">
                  <img
                    src={"http://37.27.29.18:8002/images/" + el.image}
                    alt={el.productName}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="mt-4 text-sm font-medium">{el.nameProduct}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-red-500 font-semibold">${el.price}</span>
                </div>
                <div className="text-yellow-400 text-sm mt-1">⭐️⭐️⭐️⭐️⭐️ </div>

                <div className="absolute bottom-0 left-0 right-0 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-all duration-300">
                  <button
                    className="w-full bg-black text-white py-2 rounded-b-xl text-sm font-medium"
                    onClick={() => handleAdd(el.id)}
                    >
                    Add To Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
                    </div>
        <Toaster richColors position="bottom-right" />
        <button
            onClick={moveAllToBag}
            className="text-[#000] border-2 border-[#000] px-6 py-2 rounded-md font-semibold"
          >
            Move All To Bag
          </button>
      </div>


      <div className="flex gap-16 mt-10 justify-center mb-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={4}
            spaceBetween={70}
            className="w-full"
          >
            {data2?.map((el) => (
              <SwiperSlide key={el.id}>
                <div className="group relative flex flex-col items-start gap-3 w-[270px] h-[370px] rounded-2xl overflow-hidden bg-white shadow-[inset_0_-4px_8px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02]">
  <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button
      onClick={() => toggleWishList(el)}
      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 text-xl"
    >
      {wishlistIds.includes(el.id) ? (
        <FavoriteIcon style={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </button>

    <button
      onClick={() => InfoById(el.id)}
      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 text-xl"
    >
      <InfoOutlineIcon/> 
    </button>
  </div>
  <img
    className="w-[270px] h-[250px] object-cover"
    src={"http://37.27.29.18:8002/images/" + el.image}
    alt=""
  />
  <h1 className="px-2 font-medium">{el.productName}</h1>
  <div className="flex gap-3 px-2">
    <p className="text-red-500">${el.price}</p>
    <p className="line-through text-gray-400">$1160</p>
  </div>
  <img className="h-5 px-2" src={stars} alt="" />
  <button
    onClick={() => dispatch(addToCart(el.id))}
    className="absolute bottom-0 left-0 w-full py-2 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    Add to Cart
  </button>
</div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>


    </>
  );
};

export default Wishlist;
