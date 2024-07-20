const Button = (props) => {
  const { children, classname } = props;
  return (
    <button
      className={`w-full h-10 px-6 rounded-md text-white font-semibold ${classname}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
