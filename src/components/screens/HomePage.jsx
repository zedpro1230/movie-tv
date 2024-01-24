import Header from "../Header";

import "react-multi-carousel/lib/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Hero-imgs
import movie1 from "../../assets/imgs/homepage/movie1.png";
import movie2 from "../../assets/imgs/homepage/movie2.png";
import movie3 from "../../assets/imgs/homepage/movie3.png";
import movie4 from "../../assets/imgs/homepage/movie4.png";
import movie5 from "../../assets/imgs/homepage/movie5.png";
import movie6 from "../../assets/imgs/homepage/movie6.png";
import movie7 from "../../assets/imgs/homepage/movie7.png";
import movie8 from "../../assets/imgs/homepage/movie8.png";
import movie9 from "../../assets/imgs/homepage/movie9.png";
import movie10 from "../../assets/imgs/homepage/movie10.png";
import movie11 from "../../assets/imgs/homepage/movie11.png";
import movie12 from "../../assets/imgs/homepage/movie12.png";
import movie13 from "../../assets/imgs/homepage/movie13.png";
import movie14 from "../../assets/imgs/homepage/movie14.png";
import movie15 from "../../assets/imgs/homepage/movie15.png";
import movie16 from "../../assets/imgs/homepage/movie16.png";
import movie17 from "../../assets/imgs/homepage/movie17.png";
import movie18 from "../../assets/imgs/homepage/movie18.png";
import movie19 from "../../assets/imgs/homepage/movie19.png";
import movie20 from "../../assets/imgs/homepage/movie20.png";
import movie21 from "../../assets/imgs/homepage/movie21.png";
import movie22 from "../../assets/imgs/homepage/movie22.png";
import movie23 from "../../assets/imgs/homepage/movie23.png";
import movie24 from "../../assets/imgs/homepage/movie24.png";
import movie25 from "../../assets/imgs/homepage/movie25.png";
import movie26 from "../../assets/imgs/homepage/movie26.png";
import movie27 from "../../assets/imgs/homepage/movie27.png";
import movie28 from "../../assets/imgs/homepage/movie28.png";
import movie29 from "../../assets/imgs/homepage/movie29.png";
import movie30 from "../../assets/imgs/homepage/movie30.png";
import movie31 from "../../assets/imgs/homepage/movie31.png";
import movie32 from "../../assets/imgs/homepage/movie32.png";
import movie33 from "../../assets/imgs/homepage/movie33.png";
import movie34 from "../../assets/imgs/homepage/movie34.png";
import movie35 from "../../assets/imgs/homepage/movie35.png";
import movie36 from "../../assets/imgs/homepage/movie35.png";
import logoapp from "../../assets/imgs/logos/play.png";
import iconplay from "../../assets/imgs/logos/play.svg";
import action_movie1 from "../../assets/imgs/homepage/action_movie1.png";
import action_movie2 from "../../assets/imgs/homepage/action_movie2.png";
import action_movie3 from "../../assets/imgs/homepage/action_movie3.png";
import action_movie4 from "../../assets/imgs/homepage/action_movie4.png";
import ad_movie1 from "../../assets/imgs/homepage/ad_movie1.png";
import ad_movie4 from "../../assets/imgs/homepage/ad_movie4.png";
import ad_movie2 from "../../assets/imgs/homepage/ad_movie2.png";
import ad_movie3 from "../../assets/imgs/homepage/ad_movie3.png";
import com_movie1 from "../../assets/imgs/homepage/com_movie1.png";
import com_movie2 from "../../assets/imgs/homepage/com_movie2.png";
import com_movie3 from "../../assets/imgs/homepage/com_movie3.png";
import com_movie4 from "../../assets/imgs/homepage/com_movie4.png";
import dra_movie1 from "../../assets/imgs/homepage/dra_movie1.png";
import dra_movie2 from "../../assets/imgs/homepage/dra_movie2.png";
import dra_movie3 from "../../assets/imgs/homepage/dra_movie3.png";
import dra_movie4 from "../../assets/imgs/homepage/dra_movie4.png";
import hor_movie1 from "../../assets/imgs/homepage/hor_movie1.png";
import hor_movie2 from "../../assets/imgs/homepage/hor_movie2.png";
import hor_movie3 from "../../assets/imgs/homepage/hor_movie3.png";
import hor_movie4 from "../../assets/imgs/homepage/hor_movie4.png";
import bg from "../../assets/imgs/homepage/bg.png";
import React from "react";
import Slider_img from "../Slider_img";
import Devides_list from "../Devices_list";
import RedBtn from "../RedBtn";
import FAQquestion from "../FAQquestion";
import UserPrice from "../UserPrice";
import Footer from "../Footer";
//
const listMovies = [
  {
    name: "list1",
    movielist: [
      movie1,
      movie2,
      movie3,
      movie4,
      movie5,
      movie6,
      movie7,
      movie8,
      movie9,
    ],
  },
  {
    name: "list2",
    movielist: [
      movie10,
      movie11,
      movie12,
      movie13,
      movie14,
      movie15,
      movie16,
      movie17,
      movie18,
    ],
  },
  {
    name: "list3",
    movielist: [
      movie19,
      movie20,
      movie21,
      movie22,
      movie23,
      movie24,
      movie25,
      movie26,
      movie27,
    ],
  },
  {
    name: "list4",
    movielist: [
      movie28,
      movie29,
      movie30,
      movie31,
      movie32,
      movie33,
      movie34,
      movie35,
      movie36,
    ],
  },
];
const categorieList = [
  {
    moviekind: "Action",
    listMovies: [action_movie1, action_movie2, action_movie3, action_movie4],
  },
  {
    moviekind: "Adventure",
    listMovies: [ad_movie1, ad_movie2, ad_movie3, ad_movie4],
  },
  {
    moviekind: "Comedy",
    listMovies: [com_movie1, com_movie2, com_movie3, com_movie4],
  },
  {
    moviekind: "Drama",
    listMovies: [dra_movie1, dra_movie2, dra_movie3, dra_movie4],
  },
  {
    moviekind: "Horror",
    listMovies: [hor_movie1, hor_movie2, hor_movie3, hor_movie4],
  },
  {
    moviekind: "Adventure",
    listMovies: [ad_movie1, ad_movie2, ad_movie3, ad_movie4],
  },
  {
    moviekind: "Horror",
    listMovies: [hor_movie1, hor_movie2, hor_movie3, hor_movie4],
  },
  {
    moviekind: "Adventure",
    listMovies: [ad_movie1, ad_movie2, ad_movie3, ad_movie4],
  },
];
console.log(categorieList);

