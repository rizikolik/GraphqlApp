import { FC } from "react";
import useForm from "../../hooks/useForm";
import { onSubmitForms } from "../../typeUtils/formTypes";
import Button from "../button/button";
import Input from "../input/input";

import "./loginForm-style.scss";

interface LoginFormPropsType {
  onSubmit: onSubmitForms;
}
const LoginForm: FC<LoginFormPropsType> = (props) => {
  const { emailRef, passwordRef, handleLogin } = useForm();
  const { onSubmit } = props;
  return (
    <form className="loginForm">
      <label className="loginForm__label"> Email </label>
      <Input name="email" referance={emailRef} />

      <label className="loginForm__label"> Password </label>
      <Input name="password" referance={passwordRef} />

      <div className="loginForm__buttonWrapper">
        <Button label="Login" onClick={() => handleLogin(onSubmit)} />
      </div>
    </form>
  );
};

export default LoginForm;
