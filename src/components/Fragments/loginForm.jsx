import Button from "../Elements/Button/index";
import InputForm from "../Elements/Label/index";

const LoginForm = () => {
  return (
    <form action="">
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
      <Button classname="bg-blue-600">Login</Button>
    </form>
  );
};

export default LoginForm;
