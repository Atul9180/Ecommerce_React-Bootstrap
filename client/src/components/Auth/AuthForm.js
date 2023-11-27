import React, { useState, useRef } from "react";
import classes from "./AuthForm.module.css";
import { AuthContextData } from "../../context/Auth/AuthContext";
// import axios from "axios";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleFocus = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const enteredEmail = emailRef.current.value;
      const enteredPassword = passwordRef.current.value;
      if (enteredEmail !== "" || enteredPassword !== "") {
        if (isLogin) {
          //login logic:
          await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArg2J0QZmt9RLAbMVBMUIjAEZeDVZjsN8",
            {
              method: "POST",
              body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
              }),
              headers: { "Content-Type": "application/json" },
            }
          ).then((res) => {
            if (res.ok) {
              return res.json().then((data) => {
                console.log("login success response: ", data);
                AuthContextData.login(data.idToken);
                setSuccessMsg("Login Successfull");
                setErrorMsg(null);
                emailRef.current.value = "";
                passwordRef.current.value = "";
                // return data;
              });
            } else {
              return res.json().then((data) => {
                console.log("login error response: ", data);
                setErrorMsg(data.error.message);
                setSuccessMsg(null);
              });
            }
          });
        } else {
          //signup logic:
          await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArg2J0QZmt9RLAbMVBMUIjAEZeDVZjsN8",
            {
              method: "POST",
              body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
              }),
              headers: { "Content-Type": "application/json" },
            }
          ).then((res) => {
            if (res.ok) {
              return res.json().then((data) => {
                console.log("Singup success response: ", data);
                setSuccessMsg("Signup Successfull");
                setErrorMsg(null);
                emailRef.current.value = "";
                passwordRef.current.value = "";
                // return data;
              });
            } else {
              return res.json().then((data) => {
                console.log("Singup error response: ", data);
                setErrorMsg(data.error.message);
                setSuccessMsg(null);
              });
            }
          });
        }
      } else {
        throw new Error("Fields could not be empty");
      }
    } catch (err) {
      //   console.log(err);
    }
  };

  return (
    <>
      <section className={classes.auth}>
        {errorMsg && (
          <div className="bg-white py-0.7 mb-4">
            <span className=" fw-bold">{errorMsg}</span>
          </div>
        )}
        {successMsg && (
          <div className="bg-white bg-green py-0.7 mb-4">
            <span className="bg-green fw-bold">{successMsg}</span>
          </div>
        )}

        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

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
            <button type="submit" className="text-white fw-bold">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
