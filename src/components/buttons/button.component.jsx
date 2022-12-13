const Button = ({ value = 0, handleClick = (value) => {} }) => {
  return <button onClick={() => handleClick(value)}>{value}</button>;
};

export default Button;
