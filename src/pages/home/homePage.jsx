import axios from "axios";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import banner from "../../assets/Frame 560.png";
import Phonebanner from "../../assets/Frame 560 (1).png";
import banner2 from "../../assets/14 Plus 40001.png";
import banner3 from "../../assets/fbimg.jpeg"
import banner4 from '../../assets/Без названия.png'
import Blocks from "../../components/blocks";
import phoneLogo from "../../assets/Category-CellPhone.png";
import speaker from "../../assets/image.png";
import ps5 from "../../assets/ps5-slim-goedkope-playstation_large 1.png";
import woman from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import speakers from "../../assets/Frame 707.png";
import gucci from "../../assets/652e82cd70aa6522dd785109a455904c.png";
import icon1 from "../../assets/Services.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get } from "../../reducers/category/reducer";
import { getProd, getProductById } from "../../reducers/getProduct/reducer";
import { getToken } from "../../utils/token";
import {
  addWishlist,
  removefromWishlist,
} from "../../reducers/wishlist/reducer";
import stars from "../../assets/Frame 566.png";
import { addToCart } from "../../api/cartApi/cartApi";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toast, Toaster } from "sonner";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

export default function HomePage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.categoria);
  const { data2 } = useSelector((state) => state.products);
  let mydata = getToken();

  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(3600 * 24 * 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(countdown / (3600 * 24));
  const hours = Math.floor((countdown % (3600 * 24)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const toggleWishList = (product) => {
    if (localStorage.getItem("access_token") == null) {
      toast.error("please login");
      return;
    }
    const exits = wishlist.some((item) => item.id === product.id);
    if (exits) {
      dispatch(removefromWishlist(product.id));
      toast.success("Продукт удалён из WishList");
    } else {
      dispatch(addWishlist(product));
      toast.success("Добавлено в Wishlist");
    }
  };

  function InfoById(id) {
    dispatch(getProductById(id));
    navigate("/detailPage");
  }

  const [wishlistIds, setWishlistIds] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistIds(stored.map((item) => item.id));
  }, []);

  useEffect(() => {
    dispatch(get());
    dispatch(getProd());
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:max-w-[85%] m-auto lg:gap-10 lg:mt-15">
        <input
          className="w-[350px] h-[56px] rounded border-2  border-[#616161] mt-5 pl-3 lg:hidden"
          placeholder="Search"
          type="text"
          name=""
          id=""
        />

       <div className="flex flex-wrap p-5 justify-start gap-3 w-fit text-[20px] lg:flex-col lg:pt-10 lg:pr-8 lg:mr-4 lg:text-start lg:shadow-[6px_0_12px_rgba(0,0,0,0.08)] lg:bg-white">
  {data?.map((el) => {
    return (
      <button className="bg-[#F5F5F5] rounded h-[44px] p-2 whitespace-nowrap transition-all duration-200 hover:scale-[1.03] shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.6),inset_2px_2px_5px_rgba(0,0,0,0.05)] lg:text-start lg:bg-white lg:shadow-none lg:hover:scale-[1.05] lg:hover:text-blue-600">
        {el.categoryName}
      </button>
    );
  })}
</div>




        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="hidden lg:block w-full rounded-2xl"
        >
          <SwiperSlide>
            <img
              src={banner}
              alt="Slide 1"
              className="hidden w-full h-auto object-cover rounded-2xl lg:block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Phonebanner}
              alt="Slide 2"
              className=" w-full h-auto object-cover lg:hidden"
            />
            <img
              src={banner2}
              alt="Slide 1"
              className="hidden w-full h-97 object-cover lg:block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner3}
              alt="Slide 1"
              className="hidden w-full h-97 object-cover lg:block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner4}
              alt="Slide 1"
              className="hidden w-full h-97 object-cover lg:block"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="max-w-[85%] m-auto ">
        <div className="flex flex-col gap-5 mt-20 lg:flex-row  lg:items-center lg:ml-4">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <h1 className="bg-amber-700 w-6 h-13 rounded">&nbsp;</h1>
              <button className="mt-2 text-red-700 font-[600]">Today’s</button>
            </div>

            <b className="text-2xl">Flash Sales</b>
          </div>

          <div>
            <div className="flex text-[20px] gap-7 font-bold">
              <p>Days</p>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>

            <div className="flex text-[29px] gap-7">
              <b>{String(days).padStart(2, "0")}</b>
              <p className="text-red-700">:</p>
              <b>{String(hours).padStart(2, "0")}</b>
              <p className="text-red-700">:</p>
              <b>{String(minutes).padStart(2, "0")}</b>
              <p className="text-red-700">:</p>
              <b>{String(seconds).padStart(2, "0")}</b>
            </div>
          </div>
        </div>

        <div className="flex gap-16 mt-10 justify-center">
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

        
        <Link to={"/allproduct"}>
          <button className="w-[200px] h-[56px] rounded ml-18 mt-10 mb-10 bg-[#DB4444] text-center text-white font-[500] lg:ml-132 lg:w-[234px] lg:h-[56px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.3)] hover:brightness-110">
            View All Products
          </button>
        </Link>

        <div className="flex flex-col gap-5 lg:ml-4">
          <div className="flex gap-5">
            <h1 className="bg-amber-700 w-6 h-13 rounded">&nbsp;</h1>
            <button className="mt-2 text-red-700 font-[600]">Categories</button>
          </div>

          <b className="text-2xl">Browse By Category</b>
        </div>


       <div className="flex gap-12 mt-10">
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    slidesPerView={6}
    spaceBetween={70}
    className="w-full"
  >
    {data?.map((el) => {
      return (
        <SwiperSlide key={el.id}>
          <div className="transition-transform duration-300 hover:scale-[1.05] shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.5),inset_2px_2px_6px_rgba(0,0,0,0.06)] rounded-xl p-2">
            <Blocks
              id={el.id}
              image={el.categoryImage}
              text={el.categoryName}
            />
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
</div>



        <div className="flex flex-col lg:items-end lg:flex-row lg:justify-between mt-20">
          <div className="flex flex-col gap-5 lg:ml-4">
            <div className="flex gap-5">
              <h1 className="bg-amber-700 w-6 h-13 rounded">&nbsp;</h1>
              <button className="mt-2 text-red-700 font-[600]">
                This Month
              </button>
            </div>

            <b className="text-2xl">Best Selling Products</b>
          </div>

          <Link to={"/allproduct"}>
            <button className="w-[180px] h-[46px] rounded bg-[#DB4444] text-white font-[500] lg:w-[180px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_6px_rgba(0,0,0,0.25)] hover:brightness-110">
              View All
            </button>
          </Link>
        </div>
        <div className="flex gap-16 mt-10 justify-center">
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

        <div className="bg-[#000000] text-white flex flex-col lg:items-center h-175 justify-center gap-10 rounded p-5 mt-22 lg:gap-75 lg:justify-center  lg:flex-row lg:h-[500px]">
          <div className="flex flex-col gap-6 pt-10 lg:pt-0 lg:gap-9 ">
            <b className="text-[#00FF66]">Categories</b>
            <b className="lg:text-[46px] text-[40px] lg:w-[400px]">
              Enhance Your Music Experience
            </b>
            <div className="flex gap-4">
              <div className="w-[62px] h-[62px] rounded-4xl bg-white text-black flex flex-col items-center justify-center">
                <b>23</b>
                <p className="text-[12px]">Hours</p>
              </div>
              <div className="w-[62px] h-[62px] rounded-4xl bg-white text-black flex flex-col items-center justify-center">
                <b>05</b>
                <p className="text-[12px]">Days</p>
              </div>
              <div className="w-[62px] h-[62px] rounded-4xl bg-white text-black flex flex-col items-center justify-center">
                <b>59</b>
                <p className="text-[12px]">Minutes</p>
              </div>
              <div className="w-[62px] h-[62px] rounded-4xl bg-white text-black flex flex-col items-center justify-center">
                <b>35</b>
                <p className="text-[12px]">Seconds</p>
              </div>
            </div>
            <button className="w-[171px] h-[56px] rounded-lg bg-[#DB4444] text-white font-[500] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_6px_rgba(0,0,0,0.25)] hover:brightness-110">
              Buy Now!
            </button>
          </div>
          <img className="lg:w-120 rounded-[50px]" src={speaker} alt="" />
        </div>

        <div className="flex flex-col gap-5 mt-20 lg:ml-4">
          <div className="flex gap-5">
            <h1 className="bg-amber-700 w-6 h-13 rounded">&nbsp;</h1>
            <button className="mt-2 text-red-700 font-[600]">This Month</button>
          </div>

          <b className="text-2xl">Best Selling Products</b>
        </div>

  <div className="flex gap-16 mt-10 justify-center">
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

        <Link to={"/allproduct"}>
          <button className="w-[200px] h-[56px] rounded ml-18 mt-10 mb-10 bg-[#DB4444] text-center text-white font-[500] lg:ml-132 lg:w-[234px] lg:h-[56px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.3)] hover:brightness-110">
            View All Products
          </button>
        </Link>

        <div className="flex flex-col gap-5 mt-20 lg:ml-4">
          <div className="flex gap-5">
            <h1 className="bg-amber-700 w-6 h-13 rounded">&nbsp;</h1>
            <button className="mt-2 text-red-700 font-[600]">Featured</button>
          </div>

          <b className="text-2xl">New Arrival</b>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row mb-10">
          <div className="bg-black w-[360px] h-[287px] text-white text-[17px] rounded">
            <img src={ps5} alt="" />
            <div className="mt-[-165px] ml-10 flex flex-col gap-3">
              <b className="text-2xl">PlayStation 5</b>
              <p>
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <button className="underline text-start">Shop Now</button>
            </div>
          </div>

          <div className="bg-black w-[360px] h-[287px] text-white text-[17px] rounded">
            <img src={woman} alt="" />
            <div className="mt-[-165px] ml-10 flex flex-col gap-3">
              <b className="text-2xl">Women’s Collections</b>
              <p>
                Featured woman collections that <br /> give you another vibe.
              </p>
              <button className="underline text-start">Shop Now</button>
            </div>
          </div>

          <div className="bg-black w-[360px] h-[287px] text-white text-[17px] rounded">
              <img className="ml-20 mt-10 transition-transform duration-300 hover:scale-110" src={speakers} alt="" />
            <div className="mt-[-165px] ml-10 flex flex-col gap-3">
              <b className="text-2xl">Speakers</b>
              <p>Amazon wireless speakers</p>
              <button className="underline text-start">Shop Now</button>
            </div>
          </div>

          <div className="bg-black w-[360px] h-[287px] text-white text-[17px] rounded">
            <img className="ml-20 mt-10" src={gucci} alt="" />
            <div className="mt-[-165px] ml-10 flex flex-col gap-3">
              <b className="text-2xl">PlayStation 5</b>
              <p>
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <button className="underline text-start">Shop Now</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 mb-20 lg:flex-row lg:justify-center lg:mt-15">
          <div className=" w-90 h-70 flex flex-col items-center justify-center gap-5">
            <img src={icon1} alt="" />
            <b className="text-[20px]">FREE AND FAST DELIVERY</b>
            <p>Free delivery for all orders over $140</p>
          </div>

          <div className=" w-90 h-70 flex flex-col items-center justify-center gap-5">
            <img src={icon1} alt="" />
            <b className="text-[20px]">FREE AND FAST DELIVERY</b>
            <p>Free delivery for all orders over $140</p>
          </div>

          <div className=" w-90 h-70 flex flex-col items-center justify-center gap-5">
            <img src={icon1} alt="" />
            <b className="text-[20px]">FREE AND FAST DELIVERY</b>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>
      </div>
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
