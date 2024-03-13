import Header from "../Header";

import icon_play from "../../assets/imgs/logos/play.svg";
import add_icon from "../../assets/imgs/logos/add.svg";
import like_icon from "../../assets/imgs/logos/like.svg";
import sound_icon from "../../assets/imgs/logos/volume.svg";
import SeasonAndEp from "../SeasonAndEp";
import releaseicon from "../../assets/imgs/logos/calendar.svg";
import languageicon from "../../assets/imgs/logos/language.svg";
import rateicon from "../../assets/imgs/logos/ratingpoint.svg";
import redstaricon from "../../assets/imgs/logos/red_star.svg";
import halfstaricon from "../../assets/imgs/logos/half.svg";
import greystar from "../../assets/imgs/logos/grey_start.svg";
import gernesicon from "../../assets/imgs/logos/Gernes.svg";
import director from "../../assets/imgs/moviepage/director.png";
import musican from "../../assets/imgs/moviepage/music.png";
import Cast from "../Cast";
import Reviews from "../Reviews";
import RedBtn from "../RedBtn";
import Footer from "../Footer2";
const MovieDetail = () => {
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
      <section
        className="movie-hero max-w-[1594px] mx-[auto] w-[83%] h-[835px] bg-hero-bg mt-[200px] bg-center
      flex items-center  flex-col justify-end"
      >
        <div className=" flex items-center gap-[30px] flex-col justify-end w-[100%]   h-[auto] mb-[20px]">
          <h1 className=" text-[38px]   font-big_weight leadind-[57px] text-white max-mobile:text-[24px] max-mobile:leading-9">
            Stranger Things
          </h1>
          <p
            className=" text-[18px]  font-medium_weight leadind-[27px] text-[#999999] w-[auto] max-w-[1254px] text-center
          max-mobile:hidden"
          >
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange
            little girl.
          </p>
          <div className="movie_action flex flex-row gap-5 max-mobile:flex-col">
            <div className="flex">
              <button
                className="w-fit py-[14px] px-[27px] flex gap-[10px] 
                    bg-red_bg h-[56px] rounded-lg items-center justify-center hover:opacity-75
                    max-mobile:w-[310px]"
              >
                <img alt="" src={icon_play}></img>
                <p className="text-white font-[600] leading-[27px]">Play Now</p>
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
      </section>
      <section className="movie-details max-w-[1594px] mx-[auto] w-[83%] flex flex-col gap-10">
        <div className="moive-body-top flex gap-[30px] flex-row max-mobile:flex-col">
          <div className="movie-seasons&ep w-[70%] flex flex-col gap-8 max-mobile:w-full">
            <div className="seasons w-full">
              <SeasonAndEp />
            </div>
            <div className="descripton w-[100%] bg-[#1A1A1A] rounded-xl border border-[#262626] border-solid p-[50px] flex flex-col gap-5 max-mobile:p-[20px]">
              <h2 className="des-header text-[18px] text-[#999999] font-[500] leading-[27px] max-mobile:text-[14px] max-mobile:leading-5">
                Descripton
              </h2>
              <p className="des-content text-[18px] text-[#FFFFFF] font-[500] leading-[27px] max-w-[auto] max-mobile:text-[14px] max-mobile:leading-5">
                When a young boy vanishes, a small town uncovers a mystery
                involving secret experiments, terrifying supernatural forces and
                one strange little girl.
              </p>
            </div>
          </div>
          <ul
            className="movie-info w-[calc(30%-30px)] bg-[#1A1A1A] rounded-xl border border-[#262626] 
          border-solid p-[30px]  h-fit gap-5 flex flex-col max-mobile:w-full max-mobile:p-[20px]"
          >
            <li className="released w-[auto] flex flex-col gap-1">
              <div className="heading flex flex-row gap-2 items-center">
                <span>
                  <img alt="" src={releaseicon} />
                </span>
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px] max-mobile:text-[14px] max-mobile:leading-5">
                  Released Year
                </span>
              </div>
              <span className="text-[#FFFFFF] text-[20px] leading-[30px] font-[600] max-mobile:text-[16px] max-mobile:leading-6">
                2022
              </span>
            </li>
            <li className="language flex flex-col gap-2 ">
              <div className="heading flex flex-row gap-2 items-center">
                <span>
                  <img alt="" src={languageicon} />
                </span>
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px] max-mobile:text-[14px] max-mobile:leading-5">
                  Available languages
                </span>
              </div>
              <ul className="flex w-full  flex-wrap gap-[10px]">
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    English
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Hindi
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Tamil
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Telegu
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Kannada
                  </span>
                </li>
              </ul>
            </li>
            <li className="ratings flex flex-col gap-3 w-full">
              <div className="heading flex flex-row gap-2 items-center">
                <span>
                  <img alt="" src={rateicon} />
                </span>
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px] max-mobile:text-[14px] max-mobile:leading-5">
                  Ratings
                </span>
              </div>
              <div className="w-full flex flex-row gap-4 max-laptop:flex-col max-mobile:flex-row">
                <div className="IMDB bg-[#141414] rounded-lg border border-[#262626] border-solid w-[50%]  p-3 max-laptop:w-full">
                  <span className="font-[600] text-[20px] leading-[30px] text-[#FFFFFF] max-mobile:text-[16px] max-mobile:leading-6">
                    IMDB
                  </span>
                  <div className="flex flex-row items-center gap-1">
                    <ul className="flex flex-row gap-1">
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={halfstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                    </ul>
                    <span className="font-[500] text-[20px] leading-[30px] text-[#FFFFFF] max-mobile:text-[16px] max-mobile:leading-6">
                      4.5
                    </span>
                  </div>
                </div>
                <div className="Steam bg-[#141414] rounded-lg border border-[#262626] border-solid w-[50%]  p-3 max-laptop:w-full">
                  <span className="font-[600] text-[20px] leading-[30px] text-[#FFFFFF] max-mobile:text-[16px] max-mobile:leading-6">
                    SteamVibe
                  </span>
                  <div className="flex flex-row items-center gap-1">
                    <ul className="flex flex-row gap-1">
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={redstaricon}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                      <li>
                        <img
                          alt=""
                          src={greystar}
                          className="w-[24px] h-[24px]"
                        ></img>
                      </li>
                    </ul>
                    <span className="font-[500] text-[20px] leading-[30px] text-[#FFFFFF] max-mobile:text-[16px] max-mobile:leading-6">
                      4.0
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="gernes flex flex-col gap-3">
              <div className="heading flex flex-row gap-2 items-center">
                <span>
                  <img alt="" src={gernesicon} />
                </span>
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px] max-mobile:text-[14px] max-mobile:leading-5">
                  Gernes
                </span>
              </div>
              <ul className="flex   flex-wrap gap-[10px]">
                <li
                  className="bg-[#141414] w-fit h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid  p-[8px]"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Sci-Fi Tv
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-fit h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid p-[8px]"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Teen Tv Shows
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-fit h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid p-[8px]"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Us Tv Shows
                  </span>
                </li>
              </ul>
            </li>
            <li className="director flex flex-col gap-3">
              <div className="heading flex flex-row gap-2 items-center">
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px] max-mobile:text-[14px] max-mobile:leading-5">
                  Director
                </span>
              </div>
              <div
                className="flex flex-row bg-[#141414] w-[100%] h-fit 
                rounded-[6px] border border-[#262626] border-solid p-[10px] gap-3 items-center"
              >
                <img alt="" src={director}></img>
                <div className="flex flex-col">
                  <h3 className="name text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    The Duffer Brothers
                  </h3>
                  <p className="text-[#999999] text-[18px] font-[500] leading-[24px] max-mobile:text-[14px] max-mobile:leading-5">
                    From USA
                  </p>
                </div>
              </div>
            </li>
            <li className="music flex flex-col gap-3">
              <div className="heading flex flex-row gap-2 items-center">
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px] max-mobile:text-[14px] max-mobile:leading-5">
                  Music
                </span>
              </div>
              <div
                className="flex flex-row bg-[#141414] w-[100%] h-fit 
                rounded-[6px] border border-[#262626] border-solid p-[10px] gap-3 items-center"
              >
                <img alt="" src={musican}></img>
                <div className="flex flex-col">
                  <h3 className="name text-[#ffffff] text-[18px] font-[500] leading-[27px] max-mobile:text-[16px] max-mobile:leading-6">
                    Kyle Dixon
                  </h3>
                  <p className="text-[#999999] text-[18px] font-[500] leading-[24px] max-mobile:text-[14px] max-mobile:leading-5">
                    From USA
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="Cast&Reviews flex gap-[30px] flex-col w-[70%] max-mobile:w-full">
          <Cast />
          <Reviews />
        </div>
      </section>
      <section className="CTA max-w-[1596px] w-[83%] mx-[auto]">
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
export default MovieDetail;
