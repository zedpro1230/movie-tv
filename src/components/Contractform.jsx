import indiaIcon from "../assets/imgs/support/india.svg";

import RedBtn from "./RedBtn";
import CustomOption from "./CustomOption";

import ReactSelect from "react-select";

const Contractform = () => {
  const options = [
    { value: "option1", label: "Option 1", iconSrc: indiaIcon },
    { value: "option2", label: "Option 2", iconSrc: indiaIcon },
    { value: "option3", label: "Option 3", iconSrc: indiaIcon },
  ];

  return (
    <form
      className="contract-form w-[calc(65%-80px)]  bg-[#0F0F0F] border border-solid border-[#262626]  
    flex flex-col px-[30px] py-[40px] rounded-xl items-center gap-[50px] max-mobile:w-full"
    >
      <div className="flex flex-row gap-[40px] w-full max-mobile:flex-col">
        <div className="flex flex-col gap-4 w-[50%] max-mobile:w-full">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] font-[600] max-laptop:text-[18px] max-laptop:leading-6">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="price"
            placeholder="Enter first name..."
            className="w-full h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 font-[400] text-[#FFFFFF] max-laptop:text-[16px] max-laptop:leading-6"
          />
        </div>
        <div className="flex flex-col gap-4 w-[50%] max-mobile:w-full">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] font-[600] max-laptop:text-[18px] max-laptop:leading-6">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="price"
            placeholder="Enter last name..."
            className="w-full h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 font-[400] text-[#FFFFFF] max-laptop:text-[16px] max-laptop:leading-6"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[40px] w-full max-mobile:flex-col">
        <div className="flex flex-col gap-4 w-[50%] max-mobile:w-full">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] font-[600] max-laptop:text-[18px] max-laptop:leading-6">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="price"
            placeholder="Enter your email..."
            className="w-full h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF] font-[400] max-laptop:text-[16px] max-laptop:leading-6"
          />
        </div>
        <div className="flex flex-col gap-4 w-[50%] max-mobile:w-full">
          <label className="text-[#FFFFFF] text-[18px] leading-[27px] font-[600] max-laptop:text-[18px] max-laptop:leading-6">
            Phone number
          </label>
          <div className="flex flex-row gap-4 w-full">
            {/* <select
              id="country"
              name="country"
              value={selectedOption}
              onChange={handleChange}
              className="block w-[20%] h-[67px]  border-0 bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF] font-[400] max-laptop:text-[16px] max-laptop:leading-6
          "
            >
              {option.map((option, index) => (
                <CustomOption key={index} {...option} />
              ))}
            </select> */}
            <ReactSelect
              options={options}
              formatOptionLabel={CustomOption}
              isSearchable={false}
              defaultValue={options[0]}
              styles={{
                control: (baseStyle, state) => ({
                  ...baseStyle,
                  backgroundColor: "#141414",
                  width: "100%",
                  height: "67px",
                  borderColor: "#262626",
                  margin: "0 0 0 0",
                  padding: "0 0 0 0",
                }),
                option: (baseStyle, state) => ({
                  ...baseStyle,
                  backgroundColor: state.isSelected
                    ? "#141414"
                    : state.isFocused
                    ? "#262626"
                    : "inherit",
                }),
              }}
              // ... other props
            />
            <input
              type="text"
              name="lastName"
              id="price"
              placeholder="Enter your phone number..."
              className="w-[75%] h-[67px] bg-[#141414]  ring-2 ring-inset ring-[#262626]   rounded-lg p-[20px]
          focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF] font-[400] max-laptop:text-[16px] 
          max-laptop:leading-6 max-mobile:w-[80%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] w-full">
        <label className="text-[#FFFFFF] text-[18px] leading-[27px] font-[600] max-laptop:text-[18px] max-laptop:leading-6">
          Message
        </label>
        <textarea
          className="bg-[#141414] ring-2 ring-inset ring-[#262626] h-[163px]  max-h-[163px] rounded-lg p-[20px]
        focus:ring-2 focus:ring-inset focus:ring-[#387ADF] focus:outline-0 text-[#FFFFFF] font-[400] max-laptop:text-[16px] max-laptop:leading-6"
        ></textarea>
      </div>
      <div className="flex flex-row gap-[40px] w-full items-center justify-between max-mobile:flex-col">
        <div className="checkbox flex gap-3">
          <input
            type="checkbox"
            id="myCheckbox"
            name="myCheckbox"
            className="w-[24px] h-[24px] accent-[#262626]  ring-2 ring-inset ring-[#262626] focus:ring-2 focus:ring-inset focus:ring-[#262626] focus:outline-0
          "
          />

          <p className="text-[18px] leading-[27px] font-[400] text-[#999999] max-laptop:text-[16px] max-laptop:leading-6">
            I agree with Terms of Use and Privacy Policy
          </p>
        </div>
        <RedBtn name="Send Message" />
      </div>
    </form>
  );
};
export default Contractform;
