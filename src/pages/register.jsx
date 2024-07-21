import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayouts from "../components/Layouts/authLayout";

const register = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <RegisterForm />
    </AuthLayouts>
  );
};

export default register;
