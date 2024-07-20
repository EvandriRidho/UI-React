import { Link } from "react-router-dom";
import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayouts from "../components/Layouts/authLayout";

const register = () => {
  return (
    <AuthLayouts title="Register">
      <RegisterForm />
      <p className="text-sm text-center my-5">
        have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default register;
