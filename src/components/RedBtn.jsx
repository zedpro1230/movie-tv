const RedBtn = (props) => {
  return (
    <button
      className="w-fit py-[14px] px-[27px] flex gap-[10px]
     bg-red_bg h-[63px] rounded-lg items-center justify-center hover:opacity-75 
     /*Laptop*/
     max-laptop:px-[20px]
     max-laptop:py-[14px]
     max-laptop:h-[49px]

     "
    >
      <p
        className="text-white font-[600] leading-[27px] 
      /*Laptop screen*/ 
      max-laptop:text-[14px] 
      max-laptop:leading-[21px]"
      >
        {props.name}
      </p>
    </button>
  );
};
export default RedBtn;
