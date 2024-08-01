const Button = (props) => {
  const { children, classname, type = "button", onClick } = props;
  return (
    <button
      className={`h-10 px-6 rounded-md text-white font-semibold ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
