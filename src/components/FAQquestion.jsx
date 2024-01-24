import hide_btn from "../assets/imgs/logos/hide.svg";
import show_btn from "../assets/imgs/logos/show.svg";
import { useState } from "react";

const FAQquestion = () => {
  const questionList = [
    {
      id: "01",
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "02",
      question: "How much does StreamVibe cost?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "03",
      question: "What content is available on StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "04",
      question: "How can I watch StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "05",
      question: "How do I sign up for StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "06",
      question: "What is the StreamVibe free trial?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "07",
      question: "How do I contact StreamVibe customer support?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: "08",
      question: "What are the StreamVibe payment methods?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
  ];

  const [showStates, setShowStates] = useState(
    Array(questionList.length).fill(false)
  );

  const handleToggle = (index) => {
    setShowStates((prevShowStates) => {
      const newShowStates = [...prevShowStates];
      newShowStates[index] = !newShowStates[index];
      return newShowStates;
    });
  };

  return (
    <ul
      className="w-full grid   grid-rows-4 grid-cols-2   gap-y-5 mt-[80px] gap-x-[80px] 
      max-mediumdesktop:gap-x-[60px]
    /*Laptop*/
    max-laptop:mt-[60px]
    max-laptop:gap-x-[40px]
    max-laptop:p-0 
    /mobile/
    max-mobile:grid-cols-1
    "
    >
      {questionList.map((question, index) => (
        <li
          key={question.id}
          className="flex flex-col  justify-center items-center w-full max-w-[720px] p-[34px] h-[auto]
           max-mediumdesktop:w-[580px]
          /*Laptop*/
          max-laptop:p-[24px]
          max-laptop:w-[auto]
          max-laptop:h-[auto]
          /mobile/
          max-mobile:w-full
          max-mobile:p-0
          
          "
        >
          <div
            className="flex flex-row gap-5 w-full justify-center items-center max-mediumdesktop:w-[450px] 
          /mobile/
          max-mobile:w-full
          "
          >
            <div
              className="w-[62px] h-[62px] bg-[#1F1F1F] border border-[#262626] 
            rounded-lg flex justify-center items-center p-5
            max-mediumdesktop:w-[55px]
            max-mediumdesktop:h-[55px]
            max-mediumdesktop:p-[18px]
            max-mediumdesktop:gap-[18px]
            /*Laptop*/
            max-laptop:w-[50px]
            max-laptop:h-[50px]
            max-laptop:p-[16px]
            max-laptop:gap-[16px]
            /mobile/
            max-mobile:w-[42px]
            max-mobile:h-[42px]
            max-mobile:p-[12px]
            "
            >
              <span className="text-[20px] font-[600] text-white ">
                {question.id}
              </span>
            </div>
            <div
              className={`${
                showStates[index]
                  ? "w-full flex gap-[20px] flex-col mt-[34px]   max-mediumdesktop:w-[500px] /*mobile*/ max-mobile:relative max-mobile:top-[28px] "
                  : "w-full flex gap-[20px] flex-col max-mediumdesktop:w-[500px] /*Laptop*/ "
              }`}
            >
              <h3 className="text-[22px] font-medium_weight w-[auto] leading-[33px] text-white /*Laptop*/ max-laptop:text-[20px] max-laptop:leading-[30px] /mobile/ max-mobile:text-[18px] max-mobile:leading-[27px]">
                {question.question}
              </h3>
              {showStates[index] ? (
                <p className="text-[18px] font-small_weight w-[auto] text-[#999999] /*Laptop*/ max-laptop:text-[16px] max-laptop:leading-[24px] /mobile/ max-mobile:relative max-mobile:left-[-58px] max-mobile:text-[14px] max-mobile:leading-[21px]">
                  {question.answer}
                </p>
              ) : (
                ""
              )}
            </div>
            <div
              className={`${
                showStates[index]
                  ? " flex  flex-col mb-[43px] /mobile/ max-mobile:mb-[10px]"
                  : " flex  flex-col "
              }`}
            >
              <button onClick={() => handleToggle(index)}>
                {showStates[index] ? (
                  <img alt="" src={hide_btn} />
                ) : (
                  <img alt="" src={show_btn} />
                )}
              </button>
            </div>
          </div>
          <div className="bg-line w-full h-[1px] mt-[40px]"></div>
        </li>
      ))}
    </ul>
  );
};

export default FAQquestion;
