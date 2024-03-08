import indiaIcon from "../assets/imgs/support/india.svg";
import RedBtn from "./RedBtn";
const Contractform = () => {
  return (
    <form className="contract-form w-[976px] h-[680px] bg-[#0F0F0F] border border-solid border-[#262626] mt-[200px] flex flex-col px-[20px] py-[40px] rounded-xl items-center gap-[50px]">
      <div className="flex flex-row gap-[40px]">
        <div className="flex flex-col gap-4">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] fonr-[600]">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="price"
            placeholder="Enter first name..."
            className="w-[413px] h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] fonr-[600]">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="price"
            placeholder="Enter last name..."
            className="w-[413px] h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF]"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[40px]">
        <div className="flex flex-col gap-4">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] fonr-[600]">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="price"
            placeholder="Enter your email..."
            className="w-[413px] h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] fonr-[600]">
            Phone number
          </label>
          <div className="flex flex-row gap-4">
            <select
              id="country"
              name="country"
              className="block w-[94px] h-[67px]  border-0 bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF]"
            >
              <option>
                <img alt="" src={indiaIcon} />
              </option>
              <option>
                <img alt="" src={indiaIcon} />
              </option>
              <option>
                <img alt="" src={indiaIcon} />
              </option>
            </select>
            <input
              type="text"
              name="lastName"
              id="price"
              placeholder="Enter your phone number..."
              className="w-[303px] h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] w-[866px]">
        <label className="text-[#FFFFFF] text-[18px] leading-[27px] fonr-[600]">
          Message
        </label>
        <textarea
          className="bg-[#141414] ring-2 ring-inset ring-[#262626]   max-h-[163px] rounded-lg p-[20px]
        focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF]"
        ></textarea>
      </div>
      <div className="flex flex-row gap-[40px] w-[866px] items-center justify-between">
        <div className="checkbox flex gap-3">
          <input
            type="checkbox"
            id="myCheckbox"
            name="myCheckbox"
            className="w-[28px] h-[28px] bg-[#0F0F0F]  border border-[#262626] border-solid
          "
          />
          <p className="text-[18px] leading-[27px] font-[400] text-[#999999]">
            I agree with Terms of Use and Privacy Policy
          </p>
        </div>
        <RedBtn name="Send Message" />
      </div>
    </form>
  );
};
export default Contractform;
