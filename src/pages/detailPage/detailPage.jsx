import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import deliveryIcon from "../../assets/icon-delivery.png";
import returnIcon from "../../assets/Icon-return.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import stars from "../../assets/Frame 566.png";
import { addToCart } from "../../api/cartApi/cartApi";
import { addWishlist, removefromWishlist } from "../../reducers/wishlist/reducer";
import { getProductById } from "../../reducers/getProduct/reducer";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { byId } = useSelector((state) => state.products);
  const images = byId?.images || [];
  const [selectedImage, setSelectedImage] = useState(images[0]?.images || "");
  const [fade, setFade] = useState(false);
  const { data2 } = useSelector((state) => state.products);
  const wishlistIds = (useSelector((state) => state.wishlist.items) || []).map((item) => item.id);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timeout);
  }, [selectedImage]);

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
  const InfoById = (id) => {
    dispatch(getProductById(id));
    navigate("/detailPage");
  };

  return (
    <div className="max-w-[85%] m-auto mt-25">
      <div className="mt-[50px] lg:flex items-start lg:gap-20">

        <div className="flex flex-col gap-4 items-center">
          {images.map((img) => (
            <img
              key={img.id}
              onClick={() => setSelectedImage(img.images)}
              src={`http://37.27.29.18:8002/images/${img.images}`}
              alt="product"
              className="
                w-[80px] h-[80px] object-cover cursor-pointer
                rounded-lg border border-gray-300
                transition-transform duration-300 ease-in-out
                hover:scale-110
                focus:outline-amber-500
                "
              style={{
                borderColor: selectedImage === img.images ? "#fbbf24" : "#d1d5db",
                boxShadow:
                  selectedImage === img.images ? "0 0 10px rgba(251, 191, 36, 0.7)" : "none",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            />
          ))}
        </div>

        <div className="relative w-[400px] h-[400px] ml-10 rounded-xl overflow-hidden shadow-lg">
          <img
            src={`http://37.27.29.18:8002/images/${selectedImage}`}
            alt="Selected product"
            className={`w-full h-full object-cover rounded-xl
              transition-opacity duration-500 ease-in-out
              ${fade ? "opacity-0" : "opacity-100"}`}
            draggable={false}
          />
        </div>

        <div className="flex flex-col gap-10 ml-10 mt-10 lg:mt-0 max-w-[450px]">
          <h1 className="text-3xl font-semibold">{byId?.brand}</h1>

          <div className="flex items-center gap-3 text-yellow-400">
            <p className="select-none">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-500 text-sm">(150 reviews)</p>
            <p className="text-green-700 font-semibold ml-4">In Stock</p>
          </div>

          <b className="text-4xl text-red-600">${byId?.price}</b>
          <p className="text-gray-700 leading-relaxed">{byId?.description}</p>

          <div className="flex gap-4 items-center">
            <p className="font-semibold">Colours:</p>
            <p
              style={{ color: byId?.color }}
              className="font-semibold text-lg capitalize"
            >
              {byId?.color}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold">Size:</p>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="
                  border-2 border-amber-700
                  text-lg font-semibold
                  rounded-lg px-4 py-1
                  transition-colors duration-300
                  hover:bg-amber-700 hover:text-white
                  focus:outline-none focus:ring-2 focus:ring-amber-500
                "
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="w-[40px] h-[44px] border-2 rounded-lg text-2xl font-bold hover:bg-gray-200 transition-colors duration-200">-</button>
              <input
                className="w-[60px] h-[44px] border-2 rounded-lg border-red-600 text-center text-xl font-semibold focus:outline-amber-400"
                type="text"
                readOnly
                value={1}
              />
              <button className="w-[40px] h-[44px] rounded-lg text-white bg-red-600 text-2xl font-bold hover:bg-red-700 transition-colors duration-200">
                +
              </button>
            </div>

            <button className="w-[130px] h-[44px] text-white bg-red-600 border-2 rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold">
              Buy Now
            </button>

            <button className="w-[44px] h-[44px] border-2 rounded-lg flex items-center justify-center text-2xl hover:bg-red-100 transition-colors duration-200">
              ❣️
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 h-20 border-2 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <img src={deliveryIcon} alt="Delivery Icon" className="w-10 h-10" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-gray-600 text-sm">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 h-20 border-2 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer mb-20">
              <img src={returnIcon} alt="Return Icon" className="w-10 h-10" />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-gray-600 text-sm">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mb-10 items-center">
        <h1 className="bg-amber-700 w-6 h-13 rounded">&nbsp;</h1>
        <p className="mt-2 text-red-700 font-semibold text-lg">Just For You</p>
      </div>

      <div className="flex gap-16 mt-10 mb-20 justify-center">
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
    </div>
  );
}
