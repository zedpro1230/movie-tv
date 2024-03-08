import Header from "../Header";
import UserPrice from "../UserPrice";
import Footer2 from "../Footer2";
import RedBtn from "../RedBtn";
const Subscriptions = () => {
  return (
    <div className="home font-manrope  bg-app_bg w-full h-[auto] pt-[200px] px-[164px] flex flex-col gap-[80px]">
      <Header />
      <UserPrice />
      <section className="features">
        <div className="features-header">
          <h2 className="text-[#FFFFFF] text-[38px] leading-[72px] font-[700] w-[auto]">
            Compare our plans and find the right one for you
          </h2>
          <p className="text-[18px] leading-[27px] font-[400] text-[#999999]">
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.
          </p>
        </div>
        <table className="w-full  border-collapse  border-[#262626] border p-[1px] rounded-xl mt-[80px]  table-fixed ">
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
              <td className="h-fit border-[#262626] border p-[20px] w-[339px]">
                Price
              </td>
              <td className="h-fit border-[#262626] border p-[20px] w-[339px]">
                $9.99/Month
              </td>
              <td className="h-fit border-[#262626] border p-[20px] w-[339px]">
                $12.99/Month
              </td>
              <td className="h-fit border-[#262626] border p-[20px] w-[339px]">
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
        </table>
      </section>
      <section className="CTA w-full  max-laptop:px-[80px] max-mobile:px-4">
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
