import { useEffect, useRef } from "react";
import { login } from "../../services/Auth.service";
import Button from "../Elements/Button/index";
import InputForm from "../Elements/Label/index";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data);
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="John Doe"
        name="username"
        id="username"
        ref={usernameRef}
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
