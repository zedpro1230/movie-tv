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
import topaction1 from "../../assets/imgs/moviepage/topaction1.png";
import topaction2 from "../../assets/imgs/moviepage/topaction2.png";
import topaction3 from "../../assets/imgs/moviepage/topaction3.png";
import topaction4 from "../../assets/imgs/moviepage/topaction4.png";
import topad1 from "../../assets/imgs/moviepage/topad1.png";
import topad2 from "../../assets/imgs/moviepage/topad2.png";
import topad3 from "../../assets/imgs/moviepage/topad3.png";
import topad4 from "../../assets/imgs/moviepage/topad4.png";
import topcom1 from "../../assets/imgs/moviepage/topcom1.png";
import topcom2 from "../../assets/imgs/moviepage/topcom2.png";
import topcom3 from "../../assets/imgs/moviepage/topcom3.png";
import topcom4 from "../../assets/imgs/moviepage/topcom4.png";
import topdra1 from "../../assets/imgs/moviepage/topdra1.png";
import topdra2 from "../../assets/imgs/moviepage/topdra2.png";
import topdra3 from "../../assets/imgs/moviepage/topdra3.png";
import topdra4 from "../../assets/imgs/moviepage/topdra4.png";

const GenresSliderTop10 = ({ sliderId }) => {
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);
  const listTop10 = [
    {
      name: "Action",
      list: [topaction1, topaction2, topaction3, topaction4],
    },
    {
      name: "Adventure",
      list: [topad1, topad2, topad3, topad4],
    },
    {
      name: "Comedy",
      list: [topcom1, topcom2, topcom3, topcom4],
    },
    {
      name: "Dramma",
      list: [topdra1, topdra2, topdra3, topdra4],
    },
    {
      name: "Action",
      list: [topaction1, topaction2, topaction3, topaction4],
    },
    {
      name: "Adventure",
      list: [topad1, topad2, topad3, topad4],
    },
    {
      name: "Comedy",
      list: [topcom1, topcom2, topcom3, topcom4],
    },
    {
      name: "Dramma",
      list: [topdra1, topdra2, topdra3, topdra4],
    },
  ];
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
        className="genrestop10-slider w-full  flex  "
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
          el: `.genrestop10_arrows_${sliderId}`,
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
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 5,
            slidesPerGroup: 2,
          },
        }}
      >
        {listTop10.map((type, index) => (
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
              className="grid grid-cols-2 w-full gap-1 relative
            
            "
            >
              {type.list.map((movielist, index) => (
                <img
                  key={index}
                  src={movielist}
                  alt="..."
                  className="w-full h-[121px]"
                />
              ))}
              <div
                className="fade-bg custom-gradient-bottom-catgories 
              absolute w-full h-[248px] top-0 left-0 right-0
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
                <span className=" text-white leadding-[27px] text-font_18 font-[600] max-laptop:text-[16px] max-laptop:leading-6">
                  {type.name}
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