const HomePage = () => {
  return (
    <div
      className="
    home font-manrope  bg-app_bg   w-[100vdw] 
    relative flex flex-col justify-center 
     overflow-hidden
    items-center gap-[80px]
    /*Laptop screen*/ 
     max-laptop:gap-[60px]
    /mobile/
    max-mobile:gap-[40px]
    "
    >
      <Header />
      <section className="hero w-full flex justify-center flex-col  items-center ">
        <div
          className="hero-content-1 relative w-full h-[860px] flex justify-center
                  /* Laptop screen*/
                  max-laptop:h-[710px]
                  max-laptop:overflow-hidden
                 
                 "
        >
          <ul
            className="
            sub-background w-full  relative flex flex-col gap-5 justify-center
            /* Laptop screen*/ 
            max-laptop:gap-[10px]
            max-laptop:w-[1920px]
          
            /mobile/
            max-mobile:w-[1920px]
            "
          >
            {listMovies.map((list, index) => (
              <li
                key={index}
                className="w-full h-[200px] flex flex-row gap-5 shrink-0
              /* Laptop screen*/ 
               max-laptop:gap-[10px]
               max-laptop:overflow-hidden
               /mobile/
               max-mobile: overflow-x-hidden
            max-mobile:overflow-hidden
               "
              >
                {list.movielist.map((movie, index) => (
                  <div
                    key={index}
                    className="w-[195px] h-[200px]
                            max-laptop:w-[151px]
                            /*mobile*/
                            max-mobile:w-[142px]
                            max-mobile:h-[114px]
                            "
                  >
                    <img
                      alt=""
                      src={movie}
                      className="w-[195px] h-[200px] max-laptop:w-[151px]"
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>
          <div
            className="custom-gradient w-[auto] l h-[430px] 
          absolute top-0 left-0 right-0 
          max-laptop:h-[581px] max-laptop:overflow-hidden 
          max-mobile:overflow-hidden"
          ></div>
          <div
            className="custom-gradient-bottom w-[auto] 
          h-[430px] absolute bottom-0 left-0 right-0 
          max-laptop:h-[581px] max-laptop:overflow-hidden 
          max-mobile:overflow-hidden"
          ></div>
          <img
            alt=""
            src={logoapp}
            className=" absolute top-[50%] left-[50%] 
            transform -translate-x-1/2 -translate-y-1/2
             w-[470px] h-[470px]
            /*Laptop screen*/
             max-laptop:w-[300px]
             max-laptop:h-[300px]
             /mobile/
             max-mobile:w-[200px]
             max-mobile:h-[200px]"
          ></img>
        </div>
        <div
          className="hero-content-2 w-[100%] 
                        flex justify-center items-center flex-col 
                        relative z-50 top-[-60px]
                        
                        /*Laptop screen*/
                        max-laptop:top-[-100px]
                        "
        >
          <h1
            className="text-font_58 font-bold 
          text-white w-[1096px] text-center  
          leading-[87px]
          
          /*Laptop screen*/
          max-laptop:text-[48px]
          max-laptop: font-big_weight
          max-laptop:leading-[72px]
          max-laptop:w-[auto]
          /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[20px]
        max-leading-[30px]
        
          "
          >
            The Best Streaming Experience
          </h1>
          <p
            className="text-font_18 font-normal
           text-text_grey_2  text-center 
           leading-[27px]
            max-w-[1096px]
            w-[auto]
           
           /*Laptop screen*/
            max-laptop:text-[14px]
            max-laptop:font-small_weight
            max-laptop:leading-[21px]
            /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[14px]
        max-mobile:leading-[21px]
        max-mobile:mx-[16px]
            
           "
          >
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button
            className="mt-[50px] 
          w-[auto] h-[64px] flex flex-row bg-red_bg  
          rounded-[8px] justify-center items-center 
           border-[none]
          px-[24px] py-[24px] gap-[4px]
           hover:opacity-70
           
           /*Laptop screen*/
            max-laptop:h-[52px]
            max-laptop:py-[14px]
            max-laptop:px-[24px]
            max-laptop:text-[14px]
            max-laptop:leading-[21px]
            /mobile/
           
           "
          >
            <img src={iconplay} alt="" />
            <span
              className="text-white font-semibold text-font_18 leading=[27px]   max-laptop:text-[14px]
            max-laptop:leading-[21px]"
            >
              Start Wathcing Now
            </span>
          </button>
        </div>
      </section>
      <section
        className="categories w-full px-[164px]
      /*Laptop screen*/
      max-laptop:px-[80px]
      /mobile/
      max-mobile:px-4
      "
      >
        <div className="categories-heading">
          <h2
            className=" font-bold text-font_38 
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
        <div className="carousel w-full flex flex-col mt-[80px] max-laptop:mt-[60px]">
          <Slider_img categorieList={categorieList}></Slider_img>
        </div>
        ;
      </section>
      <section className="device w-full px-[164px] max-laptop:px-[80px] max-mobile:px-[16px]">
        <h2
          className=" font-bold text-font_38 leading-[57px] text-white w-[1297px]
        /*Laptop*/
        max-laptop:text-[28px]
        max-laptop:leading-[42px]
        max-laptop:w-[auto]
        /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[20px]
        max-leading-[30px]"
        >
          We Provide you streaming experience across various devices.
        </h2>
        <p
          className="text-font_18 font-normal text-text_grey_2  
        leading-[27px] mt-[14px] 
        max-w-[1297px]
        w-[auto]
        /*Laptop*/
        max-laptop:text-[16px]
        max-laptop:font-[400]
        max-laptop:leading-[24px]
        max-laptop:h-[48px]
        /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[14px]
        max-leading-[21px]
        "
        >
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
        <Devides_list />
      </section>
      <section className="FAQ  w-full px-[164px] flex flex-col max-laptop:px-[80px] max-mobile:px-4">
        <div className="FAQ-header flex  justify-between w-full items-center /mobile/ max-mobile:flex-col max-mobile:gap-5  max-mobile:items-start">
          <div className=" flex flex-col">
            <h2
              className=" font-bold text-font_38 leading-[57px] text-white w-fit
            /*Laptop*/
        max-laptop:text-[28px]
        max-laptop:leading-[42px]
        max-laptop:w-[auto]
        /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[20px]
        max-leading-[30px]"
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-font_18 font-normal text-text_grey_2  leading-[27px] mt-[14px] max-w-[1297px]
        w-[auto]
             max-laptop:text-[16px]
        max-laptop:font-[400]
        max-laptop:leading-[24px]
        max-laptop:h-[48px]
        /mobile/
        max-mobile:h-[auto]
        max-mobile:text-[14px]
        max-leading-[21px]"
            >
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <RedBtn name="Ask a question" />
        </div>
        <FAQquestion />
      </section>
      <section className="pricing w-full px-[164px] max-laptop:px-[80px] max-mobile:px-4">
        <UserPrice />
      </section>
      <section className="CTA w-full px-[164px] max-laptop:px-[80px] max-mobile:px-4">
        <div
          className="w-full rounded-xl h-[313px]  overflow-hidden   items-center] bg-cover
          flex   justify-around  items-center
          px-[80px]
          /mobile/
          max-mobile:flex-col
          max-mobile:px-5
          max-mobile:bg-center"
          style={{
            backgroundImage: `url(${require("../../assets/imgs/homepage/bg.png")})`,
          }}
        >
          <div className="w-full flex flex-col /mobile/ max-mobile:text-center">
            <h2
              className=" font-bold text-font_38 leading-[57px] text-white w-[auto]
               /*Laptop*/
        max-laptop:text-[28px]
        max-laptop:leading-[42px]
        max-laptop:w-[auto]
        "
            >
              Frequently Asked Questions
            </h2>
            <p
              className="text-font_18 font-normal text-text_grey_2  leading-[27px] mt-[14px] w-[auto] h-[auto]
            max-laptop:text-[16px]
        max-laptop:font-[400]
        max-laptop:leading-[24px]
        max-laptop:h-[48px]"
            >
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <RedBtn name="Start a free trial" />
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default HomePage;
