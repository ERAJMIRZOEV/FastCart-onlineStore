import axios from "axios";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import banner from "../../assets/Frame 560.png";
import Phonebanner from "../../assets/Frame 560 (1).png";
import banner2 from '../../assets/14 Plus 40001.png'
import banner3 from '../../assets/5f9e9cf4e06234d919ea080916e926ed.png'
import Card from "../../components/card";
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
import { Link } from "react-router-dom";
import { get } from "../../reducers/category/reducer";
import { getProd } from "../../reducers/getProduct/reducer";
import { getToken } from "../../utils/token";

export default function HomePage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.categoria);
  const { data2 } = useSelector((state) => state.products);
 let mydata= getToken()

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

  useEffect(() => {
    dispatch(get());
    dispatch(getProd());
    
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:max-w-[85%] m-auto lg:gap-10">
        <input
          className="w-[350px] h-[56px] rounded border-2  border-[#616161] mt-5 pl-3 lg:hidden"
          placeholder="Search"
          type="text"
          name=""
          id=""
        />

        <div className="flex flex-wrap p-5 justify-start gap-3 w-fit text-[20px] lg:flex-col lg:border-r-2 lg:border-[#dcdcdc] lg:p-15 lg:text-start">
          {data?.map((el) => {
            return (
              <button className="bg-[#F5F5F5] rounded h-[44px] p-2 lg:text-start  lg:bg-white">
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
  className='hidden lg:block w-full rounded-2xl'
>
  <SwiperSlide>
    <img src={banner} alt="Slide 1" className='hidden w-full h-auto object-cover rounded-2xl lg:block' />
  </SwiperSlide>
  <SwiperSlide>
    <img  src={Phonebanner} alt="Slide 2" className=' w-full h-auto object-cover lg:hidden' />
    <img src={banner2} alt="Slide 1" className='hidden w-full h-97 object-cover lg:block' />
  </SwiperSlide>
  <SwiperSlide>
    <img src={banner3} alt="Slide 1" className='hidden w-full h-97 object-cover lg:block' />
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
          {data2?.map((el) => {
            return (
              <Card
                id={el.id}
                image={el.image}
                price={el.price}
                name={el.productName}
              />
            );
          })}
        </div>

        <Link to={"/allproduct"}>
          <button className="w-[200px] h-[46px] ml-19 mt-10 rounded bg-[#DB4444] text-white font-[500] lg:ml-125 lg:w-[300px]">
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

        <div className="flex gap-12">
          <div className="flex justify-center mt-10 gap-3 lg:gap-12">
            {data.slice(0, 6).map((el) => {
              return (
                <Blocks
                  id={el.id}
                  image={el.categoryImage}
                  text={el.categoryName}
                />
              );
            })}
          </div>
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
            <button className="w-[180px] h-[46px] rounded bg-[#DB4444] text-white font-[500] lg:w-[180px]">
              View All
            </button>
          </Link>
        </div>

        <div className="flex gap-16 mt-10 justify-center">
          {data2?.map((el) => {
            return (
              <Card
                id={el.id}
                image={el.image}
                price={el.price}
                name={el.productName}
              />
            );
          })}
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
            <button className="w-[171px] h-[56px] rounded text-black bg-[#00FF66]">
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
          {data2?.map((el) => {
            return (
              <Card
                id={el.id}
                image={el.image}
                price={el.price}
                name={el.productName}
              />
            );
          })}
        </div>

        <div className="flex gap-16 mt-10 justify-center">
          {data2?.map((el) => {
            return (
              <Card
                id={el.id}
                image={el.image}
                price={el.price}
                name={el.productName}
              />
            );
          })}
        </div>

        <Link to={"/allproduct"}>
          <button className="w-[200px] h-[56px] rounded ml-18 mt-10 mb-10  bg-[#DB4444] text-center text-white font-[500] lg:ml-132 lg:w-[234px] lg:h-[56px]">
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
            <img className="ml-20 mt-10" src={speakers} alt="" />
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
    </div>
  );
}
