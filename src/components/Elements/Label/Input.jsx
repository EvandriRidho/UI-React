const Input = (props) => {
  const { type, placeholder, name, id } = props;
  return (
    <input
      type={type}
      className="text-sm border-2 rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      name={name}
      id={id}
    />
  );
};

export default Input;
