const CustomOption = ({ value, label, iconSrc }) => {
  return (
    value && ( // Check if option is not null
      <div className="custom-option">
        <img src={iconSrc} alt={label} />
      </div>
    )
  );
};
export default CustomOption;
