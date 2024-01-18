import logo from "../assets/imgs/logos/Logo.png";
import searchlogo from "../assets/imgs/logos/search.svg";
import nofication from "../assets/imgs/logos/nofication.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

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
  useEffect(() => {
    const currentTab = tabs[linkTabs.indexOf(location.pathname)];
    setTabactive(currentTab);
  }, [location, tabs, linkTabs]);
  const handleTab = (tab, link) => {
    setTabactive(tab);
    navigate(link);
  };
  return (
    <section className="nav-bar flex justify-between items-center h-[120px] px-[162px] fixed top-0 left-0 right-0 w-full">
      <img
        className="logo-movie
      w-48
      h-15"
        alt="logo-img"
        src={logo}
      />
      <ul
        className="tabs 
                  flex flex-row 
                  w-auto pr-[10px] pl-[10px] py-[10px] 
                  justify-center 
                  items-center
                  rounded-xl
                  border-4
                border-black_12
                  gap-[30px]
                  h-[75px]
                bg-nav_bg"
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={` cursor-pointer w-auto h-[55px] flex justify-center items-center 
              ${tabActive === tab ? "px-4 py-6  bg-tab_bg rounded-lg" : ""}`}
            onClick={() => handleTab(tab, linkTabs[index])}
          >
            <p
              className={
                tabActive === tab
                  ? "text-white text-lg font-medium_weight leading-[27px]"
                  : "text-text_grey text-lg font-small_weight leading-[27px]"
              }
            >
              {tab}
            </p>
          </li>
        ))}
      </ul>
      <ul className="intertact-icon flex flex-row justify-center items-center gap-[30px]">
        {logoBtn.map((icon, index) => (
          <li className="w-[34px] h-[34px] cursor-pointer" key={index}>
            <img alt="..." src={icon} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Header;
