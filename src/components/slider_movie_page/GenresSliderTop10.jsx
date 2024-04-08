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
import axios from "axios";
import { config } from "../../config/MovieToken";
import { useState, useEffect } from "react";
//
import arrow_right from "../../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../../assets/imgs/logos/arrow_left.svg";

const GenresSliderTop10 = ({ sliderId }) => {
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [key, setKey] = useState(null);
  useEffect(() => {
    const genresAPI = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          config
        );
        setPopularMovies(response.data.results);
        setKey("1");
      } catch (error) {
        console.log(error);
      }
    };
    genresAPI();
  }, []);
  console.log(popularMovies);

  return (
    <div className="relative  flex flex-col gap-[40px]">
      <div className="flex flex-row items-center justify-between max-mobile:flex-col">
        <h2 className="text-[38px] font-big_weight leading-[57px] text-white ">
          Popular Top 10 In Genres
        </h2>
        <div
          className="genrestop10_slider flex flex-row items-center justify-between px-4  
        w-[257px] h-[88px] bg-[#0F0F0F] 
        rounded-[12px] border-[#1F1F1F] border-solid border-[1px]
        max-mobile:border-0 max-mobile:bg-app_bg max-mobile:justify-center
        "
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
          <div className={`genrestop10_arrows_${sliderId}`}></div>
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
        key={key}
        className="genrestop10-slider w-full  flex  "
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        // loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
          //el: ".genrestop10_arrows",
          el: `.genrestop10_arrows_${sliderId}`,
        }}
        breakpoints={{
          345: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 4,
            loop: false,
          },
          541: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 4,
            loop: false,
          },
          1421: {
            spaceBetween: 20,
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 5,
            slides: 4,
          },
        }}
      >
        <div className=" w-[200px] h-[480px]  absolute top-[0] left-[0] z-20  bg-gradient-to-r  from-bg3 to-[transparent]">
          {" "}
        </div>
        <div className=" w-[200px] h-[480px]   absolute top-[0] right-[0] z-20  bg-gradient-to-l  from-bg3 to-[transparent]">
          {" "}
        </div>
        {popularMovies.map((type, index) => (
          <SwiperSlide
            key={index}
            className=" 
            p-[30px]
           bg-black_bg_10 border border-solid 
           border-[#262626]
           rounded-lg
           "
          >
            <div
              className=" w-[241px]  relative h-fit
            
            "
            >
              <img
                key={index}
                src={`https://image.tmdb.org/t/p/w500${type.poster_path}`}
                alt="..."
                className="w-full h-[300px] rounded-xl"
              />

              <div
                className="fade-bg custom-gradient-bottom-catgories 
              absolute w-full h-[300px] top-0 left-0 right-0
             "
              ></div>
            </div>
            <div className="action flex flex-row w-full justify-between items-center mt-[15px]">
              <div className="flex flex-col">
                <span
                  className="w-[66px] h-[25px] flex justify-center 
              items-center bg-red_bg  rounded text-white text-[12px] font-[600] leading-[18px]"
                >
                  Top 10 in
                </span>
                <span className=" text-white leadding-[27px] max-w-[180px] w-[auto] text-font_18 font-[600] max-laptop:text-[16px] max-laptop:leading-6">
                  {type.title}
                </span>
              </div>

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
export default GenresSliderTop10;
