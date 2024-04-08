import { useNavigate } from "react-router-dom";
import time from "../../assets/imgs/logos/time.svg";
import view from "../../assets/imgs/logos/view.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import { config } from "../../config/MovieToken";
//
import arrow_right from "../../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../../assets/imgs/logos/arrow_left.svg";
import axios from "axios";
const MovieTrendingSlider = ({ id, trend }) => {
  const navigate = useNavigate();
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);
  const [topRateMovies, setTopRateMovies] = useState([]);
  const [key, setKey] = useState(null);
  useEffect(() => {
    const movieTrendAPI = async () => {
      try {
        const reponse = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          config
        );
        setTopRateMovies(reponse.data.results);
        setKey("1");
      } catch (error) {
        console.log(error);
      }
    };
    movieTrendAPI();
  }, []);
  return (
    <div className="relative   flex flex-col gap-[40px]">
      <div className="flex items-center justify-between max-mobile:flex-col">
        <h2 className="text-[38px] font-big_weight leading-[57px] text-white">
          Trending Now
        </h2>
        <div
          className=" flex flex-row items-center justify-between px-4    
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
          <div className={`arrows_trend_${id}`}></div>
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
        className="movie-trend w-full  flex relative"
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        // loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
          //el: ".genrestop10_arrows",
          el: `.arrows_trend_${id}`,
        }}
        breakpoints={{
          345: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: false,
          },
          541: {
            spaceBetween: 20,
            slidesPerView: 4,
            slidesPerGroup: 2,
            loop: false,
          },
          1421: {
            spaceBetween: 20,
            slidesPerView: 5,
            slidesPerGroup: 4,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 5,
            slidesPerGroup: 4,
          },
        }}
      >
        <div className=" w-[200px] h-[480px]  absolute top-[0] left-[0] z-20  bg-gradient-to-r  from-bg3 to-[transparent]">
          {" "}
        </div>
        <div className=" w-[200px] h-[480px]   absolute top-[0] right-[0] z-20  bg-gradient-to-l  from-bg3 to-[transparent]">
          {" "}
        </div>
        {topRateMovies.map((movie, index) => (
          <SwiperSlide
            key={index}
            className=" 
            p-[20px]
           bg-black_bg_10 border border-solid 
           border-[#262626]
           rounded-lg
           trend-movie
           "
            onClick={() => {
              navigate("/movie/open");
            }}
          >
            <div
              className="flex flex-col
            w-fit   relative gap-5"
            >
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className=" w-[240px] h-[350px] rounded-xl"
              ></img>
              <div className="flex flex-row   justify-between w-full">
                <div className="rounded-[51px] bg-[#141414] w-[auto] p-[10px] border border-[#262626] border-solid flex gap-2">
                  <img alt="" src={time} />
                  <span className="  text-[#999999] text-[16px] leading-[24px]">
                    {movie.release_date}
                  </span>
                </div>

                <div className="rounded-[51px] bg-[#141414] w-[auto] p-[10px] border border-[#262626] border-solid flex gap-2">
                  <img alt="" src={view} />
                  <span className="  text-[#999999] text-[16px] leading-[24px]">
                    {movie.vote_count}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MovieTrendingSlider;
