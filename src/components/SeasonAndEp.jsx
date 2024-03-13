import ep1 from "../assets/imgs/moviepage/ep1.png";
import ep2 from "../assets/imgs/moviepage/ep2.png";
import ep3 from "../assets/imgs/moviepage/ep3.png";
import ep4 from "../assets/imgs/moviepage/ep4.png";
import ep5 from "../assets/imgs/moviepage/ep5.png";
import arrowshow from "../assets/imgs/logos/arrowShow.svg";
import duration from "../assets/imgs/logos/time.svg";
import playicon from "../assets/imgs/logos/hoverPlay.svg";
import { useState } from "react";
const SeasonAndEp = () => {
  const epList = [
    {
      season: "Season 01",
      totalEp: 9,
      episodes: [
        {
          episode: "01",
          thumbnail: ep1,
          chapter: "Chapter One : The Vanishing of Will Byers",
          describe: `On his way from a friend’s house, young Will sees something terrifying . 
            Nearby, a sinister secret lurks in the depths of a government lab.`,
          duration: 49,
        },
        {
          episode: "02",
          thumbnail: ep2,
          chapter: "Chapter Two: The Weirdo on Maple Street",
          describe: `Lucas, Mike and Dustin try to talk to the girl they found in the woods. 
            Hopper questions an anxious Joyce about an unsettling phone call.`,
          duration: 56,
        },
        {
          episode: "03",
          thumbnail: ep3,
          chapter: "Chapter Three: Holly, Jolly",
          describe: `An increasingly concerned Nancy looks for Barb and finds out what 
            Jonathan's been up to. Joyce is convinced Will is trying to talk to her.`,
          duration: 52,
        },
        {
          episode: "04",
          thumbnail: ep4,
          chapter: "Chapter Four: The Body",
          describe: `Refusing to believe Will is dead, Joyce tries to connect with her son. 
            The boys give Eleven a makeover..`,
          duration: 51,
        },
        {
          episode: "05",
          thumbnail: ep5,
          chapter: "Chapter Five: The Flea and the Acrobat",
          describe: `Hopper breaks into the lab while Nancy and Jonathan confront the force 
            that took Will. The boys ask Mr. Clarke how to travel to another dimension.`,
          duration: 53,
        },
      ],
    },
    {
      season: "Season 02",
      totalEp: 5,
      episodes: [
        {
          episode: "01",
          thumbnail: ep1,
          chapter: "Chapter One : The Vanishing of Will Byers",
          describe: `On his way from a friend’s house, young Will sees something terrifying . 
            Nearby, a sinister secret lurks in the depths of a government lab.`,
          duration: 49,
        },
        {
          episode: "02",
          thumbnail: ep2,
          chapter: "Chapter Two: The Weirdo on Maple Street",
          describe: `Lucas, Mike and Dustin try to talk to the girl they found in the woods. 
            Hopper questions an anxious Joyce about an unsettling phone call.`,
          duration: 56,
        },
        {
          episode: "03",
          thumbnail: ep3,
          chapter: "Chapter Three: Holly, Jolly",
          describe: `An increasingly concerned Nancy looks for Barb and finds out what 
            Jonathan's been up to. Joyce is convinced Will is trying to talk to her.`,
          duration: 52,
        },
        {
          episode: "04",
          thumbnail: ep4,
          chapter: "Chapter Four: The Body",
          describe: `Refusing to believe Will is dead, Joyce tries to connect with her son. 
            The boys give Eleven a makeover..`,
          duration: 51,
        },
        {
          episode: "05",
          thumbnail: ep5,
          chapter: "Chapter Five: The Flea and the Acrobat",
          describe: `Hopper breaks into the lab while Nancy and Jonathan confront the force 
            that took Will. The boys ask Mr. Clarke how to travel to another dimension.`,
          duration: 53,
        },
      ],
    },
    {
      season: "Season 03",
      totalEp: 7,
      episodes: [
        {
          episode: "01",
          thumbnail: ep1,
          chapter: "Chapter One : The Vanishing of Will Byers",
          describe: `On his way from a friend’s house, young Will sees something terrifying . 
            Nearby, a sinister secret lurks in the depths of a government lab.`,
          duration: 49,
        },
        {
          episode: "02",
          thumbnail: ep2,
          chapter: "Chapter Two: The Weirdo on Maple Street",
          describe: `Lucas, Mike and Dustin try to talk to the girl they found in the woods. 
            Hopper questions an anxious Joyce about an unsettling phone call.`,
          duration: 56,
        },
        {
          episode: "03",
          thumbnail: ep3,
          chapter: "Chapter Three: Holly, Jolly",
          describe: `An increasingly concerned Nancy looks for Barb and finds out what 
            Jonathan's been up to. Joyce is convinced Will is trying to talk to her.`,
          duration: 52,
        },
        {
          episode: "04",
          thumbnail: ep4,
          chapter: "Chapter Four: The Body",
          describe: `Refusing to believe Will is dead, Joyce tries to connect with her son. 
            The boys give Eleven a makeover..`,
          duration: 51,
        },
        {
          episode: "05",
          thumbnail: ep5,
          chapter: "Chapter Five: The Flea and the Acrobat",
          describe: `Hopper breaks into the lab while Nancy and Jonathan confront the force 
            that took Will. The boys ask Mr. Clarke how to travel to another dimension.`,
          duration: 53,
        },
      ],
    },
  ];
  const [showEpisodes, SetShowEpisodes] = useState(
    Array(epList.length).fill(false)
  );
  const handleShow = (index) => {
    SetShowEpisodes((prevShowStates) => {
      const newShowStates = [...prevShowStates];
      newShowStates[index] = !newShowStates[index];
      return newShowStates;
    });
  };
  return (
    <div className="bg-[#1A1A1A] flex flex-col px-[30px] rounded-[12px] pb-[30px] border border-[#262626] border-solid w-full max-mobile:px-[10px]">
      <h2 className=" text-[#FFFFFF] text-[24px]  my-[40px] max-mobile:text-[18px] max-mobile:leading-7 ">
        Sesons and Episodes
      </h2>
      <ul className=" flex flex-col gap-5 h-[auto] w-[auto]">
        {epList.map((season, index) => (
          <li
            key={index}
            className="bg-[#0F0F0F] rounded-[12px] 
          flex items-center  h-[auto] flex-col
          px-[40px] py-[20px]"
          >
            <div className="flex flex-row  justify-between w-[100%]">
              <div className="flex flex-row items-center gap-4">
                <h3 className="text-[24px] text-[#FFFFFF] leading-9 font-[600] max-mobile:text-[16px] max-mobile:leading-6">
                  {season.season}
                </h3>
                <p className="text-[18px] font-medium_weight text-[#999999] leading-7 max-mobile:text-[14px] max-mobile:left-5">
                  {season.totalEp} episodes
                </p>
              </div>
              <button
                className="w-[52px] h-[52px] rounded-[50%] border-[1px] border-[#262626] border-solid
            flex justify-center items-center bg-[#141414]"
                onClick={() => handleShow(index)}
              >
                <img
                  alt=""
                  src={arrowshow}
                  className={`${
                    showEpisodes[index]
                      ? "rotate-180 ease-in duration-300"
                      : "ease-in duration-300"
                  } `}
                ></img>
              </button>
            </div>
            <ul
              className={`eplists ${
                showEpisodes[index]
                  ? "w-full flex flex-col gap-5 mt-[30px]"
                  : "hidden"
              }`}
            >
              {season.episodes.map((ep, index) => (
                <li className="flex flex-row items-center  justify-between border-t-[1px] border-[#262626] pt-[40px] pb-[30px] gap-5 max-laptop:items-start max-mobile:flex-col">
                  <div
                    className="ep-header flex flex-row   items-center w-[25%] gap-[40px] max-laptop:flex-col max-laptop:gap-5 max-mobile:flex-row-reverse max-mobile:w-full
                  max-mobile:justify-end"
                  >
                    <span className="text-[#999999] text-[30px] leading-[45px] font-[600]">
                      {ep.episode}
                    </span>
                    <div className="group relative">
                      <img
                        alt=""
                        src={ep.thumbnail}
                        className="w-[172px] h-[118px]"
                      />
                      <button
                        class="group-hover:flex  w-[172px] h-[118px]
                       bg-epBG rounded-xl  hidden  justify-center items-center 
                       absolute top-0 right-0 left-0 border border-[#262626] border-solid"
                      >
                        <img alt="" src={playicon} />
                      </button>
                    </div>
                  </div>
                  <div className="ep-content flex flex-col w-[75%] gap-5">
                    <div className="content-header flex flex-row gap-5 items-center justify-between max-mobile:flex-col-reverse max-mobile:items-start">
                      <h3
                        className="font-[600] text-[20px] leading-[30px] text-[#FFFFFF]
                       max-laptop:text-[18px] max-laptop:leading-[27px]  max-mobile:text-[16px] max-mobile:leading-6 "
                      >
                        {ep.chapter}
                      </h3>
                      <div
                        className="flex flex-row w-[98px] h-[40px] items-center gap-[10px] justify-center
                      bg-[#141414] rounded-[8px] border border-[#262626] border-solid
                      max-laptop:w-[80px] max-laptop:h-[33px]"
                      >
                        <img
                          alt=""
                          src={duration}
                          className="w-[18px] h-[18px]"
                        ></img>
                        <span
                          className="text-[#999999] text-[16px] leading-[24px] font-[500]
                        max-laptop:text-[14px] max-laptop:leading-[21px]"
                        >
                          {ep.duration} min
                        </span>
                      </div>
                    </div>
                    <div>
                      <p
                        className="font-[400] text-[18px] leading-[27px] text-[#999999]
                      max-laptop:text-[16px] max-laptop:leading-[24px] max-mobile:hidden"
                      >
                        {ep.describe}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SeasonAndEp;
