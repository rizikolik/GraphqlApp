import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Card from "../components/card/card";
import CardContainer from "../components/cardContainer/cardContainer";
import LoginForm from "../components/loginForm/loginForm";

interface LoginPropsType {
  setToken: (token: string) => void;
}
const Login: FC<LoginPropsType> = ({ setToken }) => {
  const isAuthenticated = useAuth()?.authToken;
  const navigate = useNavigate();
  if (isAuthenticated) navigate("/");

  return (
    <CardContainer>
      <Card>
        <LoginForm onSubmit={setToken} />
      </Card>
      <Card>
        <p>
          Dont have an account ? Signup{" "}
          <a href="/signup" style={{ color: "#1967d2" }}>
            Here
          </a>
        </p>
      </Card>
    </CardContainer>
  );
};

export default Login;
