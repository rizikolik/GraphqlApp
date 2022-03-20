import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Card from "../components/card/card";
import CardContainer from "../components/cardContainer/cardContainer";
import SignupForm from "../components/signupForm/signupForm";

interface SignupPropsType {
  setToken: (token: string) => void;
}
const Signup: FC<SignupPropsType> = ({ setToken }) => {
  const isAuthenticated = useAuth()?.authToken;
  const navigate = useNavigate();
  if (isAuthenticated) navigate("/");
  return (
    <CardContainer>
      <Card>
        <SignupForm onSubmit={setToken} />
      </Card>
    </CardContainer>
  );
};

export default Signup;
