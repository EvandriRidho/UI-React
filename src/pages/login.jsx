import { Link } from "react-router-dom";
import LoginForm from "../components/Fragments/loginForm";
import AuthLayouts from "../components/Layouts/authLayout";

const login = () => {
  return (
    <AuthLayouts title="Login">
      <LoginForm />
      <p className="text-sm text-center my-5">
        Dont have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default login;
