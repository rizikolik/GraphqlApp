import { useRef } from "react";
import { loginResponse } from "../typeUtils/api";
import { RequestTypes } from "../typeUtils/enums";
import { onSubmitForms } from "../typeUtils/formTypes";
import { FETCH_URL } from "../utils/contants";
import customFetch from "../utils/customFetch";

const useForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  // const loginHeaders = {
  //   Authorization: `Bearer ${token}`,
  // };

  const handleLogin = (cb: onSubmitForms) => {
    const mail = emailRef?.current?.value;
    const pass = passwordRef?.current?.value;
    customFetch(`${FETCH_URL}/api/login`, {
      method: RequestTypes.POST,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail, password: pass }),
    }).then((result: loginResponse) => cb(result.token));
  };
  const handleSignup = (cb: onSubmitForms) => {
    const mail = emailRef?.current?.value;
    const pass = passwordRef?.current?.value;
    const first = firstNameRef?.current?.value;
    const last = lastNameRef?.current?.value;
    customFetch(`${FETCH_URL}/api/signup`, {
      method: RequestTypes.POST,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: first,
        lastName: last,
        email: mail,
        password: pass,
      }),
    }).then((result: loginResponse) => cb(result.token));
  };

  return {
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    handleLogin,
    handleSignup,
  };
};
export default useForm;
