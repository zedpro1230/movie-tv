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
import arrow_right from "../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../assets/imgs/logos/arrow_left.svg";
import icon_play from "../assets/imgs/logos/play.svg";
import add_icon from "../assets/imgs/logos/add.svg";
import like_icon from "../assets/imgs/logos/like.svg";
import sound_icon from "../assets/imgs/logos/volume.svg";
//
import avger from "../assets/imgs/moviepage/Avenger.jpg";
import hobit from "../assets/imgs/moviepage/hobit.jpg";
import avatar from "../assets/imgs/moviepage/avt.jpg";
import auquaman from "../assets/imgs/moviepage/aquaman.png";
const HeroMoviesilder = () => {
  const sliderRef = useRef();
  SwiperCore.use([Pagination]);

  const movieBests = [
    {
      name: "Avenger : End Game",
      img: avger,
      describe: `With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.`,
    },
    {
      name: "The Hobit",
      img: hobit,
      describe: `With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.`,
    },
    {
      name: "Avatar 2",
      img: avatar,
      describe: `With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.`,
    },
    {
      name: "Aquaman 2",
      img: auquaman,
      describe: `With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.`,
    },
  ];
  return (
    <div className="relative  flex flex-col h-[835px] rounded-xl z-[25] max-mobile:h-[468px]">
      <Swiper
        className="hero-slider w-full  flex rounded-xl relative  max-mobile:h-[468px] max-mobile:items-end"
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        loop={true}
        style={{ zIndex: "22" }}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
          el: ".arrows",
        }}
        breakpoints={{
          345: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: false,
          },
          541: {
            spaceBetween: 20,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: false,
          },
          1421: {
            spaceBetween: 20,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
      >
        {movieBests.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full bg-cover bg-no-repeat bg-center   "
            style={{ backgroundImage: `url(${movie.img})` }}
          >
            <div className="flex flex-col gap-7  z-[22] relative items-center text-center pt-[450px] max-mobile:pt-[200px] ">
              <h1 className="movie_name text-[38px]   font-big_weight leadind-[57px] text-white max-mobile:text-[28px] max-mobile:leading-9">
                {movie.name}
              </h1>
              <p className="movie_des text-[18px]  font-medium_weight leadind-[27px] text-[#999999] w-[auto] max-w-[1194px] max-mobile:hidden">
                {movie.describe}
              </p>
              <div className="movie_action flex flex-row gap-5 max-mobile:flex-col">
                <div className="flex">
                  <button
                    className="w-fit py-[14px] px-[27px] flex gap-[10px] 
                    bg-red_bg h-[56px] rounded-lg items-center justify-center hover:opacity-75
                    max-mobile:w-[310px]"
                  >
                    <img alt="" src={icon_play}></img>
                    <p className="text-white font-[600] leading-[27px]">
                      Play Now
                    </p>
                  </button>
                </div>
                <div className="flex flex-row gap-[10px] max-mobile:justify-center">
                  <button
                    className="action_add bg-[#0F0F0F] w-[56px] h-[56px] rounded-lg
                    flex justify-center items-center p-[14px] border border-solid border-[#262626]"
                  >
                    <img alt="" src={add_icon}></img>
                  </button>
                  <button
                    className="action_add bg-[#0F0F0F] w-[56px] h-[56px] rounded-lg
                    flex justify-center items-center p-[14px] border border-solid border-[#262626]"
                  >
                    <img alt="" src={like_icon}></img>
                  </button>
                  <button
                    className="action_add bg-[#0F0F0F] w-[56px] h-[56px] rounded-lg
                    flex justify-center items-center p-[14px] border border-solid border-[#262626]"
                  >
                    <img alt="" src={sound_icon}></img>
                  </button>
                </div>
              </div>
            </div>
            <div className="custom-gradient-bottom w-full h-[400px] absolute z-[20]  bottom-0 max-mobile:bottom-[-4px]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="slider-action flex flex-row items-center justify-between px-4  absolute 
                    ml-[auto] z-[23] bottom-[0] right-[45px] left-[45px]
                    w-[auto] h-[88px] max-mobile:hidden "
      >
        <button
          onClick={() => sliderRef.current?.slidePrev()}
          className="w-[56px] h-[56px]
             bg-[#0F0F0F] rounded-lg
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
             bg-[#0F0F0F] rounded-lg
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
  );
};
export default HeroMoviesilder;
