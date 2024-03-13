import Header from "../Header";
import UserPrice from "../UserPrice";
import Footer2 from "../Footer2";
import RedBtn from "../RedBtn";
import { useState } from "react";
const Subscriptions = () => {
  const [tabPrice, SetTabPrice] = useState("Standar");
  const Plan = ["Basic", "Standar", "Premium"];
  const handleTab = (i) => {
    SetTabPrice(i);
  };
  return (
    <div className="home font-manrope  bg-app_bg w-full h-[auto] pt-[200px]  flex flex-col gap-[80px]">
      <Header />
      <section className="pricing max-w-[1597px] w-[83%] mx-[auto]">
        <UserPrice />
      </section>
      <section className="features max-w-[1596px] w-[83%] mx-[auto] ">
        <div className="features-header">
          <h2 className="text-[#FFFFFF] text-[38px] leading-[72px] font-[700] w-[auto] max-mobile:text-[24px] max-mobile:leading-9">
            Compare our plans and find the right one for you
          </h2>
          <p className="text-[18px] leading-[27px] font-[400] text-[#999999] max-mobile:text-[14px] max-mobile:leading-5 ">
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.
          </p>
        </div>
        <table className="w-full   border-separate border-spacing-0  mt-[80px]  table-fixed  max-mobile:hidden">
          <thead className="">
            <tr className="bg-[#0F0F0F] text-[#FFFFFF] text-[20px] leading-[30px] font-[600]  h-fit ">
              <th className="h-[90px] border-[#262626] border  rounded-tl-xl">
                Features
              </th>
              <th className="h-[90px] border-[#262626] border">Basic</th>
              <th className="h-[90px] border-[#262626] border">Standar</th>
              <th className="h-[90px] border-[#262626] border rounded-tr-xl">
                premium
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className="h-fit border-[#262626] border p-[20px] w-[339px]  ">
                Price
              </td>
              <td className="h-fit border-[#262626] border p-[20px] w-[339px]">
                $9.99/Month
              </td>
              <td className="h-fit border-[#262626] border p-[20px] w-[339px]">
                $12.99/Month
              </td>
              <td className="h-fit border-[#262626] border p-[20px] w-[339px] ">
                $14.99/Month
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Content
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Access to a wide selection of movies and shows, including some
                new releases.
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Device
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Watch on one device simultaneously
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Watch on Two device simultaneously
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Watch on Four device simultaneously
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Free trial
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                7days
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                7days
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                7days
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Device
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Watch on one device simultaneously
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Watch on Two device simultaneously
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Watch on Four device simultaneously
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Cancel AnyTime
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                HDR
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                No
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Dolby Asmos
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                No
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Ad - Free
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                No
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Offline Viewing
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                No
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes, for select titles
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes, for all titles
              </td>
            </tr>
            <tr className="text-[#999999] text-[18px] leading-[27px] font-[500]">
              <td className=" border-[#262626] border p-[20px] w-[339px] rounded-bl-xl">
                Family sharing
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                No
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px]">
                Yes, up to 5 family members
              </td>
              <td className=" border-[#262626] border p-[20px] w-[339px] rounded-br-xl">
                Yes, up to 6 family members
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </section>
      <section className="mobile-view-plan max-w-[1596px] w-[83%] mx-[auto] hidden max-mobile:flex max-mobile:flex-col">
        <div
          className="price-tabs w-full  bg-[#0F0F0F] rounded-[10px] 
        border border-[#262626] boder-solid p-[10px] flex flex-row justify-around items-center
        mb-[20px]
        "
        >
          {Plan.map((i, index) => (
            <div
              key={index}
              className={`w-[50%] h-[60px] px-6 py-[14px] flex justify-center  items-center rounded-[10px] cursor-pointer  ${
                tabPrice === i ? "bg-[#1F1F1F]" : ""
              }`}
              onClick={() => handleTab(i)}
            >
              <p
                className={`text-[18px] font-medium_weight leading-[27px] max-laptop:text-[14px] max-laptop:leading-[21px] ${
                  tabPrice === i ? "text-white" : "text-[#999999]"
                }`}
              >
                {i}
              </p>
            </div>
          ))}
        </div>
        <div
          className="w-full bg-[#0F0F0F] rounded-[10px] 
        border border-[#262626] boder-solid p-[24px] flex flex-col gap-[20px] "
        >
          <div className="flex flex-row  justify-start gap-[100px]">
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                Price
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                {tabPrice === "Basic"
                  ? "9.99$/month"
                  : tabPrice === "Standar"
                  ? "12.99$/month"
                  : "14.99$/month"}
              </span>
            </div>
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                Free Trial
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                7days
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <span className="text-[14px] font-[500] leading-5 text-[#999999]">
              Content
            </span>
            <p className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
              {tabPrice === "Basic"
                ? "Access to a wide selection of movies and shows, including some new releases."
                : tabPrice === "Standar"
                ? "Access to a wider selection of movies and shows, including most new releases and exclusive content"
                : "Access to a widest selection of movies and shows, including all new releases and Offline Viewing"}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-[500] leading-5 text-[#999999]">
              Device
            </span>
            <p className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
              {tabPrice === "Basic"
                ? "Watch on one device simultaneously"
                : tabPrice === "Standar"
                ? "Watch on two device simultaneously"
                : "Watch on four device simultaneously"}
            </p>
          </div>
          <div className="flex flex-row  justify-start gap-[100px]">
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                Cancel Anytime
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                Yes
              </span>
            </div>
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                HDR
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                {tabPrice === "Basic"
                  ? "No"
                  : tabPrice === "Standar"
                  ? "Yes"
                  : "Yes"}
              </span>
            </div>
          </div>
          <div className="flex flex-row  justify-start gap-[100px]">
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                DolBy Atmos
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                {tabPrice === "Basic"
                  ? "No"
                  : tabPrice === "Standar"
                  ? "Yes"
                  : "Yes"}
              </span>
            </div>
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                Ad - Free
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                {tabPrice === "Basic"
                  ? "No"
                  : tabPrice === "Standar"
                  ? "Yes"
                  : "Yes"}
              </span>
            </div>
          </div>
          <div className="flex flex-row  justify-start gap-[100px]">
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                Offline Viewing
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                {tabPrice === "Basic"
                  ? "No"
                  : tabPrice === "Standar"
                  ? "Yes, for selected titles"
                  : "Yes, for all titles"}
              </span>
            </div>
            <div className="flex flex-col w-[50%]">
              <span className="text-[14px] font-[500] leading-5 text-[#999999]">
                Family Sharing
              </span>
              <span className="text-[14px] font-[500] leading-5 text-[#F1F1F3]">
                {tabPrice === "Basic"
                  ? "No"
                  : tabPrice === "Standar"
                  ? "Yes, up to 5 family members."
                  : "Yes, up to 6 family members."}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="CTA  max-w-[1596px] w-[83%] mx-[auto] ">
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
export default Subscriptions;
