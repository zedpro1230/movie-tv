import logo_phone from "../assets/imgs/logos/phone.svg";
import logo_tablet from "../assets/imgs/logos/tablet.svg";
import logo_tv from "../assets/imgs/logos/tv.svg";
import logo_laptop from "../assets/imgs/logos/laptop.svg";
import logo_game from "../assets/imgs/logos/game.svg";
import logo_vr from "../assets/imgs/logos/vr.svg";

const devices = [
  {
    logo: logo_phone,
    name: "Smartphones",
    info: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    logo: logo_tablet,
    name: "Tablet",
    info: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    logo: logo_tv,
    name: "Smart TV",
    info: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    logo: logo_laptop,
    name: "Laptops",
    info: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    logo: logo_game,
    name: "Gaming consoles",
    info: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    logo: logo_vr,
    name: "VR Headsets",
    info: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

const Devides_list = () => {
  return (
    <ul
      className="device-list grid w-full  grid-cols-3 gap-[30px] mt-[80px]  max-laptop:gap-5 
    /mobile/ max-mobile:grid-cols-1"
    >
      {devices.map((device, index) => (
        <li
          key={index}
          className="flex justify-center items-start flex-col 
          w-[auto] h-[283px] custom-gradient-devide-bg 
          
          rounded-xl border-solid border-[#262626] border-[1px]
           p-[50px] gap-[30px]
         
           cursor-pointer
           /*Laptop screen*/
           max-laptop:w-[auto]
           max-laptop:flex-shrink-0
           max-laptop:h-[230px]
           max-laptop:gap-[24px]
           max-laptop:p-[40px]
           /mobile/
           max-mobile:p-6"
        >
          <div
            className="header-content flex flex-row items-center gap-5
          /*Laptop screen*/
          max-laptop:gap-[12px]
          "
          >
            <div
              className="content-logo w-[72px] h-[72px]  p-4 bg-[#141414] 
            flex justify-center items-center rounded-xl border-solid border-[#1F1F1F] border-[1px]
            /*laptop screen*/
            max-laptop:w-[54px]
            max-laptop:h-[54px]
            max-laptop:p-3
            /mobile/
            max-mobile:w-[44px]
            max-mobile:h-[44px]
            max-mobile:p-[10px]"
            >
              <img
                alt=""
                src={device.logo}
                className="w-[40px] h-[40px] max-laptop:w-[30px] max-laptop:h-[30px]"
              ></img>
            </div>
            <span
              className="logo-name text-[24px] leading-[36px] font-[600] text-white
            /*Laptop screen*/
            max-laptop:text-[20px]
            max-laptop:leading-[30px]
            /mobile/
            max-mobile:text-[18px]
            max-mobile:leading-[27px]"
            >
              {device.name}
            </span>
          </div>
          <p
            className="info-content w-[auto] h-[81px] text-[#999999] font-small_weight leading-[27px]
          /*Latop*/
          max-laptop:w-[auto]
          max-laptop:h-[auto]
          max-laptop:text-[16px]
          max-laptop:leading-[24px]
          /mobile/
          max-mobile:text-[14px]
          max-mobile:leading-[21px]"
          >
            {device.info}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default Devides_list;
