import Button from "../Elements/Button";
import InputForm from "../Elements/Label";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="fullname"
        placeholder="Enter your fullname"
        name="fullname"
        id="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Confirm Your Password"
        name="confirm password"
        id="confirm password"
      />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default RegisterForm;
