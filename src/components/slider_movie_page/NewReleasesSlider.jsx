import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
//
import arrow_right from "../../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../../assets/imgs/logos/arrow_left.svg";
import axios from "axios";
import { config } from "../../config/MovieToken";

const NewReleasesSlider = ({ id }) => {
  const [release, setRelease] = useState([]);
  const [key, setKey] = useState(null);
  useEffect(() => {
    const releaseAPI = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          config
        );
        setRelease(response.data.results);
        setKey("1");
      } catch (error) {
        console.log(error);
      }
    };
    releaseAPI();
  }, []);
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);
  return (
    <div className="relative   flex flex-col ">
      <div className="flex flex-row justify-between items-center max-mobile:flex-col">
        <h2 className="text-[38px] font-big_weight leading-[57px] text-white ">
          New Releases
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
          <div className={`dot_newreleased_${id}`}></div>
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
        className="movie-trend w-full  flex  mt-[40px]"
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        key={key}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        // loop={true}
        pagination={{
          clickable: true,
          //el: ".genrestop10_arrows",
          el: `.dot_newreleased_${id}`,
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
        {release?.map((type, index) => (
          <SwiperSlide
            key={index}
            className=" 
            p-[20px]
           bg-black_bg_10 border border-solid 
           border-[#262626]
           rounded-lg
           trend-movie
           "
          >
            <div
              className="flex flex-wrap 
            w-[243px]  relative gap-5"
            >
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/w500${type.poster_path}`}
                className=" rounded-xl"
              ></img>
              <div className="flex flex-row   justify-between w-full">
                <div
                  className="rounded-[51px] bg-[#141414] w-full p-[10px] 
                border border-[#262626] border-solid flex gap-2
                 justify-center"
                >
                  <span className="text-[16px] text-[#999999] leading-[24px]">
                    Released at
                  </span>
                  <span className="  text-[#BFBFBF] text-[16px] leading-[24px]">
                    {type.release_date}
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

export default NewReleasesSlider;
