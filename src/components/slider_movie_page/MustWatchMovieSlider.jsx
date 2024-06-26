import time from "../../assets/imgs/logos/time.svg";
import redstar from "../../assets/imgs/logos/red_star.svg";
import greystar from "../../assets/imgs/logos/grey_start.svg";
import halfstar from "../../assets/imgs/logos/half.svg";
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
//
import arrow_right from "../../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../../assets/imgs/logos/arrow_left.svg";

const MustWatchMovieSlider = ({ id, type, kind }) => {
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);
  return (
    <div className="relative   flex flex-col ">
      <div className="flex flex-row justify-between items-center max-mobile:flex-col">
        <h2 className="text-[38px] font-big_weight leading-[57px] text-white">
          {kind === "movie" ? "Must Watch Show" : "Must Watch Movie"}
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
          <div className={`dot_mustwatch_${id}`}></div>
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
        className="movie-must-watch w-full  flex  mt-[40px]"
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        // loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
          //el: ".genrestop10_arrows",
          el: `.dot_mustwatch_${id}`,
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
            slidesPerGroup: 2,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
        }}
      >
        {type.map((type, index) => (
          <SwiperSlide
            key={index}
            className=" 
            p-[20px]
           bg-black_bg_10 border border-solid 
           border-[#262626]
           rounded-lg
           must-watch-movies
           "
          >
            <div
              className="flex flex-wrap 
            ]  relative gap-5"
            >
              <img
                alt=""
                src={type.thumbnail}
                className="w-[319px] h-[404px]"
              ></img>
              <div className="flex flex-row   justify-between w-full">
                <div className="rounded-[51px] bg-[#141414] w-[auto] p-[10px] border border-[#262626] border-solid flex gap-2">
                  <img alt="" src={time} />
                  <span className="  text-[#999999] text-[16px] leading-[24px]">
                    {type.time}
                  </span>
                </div>

                <div className="rounded-[51px] bg-[#141414] w-[auto] p-[10px] border border-[#262626] border-solid flex gap-2">
                  {type.rate === 4.5 ? (
                    <div className="flex flex-row w-[auto] gap-1">
                      <img alt="" src={redstar} />
                      <img alt="" src={redstar} />
                      <img alt="" src={redstar} />
                      <img alt="" src={redstar} />
                      <img alt="" src={halfstar} />
                      <span className="text-[#999999] text-[16px] leading-[24px]">
                        20k
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-row w-[auto] gap-1">
                      <img alt="" src={redstar} />
                      <img alt="" src={redstar} />
                      <img alt="" src={redstar} />
                      <img alt="" src={redstar} />
                      <img alt="" src={greystar} />
                      <span className="text-[#999999] text-[16px] leading-[24px]">
                        20k
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MustWatchMovieSlider;
