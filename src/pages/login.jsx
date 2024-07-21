import LoginForm from "../components/Fragments/loginForm";
import AuthLayouts from "../components/Layouts/authLayout";

const login = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <LoginForm />
    </AuthLayouts>
  );
};

export default login;
