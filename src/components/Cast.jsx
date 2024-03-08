import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import actor1 from "../assets/imgs/moviepage/actor1.png";
import actor2 from "../assets/imgs/moviepage/actor2.png";
import actor3 from "../assets/imgs/moviepage/actor3.png";
import actor4 from "../assets/imgs/moviepage/actor4.png";
import actor5 from "../assets/imgs/moviepage/actor5.png";
import actor6 from "../assets/imgs/moviepage/actor6.png";
import actor7 from "../assets/imgs/moviepage/actor7.png";
import actor8 from "../assets/imgs/moviepage/actor8.png";
import arrow_right from "../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../assets/imgs/logos/arrow_left.svg";

function Cast() {
  const sliderRef = useRef();
  SwiperCore.use([Navigation, Pagination]);
  const actorLists = [
    actor1,
    actor2,
    actor3,
    actor4,
    actor5,
    actor6,
    actor7,
    actor8,
    actor1,
    actor2,
    actor3,
    actor4,
    actor5,
    actor6,
    actor7,
    actor8,
  ];
  return (
    <div className="relative h-[291px] flex flex-col bg-[#1A1A1A] rounded-xl border border-[#262626] border-solid justify-center items-center p-[30px]">
      <div className="flex flex-row items-center justify-between w-[100%] p-[20px]">
        <span className="text-[#999999] text-[18px] leading-[27px] font-[500]">
          Cast
        </span>
        <div
          className=" flex gap-3 flex-row items-center justify-between px-4  ml-[auto]   
        w-[auto] h-[88px] 
        "
        >
          <button
            onClick={() => sliderRef.current?.slidePrev()}
            className="w-[56px] h-[56px]
             bg-[#141414] rounded-[50%]
             border-[#262626] border border-solid
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
          <button
            onClick={() => sliderRef.current?.slideNext()}
            className="w-[56px] h-[56px]
             bg-[#141414] rounded-[50%]
             border-[#262626] border border-solid
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
        className="CastSwiper w-[962px]  flex"
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: false,
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
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 9,
            slidesPerGroup: 2,
          },
        }}
      >
        {actorLists.map((actor, index) => (
          <SwiperSlide className="slide-width-200">
            <img alt="" src={actor} className="w-[109px] h-[103px]"></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Cast;
