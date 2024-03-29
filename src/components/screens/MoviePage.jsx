import Header from "../Header";
import HeroMoviesilder from "../HeroMovieslider";
import GenresSlider from "../GenresSlider";
import GenresSliderTop10 from "../slider_movie_page/GenresSliderTop10";
import MovieTrendingSlider from "../slider_movie_page/MovieTrendingslider";
import NewReleasesSlider from "../slider_movie_page/NewReleasesSlider";
import MustWatchMovieSlider from "../slider_movie_page/MustWatchMovieSlider";
import trendmovie1 from "../../assets/imgs/moviepage/trend1.png";
import trendmovie2 from "../../assets/imgs/moviepage/trend2.png";
import trendmovie3 from "../../assets/imgs/moviepage/trend3.png";
import trendmovie4 from "../../assets/imgs/moviepage/trend4.png";
import trendmovie5 from "../../assets/imgs/moviepage/trend5.png";
import mustwatchmovie1 from "../../assets/imgs/moviepage/must1.png";
import mustwatchmovie2 from "../../assets/imgs/moviepage/must2.png";
import mustwatchmovie3 from "../../assets/imgs/moviepage/must3.png";
import mustwatchmovie4 from "../../assets/imgs/moviepage/must4.png";
import mustshow1 from "../../assets/imgs/moviepage/mustshow1.png";
import mustshow2 from "../../assets/imgs/moviepage/mustshow2.png";
import mustshow3 from "../../assets/imgs/moviepage/mustshow3.png";
import mustshow4 from "../../assets/imgs/moviepage/mustshow4.png";
import ShowTrendingSlider from "../slider_movie_page/ShowtrendingSlider";
import NewShowSlider from "../slider_movie_page/NewShowSlider";
import RedBtn from "../RedBtn";
import Footer2 from "../Footer2";
import { useState } from "react";
const Movie = () => {
  const trendMovies = [
    {
      img: trendmovie1,
      time: "1h 30min",
      view: "2k",
    },
    {
      img: trendmovie2,
      time: "1h 57min",
      view: "1.5k",
    },
    {
      img: trendmovie3,
      time: "2h 10min",
      view: "1.8k",
    },
    {
      img: trendmovie4,
      time: "2h 20min",
      view: "3k",
    },
    {
      img: trendmovie5,
      time: "1h 42min",
      view: "3k",
    },
    {
      img: trendmovie1,
      time: "1h 30min",
      view: "2k",
    },
    {
      img: trendmovie2,
      time: "1h 57min",
      view: "1.5k",
    },
    {
      img: trendmovie3,
      time: "2h 10min",
      view: "1.8k",
    },
  ];
  const mustWatchMovvies = [
    {
      thumbnail: mustwatchmovie1,
      time: "1h75min",
      rate: 4.5,
    },
    {
      thumbnail: mustwatchmovie2,
      time: "1h30min",
      rate: 4,
    },
    {
      thumbnail: mustwatchmovie3,
      time: "1h42min",
      rate: 4.5,
    },
    {
      thumbnail: mustwatchmovie4,
      time: "2h10min",
      rate: 4,
    },
    {
      thumbnail: mustwatchmovie3,
      time: "1h42min",
      rate: 4.5,
    },
    {
      thumbnail: mustwatchmovie4,
      time: "2h10min",
      rate: 4,
    },
    {
      thumbnail: mustwatchmovie2,
      time: "1h30min",
      rate: 4,
    },
  ];
  const mustWatchShows = [
    {
      thumbnail: mustshow1,
      time: "7h40min",
      rate: 4.5,
    },
    {
      thumbnail: mustshow2,
      time: "12h23min",
      rate: 4,
    },
    {
      thumbnail: mustshow3,
      time: "10h30min",
      rate: 4.5,
    },
    {
      thumbnail: mustshow4,
      time: "8h20min",
      rate: 4,
    },
    {
      thumbnail: mustshow3,
      time: "10h30min",
      rate: 4.5,
    },
    {
      thumbnail: mustshow4,
      time: "8h20min",
      rate: 4,
    },
    {
      thumbnail: mustshow2,
      time: "12h23min",
      rate: 4,
    },
  ];
  const [tabKinds, SetTabKinds] = useState("Movie");
  const kinds = ["Movie", "Show"];
  const handleTab = (i) => {
    SetTabKinds(i);
    console.log(SetTabKinds(i));
  };
  return (
    <div
      className="home font-manrope  bg-app_bg w-[100vdw]  
                    h-[auto] flex flex-col gap-[80px]"
    >
      <Header />
      <section className="hero_movie_section  max-w-[1594px] w-[83%] mx-[auto] mt-[200px]">
        <HeroMoviesilder />
      </section>
      <section
        className="movie  max-w-[1594px] w-[83%] mx-[auto] h-[auto] border-[#1F1F1F] 
      border border-solid  rounded-lg relative p-[50px]
      flex flex-col gap-[100px]  max-mobile:hidden"
      >
        <div
          className="w-fit py-[14px] px-[27px] flex gap-[10px]
        bg-red_bg h-[50px] rounded-lg items-center justify-center hover:opacity-75 
         absolute top-[-25px] left-[56px] "
        >
          <p className="text-white font-[600] leading-[27px] ">Movies</p>
        </div>
        <div className="Genres">
          <GenresSlider id={1} />
        </div>

        <div className="GenresTop10">
          <GenresSliderTop10 sliderId={1} />
        </div>

        <div className="movetrend">
          <MovieTrendingSlider id={1} trend={trendMovies} />
        </div>

        <div className="released-movie">
          <NewReleasesSlider id={1} />
        </div>

        <div className="Must-Watch-movie">
          <MustWatchMovieSlider id={1} type={mustWatchMovvies} />
        </div>
      </section>
      <section
        className="show  max-w-[1594px] w-[83%] mx-[auto] h-[auto] border-[#1F1F1F] 
      border border-solid  rounded-lg relative p-[50px]
      flex flex-col gap-[100px] max-mobile:hidden "
      >
        <div
          className="w-fit py-[14px] px-[27px] flex gap-[10px]
        bg-red_bg h-[50px] rounded-lg items-center justify-center hover:opacity-75 
         absolute top-[-25px] left-[56px] "
        >
          <p className="text-white font-[600] leading-[27px] ">Shows</p>
        </div>
        <div className="Genres">
          <GenresSlider id={2} />
        </div>

        <div className="GenresTop10">
          <GenresSliderTop10 sliderId={2} />
        </div>
        <div className="Trending-show">
          <h2 className="text-[38px] font-big_weight leading-[57px] text-white mb-[50px]">
            Trending Shows Now
          </h2>
          <ShowTrendingSlider id={1} />
        </div>
        <div className="New-show">
          <h2 className="text-[38px] font-big_weight leading-[57px] text-white mb-[50px]">
            New Released Shows
          </h2>
          <NewShowSlider id={1} />
        </div>
        <div className="Must-Watch-show">
          <MustWatchMovieSlider id={2} type={mustWatchShows} kind="movie" />
        </div>
      </section>
      <section className="mobile-view-slider max-w-[90%] mx-[auto]  hidden max-mobile:flex max-mobile:flex-col">
        <div
          className="price-tabs w-[237px] h-[75px] bg-[#0F0F0F] rounded-[10px] 
        border border-[#262626] boder-solid p-[10px] flex flex-row justify-center items-center
        mx-[auto] mb-[20px]
        /*laptop*/
        max-laptop:w-[190px]
        max-laptop:h-[61px]
        max-laptop:p-2"
        >
          {kinds.map((i, index) => (
            <div
              key={index}
              className={`w-[118px] h-[55px] px-6 py-[14px] flex justify-center  items-center rounded-[10px] cursor-pointer max-laptop:w-[94px] max-laptop:h-[45px] max-laptop:px-5 max-laptop:py-3 ${
                tabKinds === i ? "bg-[#1F1F1F]" : ""
              }`}
              onClick={() => handleTab(i)}
            >
              <p
                className={`text-[18px] font-medium_weight leading-[27px] max-laptop:text-[14px] max-laptop:leading-[21px] ${
                  tabKinds === i ? "text-white" : "text-[#999999]"
                }`}
              >
                {i}
              </p>
            </div>
          ))}
        </div>
        {tabKinds === "Movie" ? (
          <div className="flex flex-col gap-[40px]">
            <GenresSlider id={3} />
            <GenresSliderTop10 sliderId={3} />
            <MovieTrendingSlider id={3} trend={trendMovies} />
            <NewReleasesSlider id={2} />
            <MustWatchMovieSlider id={3} type={mustWatchMovvies} kind="movie" />
          </div>
        ) : (
          <div>Eheheheheheh</div>
        )}
      </section>
      <section className="CTA  max-w-[1594px] w-[83%] mx-[auto] ">
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
              className=" font-big_weight text-font_38 leading-[57px] text-white w-[auto]
               /*Laptop*/
        max-laptop:text-[28px]
        max-laptop:leading-[42px]
        max-laptop:w-[auto]
        "
            >
              Start your free trial today!
            </h2>
            <p
              className="text-font_18 font-normal text-text_grey_2  leading-[27px] mt-[14px] w-[auto] h-[auto]
            max-laptop:text-[16px]
        max-laptop:font-[400]
        max-laptop:leading-[24px]
        max-laptop:h-[48px]"
            >
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <RedBtn name="Start a free trial" />
        </div>
      </section>
      <Footer2 />
    </div>
  );
};
export default Movie;
