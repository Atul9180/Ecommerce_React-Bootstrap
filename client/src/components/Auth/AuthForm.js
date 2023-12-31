import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";
import { AuthContextData } from "../../context/Auth/AuthContext";
import Message from "../UI/Message";
import { addUserToFirestore } from "../../firebase/firebaseFunctions";

const AuthForm = () => {
  const navigate = useNavigate();
  const { login } = AuthContextData();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFocus = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const emptyFormInputCredentials = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const switchAuthModeHandler = () => {
    emptyFormInputCredentials();
    setIsLoginForm((prevState) => !prevState);
  };

  //helper function:
  const handleAuth = async (enteredEmail, enteredPassword, doLogin) => {
    try {
      setIsLoading(true);

      const url = doLogin
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;

      const authData = {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      };

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(authData),
        headers: { "Content-Type": "application/json" },
      });

      setIsLoading(false);

      if (res?.ok) {
        const data = await res.json();
        const { localId, email } = data;

        console.log("firebase response: ", { data });
        setSuccessMsg(doLogin ? "Login Successful" : "Signup Successful");
        setErrorMsg(null);
        emptyFormInputCredentials();

        // Store user details in Firestore upon signup

        const userData = {
          email,
          localId,
        };

        addUserToFirestore(userData); // Store user in Firestore

        //get expireIn time and convert to milisec numbers
        let expirationTime = +120 * 1000;
        login(data, expirationTime);
        navigate("/store", { replace: true });
      } else {
        const data = await res.json();
        setErrorMsg(data.error.message);
        setSuccessMsg(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      setErrorMsg("Fields could not be empty");
      return;
    }
    handleAuth(enteredEmail, enteredPassword, isLoginForm);
  };

  //fill dummy login details
  const fillFormWithCredentials = () => {
    emailRef.current.value = `${process.env.REACT_APP_DUMMY_USER_LOGIN_EMAIL}`;
    passwordRef.current.value = `${process.env.REACT_APP_DUMMY_LOGIN_PASSWORD}`;
  };

  return (
    <>
      {errorMsg && <Message type="red" message={errorMsg} />}
      {successMsg && <Message type="green" message={successMsg} />}
      <section className={classes.auth}>
        <div className="mb-3">
          <h1>{isLoginForm ? "Login" : "Sign Up"}</h1>
        </div>

        <form onSubmit={submitHandler} onFocus={handleFocus}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input ref={passwordRef} type="password" id="password" required />
          </div>

          <div className={classes.actions}>
            {isLoading && (
              <h6 className="text-white fw-bold">Sending request...</h6>
            )}
            {!isLoading && (
              <button type="submit" className="text-white fw-bold">
                {isLoginForm ? "Login" : "Create Account"}
              </button>
            )}

            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLoginForm
                ? "Create new account"
                : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>

      {/* Button to fill form with credentials */}
      {isLoginForm && (
        <div className=" mx-auto">
          <Button
            className="fw-bold"
            variant="primary"
            onClick={fillFormWithCredentials}
          >
            Fill with Test Credentials
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthForm;
