import tw from "../assets/imgs/logos/tw.svg";
import fb from "../assets/imgs/logos/fb.svg";
import inl from "../assets/imgs/logos/in.svg";
const Footer = () => {
  return (
    <div className="w-full flex flex-col px-[164px] max-laptop:px-[80px] max-mobile:px-[16px]">
      <ul
        className="footer-top flex flex-row w-full justify-between 
      max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-y-8"
      >
        <li className="flex flex-col justify-start gap-6">
          <p className="text-[20px] font-[600] leading-[30px] text-white max-laptop:text-[18px] max-laptop:leading-[27px]">
            Home
          </p>
          <ul className="flex flex-col gap-[14px]">
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Categories
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Devices
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Pricing
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                FAQ
              </p>
            </li>
          </ul>
        </li>
        <li className="flex flex-col justify-start gap-6">
          <p className="text-[20px] font-[600] leading-[30px] text-white max-laptop:text-[18px] max-laptop:leading-[27px]">
            Movie
          </p>
          <ul className="flex flex-col gap-[14px]">
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Gernes
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Trending
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                New Release
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Popular
              </p>
            </li>
          </ul>
        </li>
        <li className="flex flex-col justify-start gap-6">
          <p className="text-[20px] font-[600] leading-[30px] text-white max-laptop:text-[18px] max-laptop:leading-[27px]">
            Shows
          </p>
          <ul className="flex flex-col gap-[14px]">
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Gernes
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Trending
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                New Release
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Popular
              </p>
            </li>
          </ul>
        </li>
        <li className="flex flex-col justify-start gap-6">
          <p className="text-[20px] font-[600] leading-[30px] text-white max-laptop:text-[18px] max-laptop:leading-[27px]">
            Suport
          </p>
          <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
            Contact Us
          </p>
        </li>
        <li className="flex flex-col justify-start gap-6">
          <p className="text-[20px] font-[600] leading-[30px] text-white max-laptop:text-[18px] max-laptop:leading-[27px]">
            Supscription
          </p>
          <ul className="flex flex-col gap-[14px]">
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Plans
              </p>
            </li>
            <li>
              <p className="text-[18px] font-[500] leading-[27px] text-[#999999] max-laptop:text-[16px] max-laptop:leading-[24px]">
                Features
              </p>
            </li>
          </ul>
        </li>
        <li className="flex flex-col justify-start gap-6">
          <p className="text-[20px] font-[600] leading-[30px] text-white max-laptop:text-[18px] max-laptop:leading-[27px]">
            Connect With Us
          </p>
          <ul className="flex flex-row gap-3">
            <li className="w-[56px] h-[56px] flex justify-center items-center bg-[#1A1A1A] rounded-lg max-laptop:w-[44px] max-laptop:h-[44px]">
              <img alt="" src={tw}></img>
            </li>
            <li className="w-[56px] h-[56px] flex justify-center items-center bg-[#1A1A1A] rounded-lg  max-laptop:w-[44px] max-laptop:h-[44px]">
              <img alt="" src={fb}></img>
            </li>
            <li className="w-[56px] h-[56px] flex justify-center items-center bg-[#1A1A1A] rounded-lg max-laptop:w-[44px] max-laptop:h-[44px]">
              <img alt="" src={inl}></img>
            </li>
          </ul>
        </li>
      </ul>
      <div className="bg-[#262626] w-full h-[1px] mt-[100px] max-mobile:mt-[50px]"></div>
      <ul className="footer-bottom flex flex-row justify-between mt-[24px] max-mobile:flex-col max-mobile:gap-5">
        <li>
          <p className="text-[#999999] text-[18px] leading-[27px] font-small_weight  max-laptop:text-[14px] max-laptop:leading-[21px]">
            @2023 streamvib, All Rights Reserved
          </p>
        </li>
        <li>
          <ul className="flex flex-row justify-between items-center gap-5">
            <li>
              <p className="text-[#999999] text-[18px] leading-[27px] font-small_weight max-laptop:text-[14px] max-laptop:leading-[21px]">
                Terms of Use
              </p>
            </li>
            <div className="w-[1px] h-[20px] bg-[#999999]"></div>
            <li>
              <p className="text-[#999999] text-[18px] leading-[27px] font-small_weight max-laptop:text-[14px] max-laptop:leading-[21px]">
                Privacy Policy
              </p>
            </li>
            <div className="w-[1px] h-[20px] bg-[#999999]"></div>
            <li>
              <p className="text-[#999999] text-[18px] leading-[27px] font-small_weight max-laptop:text-[14px] max-laptop:leading-[21px]">
                Cookie Policy
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
