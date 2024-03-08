import { useNavigate } from "react-router-dom";
import time from "../../assets/imgs/logos/time.svg";
import view from "../../assets/imgs/logos/view.svg";
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
const MovieTrendingSlider = ({ id, trend }) => {
  const navigate = useNavigate();
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);

  return (
    <div className="relative h-[378px]  flex flex-col ">
      <div
        className=" flex flex-row items-center justify-between px-4  ml-[auto]   absolute  z-[40] top-[-120px] right-0
        w-[257px] h-[88px] bg-[#0F0F0F] 
        rounded-[12px] border-[#1F1F1F] border-solid border-[1px]
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
      <Swiper
        className="movie-trend w-full  flex  "
        style={{ height: "378px" }}
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        loop={true}
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
            slidesPerGroup: 2,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
        }}
      >
        {trend.map((type, index) => (
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
              className="flex flex-wrap 
            w-[243px] h-[270px]  relative gap-5"
            >
              <img alt="" src={type.img}></img>
              <div className="flex flex-row   justify-between w-full">
                <div className="rounded-[51px] bg-[#141414] w-[auto] p-[10px] border border-[#262626] border-solid flex gap-2">
                  <img alt="" src={time} />
                  <span className="  text-[#999999] text-[16px] leading-[24px]">
                    {type.time}
                  </span>
                </div>

                <div className="rounded-[51px] bg-[#141414] w-[auto] p-[10px] border border-[#262626] border-solid flex gap-2">
                  <img alt="" src={view} />
                  <span className="  text-[#999999] text-[16px] leading-[24px]">
                    {type.view}
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
