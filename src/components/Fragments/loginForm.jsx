import Button from "../Elements/Button/index";
import InputForm from "../Elements/Label/index";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        id="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
        id="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
