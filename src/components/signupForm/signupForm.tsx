import { FC } from "react";
import useForm from "../../hooks/useForm";
import { onSubmitForms } from "../../typeUtils/formTypes";
import Button from "../button/button";
import Input from "../input/input";

import "./signupForm-style.scss";

interface SignupFormPropsType {
  onSubmit: onSubmitForms;
}
const SignupForm: FC<SignupFormPropsType> = (props) => {
  const { firstNameRef, lastNameRef, emailRef, passwordRef, handleSignup } =
    useForm();
  const { onSubmit } = props;
  return (
    <form className="signupForm">
      <label className="signupForm__label">FirstName </label>
      <Input
        name="firstName"
        placeHolder="Enter your First Name"
        referance={firstNameRef}
      />

      <label className="signupForm__label">LastName </label>
      <Input
        name="lastName"
        placeHolder="Enter your Last Name"
        referance={lastNameRef}
      />

      <label className="signupForm__label">Email </label>
      <Input
        name="email"
        placeHolder="Enter email address"
        referance={emailRef}
      />

      <label className="signupForm__label">Password </label>
      <Input
        name="password"
        placeHolder="Enter your pasword"
        referance={passwordRef}
      />

      <div className="form__buttonWrapper">
        <Button label="Signup" onClick={() => handleSignup(onSubmit)} />
      </div>
    </form>
  );
};

export default SignupForm;
