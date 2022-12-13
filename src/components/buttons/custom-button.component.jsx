const CustomButton = ({ children, handleClick, className, id = null }) => {
  return id == null ? (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  ) : (
    <button className={className} onClick={handleClick} id={id}>
      {children}
    </button>
  );
};

export default CustomButton;
