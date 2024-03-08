import logo from "../assets/imgs/logos/Logo.png";
import searchlogo from "../assets/imgs/logos/search.svg";
import nofication from "../assets/imgs/logos/nofication.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import mobieBtn from "../assets/imgs/logos/mobile_show.svg";
import close from "../assets/imgs/logos/close.svg";
const Header = () => {
  const tabs = useMemo(
    () => ["Home", "Movies & Shows", "Suport", "Subscriptions"],
    []
  );
  const linkTabs = useMemo(
    () => ["/home", "/movie", "/suport", "/subscriptions"],
    []
  );
  const logoBtn = [searchlogo, nofication];
  const navigate = useNavigate();
  const location = useLocation();
  const [tabActive, setTabactive] = useState("Home");
  const [navMobile, SetNavMobile] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;

    // Check if the current path starts with "/movie"
    if (currentPath.startsWith("/movie")) {
      setTabactive("Movies & Shows");
    } else {
      // Find the corresponding tab based on the current path
      const currentTab = tabs[linkTabs.indexOf(currentPath)];
      setTabactive(currentTab);
    }
  }, [location, tabs, linkTabs, navMobile]);

  const handleTab = (tab, link) => {
    setTabactive(tab);
    navigate(link);
  };
  const handleNavBtn = () => {
    SetNavMobile(true);
    console.log(navMobile);
  };
  const handleCloseNavBtn = () => {
    SetNavMobile(false);
    console.log(navMobile);
  };
  return (
    <section
      className="
    nav-bar flex justify-between items-center 
    h-[120px] fixed top-0 left-[162px] right-[162px]  
    z-[60]   w-[auto] 
    
    /* Responsive styles for laptops */
     max-laptop:left-20
     max-laptop:right-20  
     max-laptop:h-[98px]
     /*mobile*/
     max-mobile:left-4
     max-mobile:right-4
     max-mobile:top-10
     
     max-mobile:h-[102px]
    "
    >
      <img
        className="logo-movie
                  w-48  h-15
                  /* Responsive styles for laptops */
                  max-laptop:w-[166px]
                  max-laptop:h-[50px]
                  /*mobile*/
                  max-mobile:w-[116px]
                  max-mobile:h-[35px]
                  "
        alt="logo-img"
        src={logo}
      />
      <ul
        className="tabs 
                  flex flex-row 
                  w-auto pr-[20px] pl-[20px] py-[10px]
                  mr-[40px] justify-center items-center
                  rounded-xl border-4 border-black_12
                  gap-[30px] h-[75px] bg-nav_bg
                  
                  /* Responsive styles for laptops */
                  max-laptop:h-[61px]
                  max-laptop:mr-[30px]
                  max-laptop:h-gap-[16px]
                  max-laptop:h-py-[8px]
                  max-laptop:h-pl-[8px]
                  /*mobile*/
                  max-mobile:hidden
                  "
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={` 
            cursor-pointer w-auto h-[55px] 
            flex justify-center items-center 

            /* Responsive styles for laptops */
            max-laptop:h-[45px] 
              ${
                tabActive === tab
                  ? "px-4 py-6  bg-tab_bg rounded-lg  max-laptop:px-3 max-laptop:py-5 "
                  : ""
              }`}
            onClick={() => handleTab(tab, linkTabs[index])}
          >
            <p
              className={
                tabActive === tab
                  ? "text-white text-lg font-medium_weight leading-[27px] max-laptop:text-[14px] max-laptop:leading-[21px]"
                  : "text-text_grey text-lg font-small_weight leading-[27px] max-laptop:text-[14px] max-laptop:leading-[21px]"
              }
            >
              {tab}
            </p>
          </li>
        ))}
      </ul>
      <ul
        className="intertact-icon flex flex-row 
      justify-center items-center gap-[30px]
      /*mobile*/
      max-mobile:hidden        
      "
      >
        {logoBtn.map((icon, index) => (
          <li
            className="
          w-[34px] h-[34px] cursor-pointer
          
          /*Laptop screen/ 
          max-laptop:w-[24px] 
          max-laptop:h-[24px]
          "
            key={index}
          >
            <img alt="..." src={icon} />
          </li>
        ))}
      </ul>
      <div
        className="mobile-btn w-[48px] h-[48px] p-3 bg-[#1A1A1A] 
      border border-solid border-[#262626] rounded-md 
      justify-center items-center hidden 
      /*Mobile*/
      max-mobile:flex
      "
        onClick={() => handleNavBtn()}
      >
        <img alt=" " src={mobieBtn}></img>
      </div>

      <ul
        className={`tab_mobile
                  flex flex-col absolute
                  w-full px-[10px] py-[10px]
                  justify-start items-center
                  rounded-xl border-4 border-black_12
                  gap-[30px] h-fit bg-nav_bg
                  top-[27px] 
                  transition-all duration-300 ease-in-out
                  translate-x-[-120%]   ${
                    navMobile === true ? "translate-x-[0] translate-y-[0]" : ""
                  } `}
      >
        <div className="relative w-full h-[auto]">
          <img
            alt=" "
            src={close}
            className="  absolute right-0 top-0 "
            onClick={() => handleCloseNavBtn()}
          />
        </div>

        {tabs.map((tab, index) => (
          <li
            key={index}
            className={` 
            cursor-pointer w-full h-[55px] 
            flex justify-center items-center 

              ${
                tabActive === tab
                  ? "px-4 py-6  bg-tab_bg rounded-lg  max-laptop:px-3 max-laptop:py-5 "
                  : ""
              }`}
            onClick={() => handleTab(tab, linkTabs[index])}
          >
            <p
              className={
                tabActive === tab
                  ? "text-white text-lg font-medium_weight leading-[27px] max-laptop:text-[14px] max-laptop:leading-[21px]"
                  : "text-text_grey text-lg font-small_weight leading-[27px] max-laptop:text-[14px] max-laptop:leading-[21px]"
              }
            >
              {tab}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Header;
