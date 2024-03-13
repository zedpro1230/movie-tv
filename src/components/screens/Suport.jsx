import Header from "../Header";
import subbg from "../../assets/imgs/support/Sub.png";
import Contractform from "../Contractform";
import FAQquestion from "../FAQquestion";
import Footer2 from "../Footer2";
import RedBtn from "../RedBtn";
const Suport = () => {
  return (
    <div className="home font-manrope  bg-app_bg w-full h-[auto] relative flex flex-col gap-[80px]">
      <Header />
      <section className="contract-form max-w-[1596px] w-[83%] mx-[auto] flex flex-row gap-[20px] mt-[200px] justify-between max-mobile:flex-col">
        <div className="contract-hero w-[35%]  flex flex-col  gap-5 max-mobile:w-full">
          <h1 className="hero-header text-[38px] font-[700] text-[#FFFFFF] leading-[57px] w-[70%] max-laptop:text-[38px] max-laptop:leading-[57px]">
            Welcome to our suport page!
          </h1>
          <p className="text-[#999999] text-[16px] leading-[24px] w-full max-mobile:text-[18px] max-mobile:leading-6">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <div className="border-[6px] w-full  overflow-hidden rounded-md border-[#262626] border-solid flex justify-center items-center  max-mobile:w-fit">
            <img alt="" src={subbg} className=""></img>
          </div>
        </div>
        <Contractform />
      </section>
      <section className=" max-w-[1596px] w-[83%] mx-[auto] flex flex-col ">
        <div className="FAQ-header flex  justify-between w-full items-center/mobile/ max-mobile:flex-col max-mobile:gap-5  max-mobile:items-start">
          <div className=" flex flex-col">
            <h2
              className=" font-[700] text-font_38 leading-[57px] text-white w-fit
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
        </div>
        <FAQquestion />
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
      <Footer2 />
    </div>
  );
};
export default Suport;
