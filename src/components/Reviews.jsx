import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import redstar from "../assets/imgs/logos/red_star.svg";
import halfstar from "../assets/imgs/logos/half.svg";
import arrow_right from "../assets/imgs/logos/arrow_right.svg";
import arrow_left from "../assets/imgs/logos/arrow_left.svg";
import addreview from "../assets/imgs/logos/addreview.svg";
function Reviews() {
  const sliderRef = useRef();
  SwiperCore.use([Navigation, Pagination]);
  const reviewLists = [
    {
      name: "Aniket Roy",
      place: "From India",
      rate: 4.5,
      content: `This movie was recommended to me by a very dear friend who went for the movie by herself. 
        I went to the cinemas to watch but had a houseful board so couldn’t watch it.`,
    },
    {
      name: "Swaraj",
      place: "From India",
      rate: 5,
      content: `A restless king promises his lands to the local 
        tribals in exchange of a stone (Panjurli, a deity 
        of Keradi Village) wherein he finds solace and peace of mind.`,
    },
    {
      name: "Aniket Roy",
      place: "From India",
      rate: 4.5,
      content: `This movie was recommended to me by a very dear friend who went for the movie by herself. 
        I went to the cinemas to watch but had a houseful board so couldn’t watch it.`,
    },
    {
      name: "Swaraj",
      place: "From India",
      rate: 5,
      content: `A restless king promises his lands to the local 
        tribals in exchange of a stone (Panjurli, a deity 
        of Keradi Village) wherein he finds solace and peace of mind.`,
    },
    {
      name: "Aniket Roy",
      place: "From India",
      rate: 4.5,
      content: `This movie was recommended to me by a very dear friend who went for the movie by herself. 
        I went to the cinemas to watch but had a houseful board so couldn’t watch it.`,
    },
    {
      name: "Swaraj",
      place: "From India",
      rate: 5,
      content: `A restless king promises his lands to the local 
        tribals in exchange of a stone (Panjurli, a deity 
        of Keradi Village) wherein he finds solace and peace of mind.`,
    },
    {
      name: "Aniket Roy",
      place: "From India",
      rate: 4.5,
      content: `This movie was recommended to me by a very dear friend who went for the movie by herself. 
        I went to the cinemas to watch but had a houseful board so couldn’t watch it.`,
    },
    {
      name: "Swaraj",
      place: "From India",
      rate: 5,
      content: `A restless king promises his lands to the local 
        tribals in exchange of a stone (Panjurli, a deity 
        of Keradi Village) wherein he finds solace and peace of mind.`,
    },
  ];
  return (
    <div className=" h-[auto] flex flex-col bg-[#1A1A1A] rounded-xl border border-[#262626] border-solid justify-center items-center p-[30px] max-mobile:p-[20px]">
      <div className="flex flex-row items-center justify-between w-[100%] p-[20px]">
        <span className="text-[#999999] text-[18px] leading-[27px] font-[500] max-mobile:text-[14px] max-mobile:leading-5">
          Review
        </span>
        <button
          className="flex flex-row items-center w-[204px] h-[58px] 
        gap-1 rounded-lg bg-[#141414] border border-solid border-[#262626] 
        justify-center max-mobile:w-fit max-mobile:p-5"
        >
          <span>
            <img alt="" src={addreview}></img>
          </span>
          <p className="text-[#FFFFFF] text-[18px] font-[500] leading-[28px] max-mobile:text-[14px] max-mobile:leading-5">
            Add your review
          </p>
        </button>
      </div>
      <Swiper
        className="ReviewSwiper w-full  flex"
        modules={[Navigation, Pagination]}
        navigation={false}
        onSwiper={(swiper) => (sliderRef.current = swiper)}
        loop={true}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          el: ".review_indicator",
          clickable: true,
        }}
        breakpoints={{
          345: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 2,
            loop: true,
          },
          541: {
            spaceBetween: 20,
            slidesPerView: 1,
            slidesPerGroup: 2,
            loop: true,
          },
          1421: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1920: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        {reviewLists.map((review, index) => (
          <SwiperSlide className="slide-review bg-[#0F0F0F] rounded-xl border border-[#262626] border-solid p-[30px] max-mobile:p-[24px]">
            <div className="flex flex-col gap-4 ">
              <div className="review-header flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF] text-[20px] font-[500] leading-[30px] max-mobile:text-[16px] max-mobile:leading-6">
                    {review.name}
                  </span>
                  <span className="text-[#999999] text-[18px] font-[500] leading-[27px]  max-mobile:text-[14px] max-mobile:leading-5">
                    {review.place}
                  </span>
                </div>
                {review.rate === 4.5 ? (
                  <div
                    className="flex flex-row items-center w-[148px] h-[39px] p-[4px]
                  bg-[#141414] border border-[#262626] border-solid rounded-[51px] 
                  justify-center gap-2 max-mobile:w-[112px]"
                  >
                    <ul className="flex flex-row">
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px] max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={halfstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                    </ul>
                    <p className="text-[#999999] text-[18px] leading-[27px] font-[500]">
                      {review.rate}
                    </p>
                  </div>
                ) : (
                  <div
                    className="flex flex-row items-center w-[148px] h-[39px] p-[4px]
                  bg-[#141414] border border-[#262626] border-solid rounded-[51px] 
                  justify-center gap-2 max-mobile:w-[112px] "
                  >
                    <ul className="flex flex-row">
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstar}
                          className="w-[18px] h-18px]  max-mobile:w-[14px] max-mobile:h-[14px]"
                        ></img>
                      </li>
                    </ul>
                    <p className="text-[#999999] text-[18px] leading-[27px] font-[500]">
                      {review.rate}
                    </p>
                  </div>
                )}
              </div>
              <div className="review-content">
                <p className="text-[#999999] text-[18px] leading-[27px] font-[400] w-[auto] max-mobile:text-[14px] max-mobile:leading-5">
                  {review.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className=" flex gap-3 flex-row items-center justify-between px-4    
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
            
             "
        >
          <img
            src={arrow_left}
            alt=""
            className=" laptop:w-[24px] max-laptop:h-[24px]"
          />
        </button>
        <div className="review_indicator"></div>
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
}

export default Reviews;
