import { useState } from "react";

const UserPrice = () => {
  const [tabactive, SetTabactive] = useState("Months");
  const packageChosen = ["Months", "Years"];
  const packagePlan = [
    {
      name: "Basic Plan",
      describe:
        "Enjoy an extensive library of movies and shows,featuring a range of content, including recently released titles.",
      pricePackage: 9.99,
    },
    {
      name: "Standar Plan",
      describe:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      pricePackage: 12.99,
    },
    {
      name: "Premium Plan",
      describe:
        "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      pricePackage: 14.99,
    },
  ];
  const handleTab = (i) => {
    SetTabactive(i);
  };
  return (
    <>
      <div
        className="price-header flex flex-row  justify-between w-full 
      max-mobile:flex-col max-mobile:gap-5 max-mobile:justify-center"
      >
        <div className=" flex flex-col h-[auto]">
          <h2
            className=" font-[700] text-font_38 leading-[57px] text-white w-fit 
           /*Laptop*/
        max-laptop:text-[28px]
        max-laptop:leading-[42px]
        max-laptop:w-[auto]
        /mobile/
        max-mobile:h-[auto]"
          >
            Choose the plan that's right for you
          </h2>
          <p
            className="text-font_18 font-normal text-text_grey_2  leading-[27px] mt-[14px] w-fit 
          max-laptop:text-[16px]
        max-laptop:font-[400]
        max-laptop:leading-[24px]
        max-laptop:h-[48px]
        /mobile/
        max-mobile:h-[auto]"
          >
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div
          className="price-tabs w-[237px] h-[75px] bg-[#0F0F0F] rounded-[10px] 
        border border-[#262626] boder-solid p-[10px] flex flex-row
        /*laptop*/
        max-laptop:w-[190px]
        max-laptop:h-[61px]
        max-laptop:p-2"
        >
          {packageChosen.map((i, index) => (
            <div
              key={index}
              className={`w-[118px] h-[55px] px-6 py-[14px] flex justify-center  items-center rounded-[10px] cursor-pointer max-laptop:w-[94px] max-laptop:h-[45px] max-laptop:px-5 max-laptop:py-3 ${
                tabactive === i ? "bg-[#1F1F1F]" : ""
              }`}
              onClick={() => handleTab(i)}
            >
              <p
                className={`text-[18px] font-medium_weight leading-[27px] max-laptop:text-[14px] max-laptop:leading-[21px] ${
                  tabactive === i ? "text-white" : "text-[#999999]"
                }`}
              >
                {i}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ul
        className="plan w-full flex flex-row gap-[30px] mt-[80px] 
      max-laptop:gap-[20px]
      max-mobile:flex-col"
      >
        {packagePlan.map((plan, index) => (
          <li
            key={index}
            className="h-[425px] w-[30%] flex flex-col  basis-1/3 p-[50px] 
            gap-[50px] bg-[#1A1A1A] rounded-xl border border-solid border-[#262626]
            max-laptop:p-[40px]
            max-laptop:gap-[40px] 
            /mobile/
            max-mobile:w-[auto]"
          >
            <div className="flex flex-col gap-[12px]">
              <p
                className="text-white text-[24px] leading-[27px] font-big_weight
            /*Laptop*/
            max-laptop:text-[20px]
            max-laptop:leading-[30px]"
              >
                {plan.name}
              </p>
              <p
                className="text-[18px] leading-[27px] font-small_weight w-[auto] text-[#999999]
            max-laptop:text-[16px]
            max-latop:leading-[23px]"
              >
                {plan.describe}
              </p>
            </div>

            {tabactive === "Months" ? (
              <p
                className="text-[40px] font-[600] leading-[29px] text-white
              max-laptop:text-[30px]
              max-laptop:leading-[22px]"
              >
                ${plan.pricePackage}{" "}
                <span className="text-[18px] font-medium_weight leading-[13px] text-[#999999]">
                  /month
                </span>
              </p>
            ) : (
              <p
                className="text-[40px] font-[600] leading-[29px] text-white
               max-laptop:text-[30px]
              max-laptop:leading-[22px]"
              >
                ${(plan.pricePackage * 12).toFixed(2)}{" "}
                <span className="text-[18px] font-medium_weight leading-[13px] text-[#999999]">
                  /year
                </span>
              </p>
            )}
            <div className="flex flex-row gap-5">
              <button
                className="w-[196px] h-[63px] border rounded-lg 
                flex justify-center items-center
              bg-[#141414] border-[#262626] py-[18px] px-[24px]
              max-laptop:w-[160px]
              max-laptop:h-[49px]
              max-laptop:y-[14px]
              max-laptop:x-[20px]
              "
              >
                <p
                  className="text-[18px] leading-[27px] font-[600] text-white text-center
                max-laptop:text-[11px]
                max-laptop:leading-[24px]"
                >
                  Start free trial
                </p>
              </button>
              <button
                className="w-[196px] h-[63px] py-[14px] px-[24px] flex gap-[10px]
               bg-red_bg  rounded-lg items-center justify-center hover:opacity-75
               max-laptop:w-[160px]
              max-laptop:h-[49px]
              max-laptop:y-[14px]
              max-laptop:x-[20px] 
               "
              >
                <p
                  className="text-white font-[600] leading-[27px]
                  max-laptop:text-[11px]
                max-laptop:leading-[24px]"
                >
                  Chose Plan
                </p>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default UserPrice;
