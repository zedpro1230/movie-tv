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
     px-[162px]
    items-center gap-[80px]
    /*Laptop screen*/ 
     max-laptop:gap-[60px]
    /mobile/
    max-mobile:gap-[40px]
    "
    >
      <Header />
      <section
        className="movie-hero w-[1594px] h-[835px] bg-hero-bg mt-[200px]
      flex items-center  flex-col justify-end"
      >
        <div className=" flex items-center gap-[30px] flex-col justify-end w-[100%]   h-[auto] mb-[20px]">
          <h1 className=" text-[38px]   font-big_weight leadind-[57px] text-white ">
            Stranger Things
          </h1>
          <p className=" text-[18px]  font-medium_weight leadind-[27px] text-[#999999] w-[auto] max-w-[1254px]">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange
            little girl.
          </p>
          <div className="movie_action flex flex-row gap-5">
            <button
              className="w-fit py-[14px] px-[27px] flex gap-[10px]
                    bg-red_bg h-[56px] rounded-lg items-center justify-center hover:opacity-75"
            >
              <img alt="" src={icon_play}></img>
              <p className="text-white font-[600] leading-[27px]">Play Now</p>
            </button>
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
      </section>
      <section className="movie-details w-[100%] flex flex-col gap-10">
        <div className="moive-body-top flex gap-[30px] flex-row">
          <div className="movie-seasons&ep w-[1062px] flex flex-col gap-8">
            <div className="seasons">
              <SeasonAndEp />
            </div>
            <div className="descripton w-[100%] bg-[#1A1A1A] rounded-xl border border-[#262626] border-solid p-[50px] flex flex-col gap-5">
              <h2 className="des-header text-[18px] text-[#999999] font-[500] leading-[27px]">
                Descripton
              </h2>
              <p className="des-content text-[18px] text-[#FFFFFF] font-[500] leading-[27px] max-w-[auto]">
                When a young boy vanishes, a small town uncovers a mystery
                involving secret experiments, terrifying supernatural forces and
                one strange little girl.
              </p>
            </div>
          </div>
          <ul
            className="movie-info w-[519px] bg-[#1A1A1A] rounded-xl border border-[#262626] 
          border-solid p-[30px]  h-fit gap-5 flex flex-col"
          >
            <li className="released w-[auto] flex flex-col gap-1">
              <div className="heading flex flex-row gap-2 items-center">
                <span>
                  <img alt="" src={releaseicon} />
                </span>
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px]">
                  Released Year
                </span>
              </div>
              <span className="text-[#FFFFFF] text-[20px] leading-[30px] font-[600]">
                2022
              </span>
            </li>
            <li className="language flex flex-col gap-2 ">
              <div className="heading flex flex-row gap-2 items-center">
                <span>
                  <img alt="" src={languageicon} />
                </span>
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px]">
                  Available languages
                </span>
              </div>
              <ul className="flex w-[390px]  flex-wrap gap-[10px]">
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    English
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Hindi
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Tamil
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Telegu
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-[90px] h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Kannada
                  </span>
                </li>
              </ul>
            </li>
            <li className="ratings flex flex-col gap-3">
              <div className="heading flex flex-row gap-2 items-center">
                <span>
                  <img alt="" src={rateicon} />
                </span>
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px]">
                  Ratings
                </span>
              </div>
              <div className="w-[100%] flex flex-row gap-4">
                <div className="IMDB bg-[#141414] rounded-lg border border-[#262626] border-solid w-fit h-fit p-3">
                  <span className="font-[600] text-[20px] leading-[30px] text-[#FFFFFF]">
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
                    <span className="font-[500] text-[20px] leading-[30px] text-[#FFFFFF]">
                      4.5
                    </span>
                  </div>
                </div>
                <div className="Steam bg-[#141414] rounded-lg border border-[#262626] border-solid w-fit h-fit p-3">
                  <span className="font-[600] text-[20px] leading-[30px] text-[#FFFFFF]">
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
                    <span className="font-[500] text-[20px] leading-[30px] text-[#FFFFFF]">
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
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px]">
                  Gernes
                </span>
              </div>
              <ul className="flex   flex-wrap gap-[10px]">
                <li
                  className="bg-[#141414] w-fit h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid  p-[8px]"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Sci-Fi Tv
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-fit h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid p-[8px]"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Teen Tv Shows
                  </span>
                </li>
                <li
                  className="bg-[#141414] w-fit h-[43px] flex justify-center items-center 
                rounded-[6px] border border-[#262626] border-solid p-[8px]"
                >
                  <span className="text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Us Tv Shows
                  </span>
                </li>
              </ul>
            </li>
            <li className="director flex flex-col gap-3">
              <div className="heading flex flex-row gap-2 items-center">
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px]">
                  Director
                </span>
              </div>
              <div
                className="flex flex-row bg-[#141414] w-[100%] h-fit 
                rounded-[6px] border border-[#262626] border-solid p-[10px] gap-3 items-center"
              >
                <img alt="" src={director}></img>
                <div className="flex flex-col">
                  <h3 className="name text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    The Duffer Brothers
                  </h3>
                  <p className="text-[#999999] text-[18px] font-[500] leading-[24px]">
                    From USA
                  </p>
                </div>
              </div>
            </li>
            <li className="music flex flex-col gap-3">
              <div className="heading flex flex-row gap-2 items-center">
                <span className="text-[#999999] text-[18px] font-[500] leading-[27px]">
                  Music
                </span>
              </div>
              <div
                className="flex flex-row bg-[#141414] w-[100%] h-fit 
                rounded-[6px] border border-[#262626] border-solid p-[10px] gap-3 items-center"
              >
                <img alt="" src={musican}></img>
                <div className="flex flex-col">
                  <h3 className="name text-[#ffffff] text-[18px] font-[500] leading-[27px]">
                    Kyle Dixon
                  </h3>
                  <p className="text-[#999999] text-[18px] font-[500] leading-[24px]">
                    From USA
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="Cast&Reviews flex gap-[30px] flex-col w-[1062px]">
          <Cast />
          <Reviews />
        </div>
      </section>
      <section className="CTA w-full">
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
