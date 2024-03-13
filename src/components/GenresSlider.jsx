import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
// install Swiper modules

import arrow_right from "../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../assets/imgs/logos/arrow_left.svg";
import action_movie1 from "../assets/imgs/homepage/action_movie1.png";
import action_movie2 from "../assets/imgs/homepage/action_movie2.png";
import action_movie3 from "../assets/imgs/homepage/action_movie3.png";
import action_movie4 from "../assets/imgs/homepage/action_movie4.png";
import ad_movie1 from "../assets/imgs/homepage/ad_movie1.png";
import ad_movie4 from "../assets/imgs/homepage/ad_movie4.png";
import ad_movie2 from "../assets/imgs/homepage/ad_movie2.png";
import ad_movie3 from "../assets/imgs/homepage/ad_movie3.png";
import com_movie1 from "../assets/imgs/homepage/com_movie1.png";
import com_movie2 from "../assets/imgs/homepage/com_movie2.png";
import com_movie3 from "../assets/imgs/homepage/com_movie3.png";
import com_movie4 from "../assets/imgs/homepage/com_movie4.png";
import dra_movie1 from "../assets/imgs/homepage/dra_movie1.png";
import dra_movie2 from "../assets/imgs/homepage/dra_movie2.png";
import dra_movie3 from "../assets/imgs/homepage/dra_movie3.png";
import dra_movie4 from "../assets/imgs/homepage/dra_movie4.png";
import hor_movie1 from "../assets/imgs/homepage/hor_movie1.png";
import hor_movie2 from "../assets/imgs/homepage/hor_movie2.png";
import hor_movie3 from "../assets/imgs/homepage/hor_movie3.png";
import hor_movie4 from "../assets/imgs/homepage/hor_movie4.png";
const GenresSlider = ({ id }) => {
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);
  const categorieList = [
    {
      moviekind: "Action",
      listMovies: [action_movie1, action_movie2, action_movie3, action_movie4],
    },
    {
      moviekind: "Adventure",
      listMovies: [ad_movie1, ad_movie2, ad_movie3, ad_movie4],
    },
    {
      moviekind: "Comedy",
      listMovies: [com_movie1, com_movie2, com_movie3, com_movie4],
    },
    {
      moviekind: "Drama",
      listMovies: [dra_movie1, dra_movie2, dra_movie3, dra_movie4],
    },
    {
      moviekind: "Horror",
      listMovies: [hor_movie1, hor_movie2, hor_movie3, hor_movie4],
    },
    {
      moviekind: "Adventure",
      listMovies: [ad_movie1, ad_movie2, ad_movie3, ad_movie4],
    },
    {
      moviekind: "Horror",
      listMovies: [hor_movie1, hor_movie2, hor_movie3, hor_movie4],
    },
    {
      moviekind: "Adventure",
      listMovies: [ad_movie1, ad_movie2, ad_movie3, ad_movie4],
    },
  ];
  return (
    <div className="relative  flex flex-col gap-[40px]">
      <div className="flex flex-row items-center justify-between max-mobile:flex-col">
        <h2 className="text-[38px] font-big_weight leading-[57px] text-white">
          Our Genres
        </h2>
        <div
          className="genres_slider flex flex-row items-center justify-between px-4   
        w-[257px] h-[88px] bg-[#0F0F0F] 
        rounded-[12px] border-[#1F1F1F] border-solid border-[1px] max-mobile:border-0 max-mobile:bg-app_bg max-mobile:justify-center"
        >
          <button
            onClick={() => sliderRef.current?.slidePrev()}
            className="w-[56px] h-[56px]
             bg-[#1A1A1A] rounded-lg
             flex items-center justify-center
             
             /*Laptop*/
             max-laptop:w-[44px]
             max-laptop:h-[44px]
             max-laptop:p-[10px]
             /mobile/
             max-mobile:hidden
             "
          >
            <img
              src={arrow_left}
              alt=""
              className=" laptop:w-[24px] max-laptop:h-[24px]"
            />
          </button>
          <div className={`genres_arrows_${id}`}></div>
          <button
            onClick={() => sliderRef.current?.slideNext()}
            className="w-[56px] h-[56px]
             bg-[#1A1A1A] rounded-lg
             flex items-center justify-center
             
             /*Laptop*/
             max-laptop:w-[44px]
             max-laptop:h-[44px]
             max-laptop:p-[10px]
             /mobile/
             max-mobile:hidden
             "
          >
            <img
              src={arrow_right}
              alt=""
              className=" laptop:w-[24px] max-laptop:h-[24px]"
            />
          </button>
        </div>
      </div>
      <Swiper
        className="genres-slider w-full  flex  "
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
          el: `.genres_arrows_${id}`,
        }}
        breakpoints={{
          345: {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: false,
          },
          541: {
            spaceBetween: 20,
            slidesPerView: 5,
            slidesPerGroup: 2,
            loop: false,
          },
          1421: {
            spaceBetween: 20,
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
        }}
      >
        {categorieList.map((type, index) => (
          <SwiperSlide
            key={index}
            className=" 
          px-[30px] py-[30px]
           bg-black_bg_10 border border-solid 
           border-[#262626]
           rounded-lg

           max-laptop:py-[24px]
           max-laptop:px-[24px]
          /mobile/
          max-mobile:py-[20px]
          max-mobile:px-[20px]
           "
          >
            <div className="grid grid-cols-2 w-full gap-[2px] ">
              {type.listMovies.map((movielist, index) => (
                <img src={movielist} alt="..." className="w-full h-[123px]" />
              ))}
              <div
                className="fade-bg custom-gradient-bottom-catgories 
              absolute w-full h-[280px] top-0 left-0 right-0
            "
              ></div>
            </div>
            <div className="action flex flex-row w-full justify-between items-center mt-[15px]">
              <span className=" text-white leadding-[27px] text-font_18 font-[600] max-laptop:text-[16px] max-laptop:leading-6">
                {type.moviekind}
              </span>
              <img
                src={arrow_right}
                alt=""
                className="max-laptop:w-[24px] max-laptop:h-[24px]  "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default GenresSlider;
