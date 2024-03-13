import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

// install Swiper modules

import arrow_right from "../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../assets/imgs/logos/arrow_left.svg";
const Sliderimg = ({ categorieList }) => {
  const sliderRef = useRef();
  const widthRef = useRef(null);
  console.log(widthRef);
  SwiperCore.use([Pagination]);

  return (
    <div className="relative  flex flex-col ">
      <div className=" flex flex-row items-end  justify-between mb-[50px] max-mobile:flex-col max-mobile:items-center">
        <div className="categories-heading">
          <h2
            className=" font-[700] text-font_38 
          leading-[57px] text-white
          w-[auto]
          /*Laptop screen*/
          max-laptop:text-[28px]
          max-laptop:leading-[42px]
          /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[20px]
        max-leading-[30px]
          "
          >
            Explore our wide variety of categories
          </h2>
          <p
            className="text-font_18 font-normal
           text-text_grey_2  leading-[27px] mt-[14px]
           w-[auto]
           max-w-[900px]
           /*Laptop*/
          max-laptop:text-[16px]
          max-laptop:font-[400]
          max-laptop:leading-[24px]
          max-laptop:mt-[10px]
          /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[14px]
        max-leading-[21px]
           "
          >
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div
          className="slider-action flex flex-row items-center justify-between px-4  
        w-[257px] h-[88px] bg-[#0F0F0F] 
        rounded-[12px] border-[#1F1F1F] border-solid border-[1px]
        /*Laptop*/

        max-laptop:w-[205px]
        max-laptop:h-[68px]
        max-laptop:px-[12px]
        max-laptop:py-[12px]
        max-laptop:top-[-130px]
        /mobile/
        max-mobile:w-[auto]
        max-mobile:bg-app_bg
        max-mobile:border-none
        max-mobile:top-[60%]
        max-mobile:right-[33%]
        
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
          <div className="arrows "></div>
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
        // install Swiper modules
        className=" w-full  flex "
        modules={[Navigation, Pagination]}
        // spaceBetween={30}
        // slidesPerView={5}
        // slidesPerGroup={2}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
          el: ".arrows",
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
            ref={widthRef}
            key={index}
            className=" 
          px-[30px] py-[30px]
           bg-black_bg_10 border border-solid 
           border-[#262626]
           rounded-lg w-[500px] !important

           max-laptop:py-[24px]
           max-laptop:px-[24px]
          /mobile/
          max-mobile:py-[20px]
          max-mobile:px-[20px]
           "
          >
            <div
              className=" grid grid-cols-2
            w-full h-[252px] gap-1 relative"
            >
              {type.listMovies.map((movielist, index) => (
                <img
                  key={index}
                  src={movielist}
                  alt="..."
                  className="w-full h-[123px]"
                />
              ))}
              <div
                className="fade-bg custom-gradient-bottom-catgories 
              absolute w-[237px] h-[252px] top-0 left-0 right-0"
              ></div>
            </div>
            <div className="action flex flex-row w-full justify-between items-center">
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
export default Sliderimg;
