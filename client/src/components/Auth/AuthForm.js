import React, { useState, useRef } from "react";
import classes from "./AuthForm.module.css";
import { AuthContextData } from "../../context/Auth/AuthContext";
<<<<<<< HEAD

const AuthForm = () => {
  const { login } = AuthContextData();

  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
=======
// import axios from "axios";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
>>>>>>> 255ecab1e337bfa23b87d44bcd757e07496c58d3
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const emailRef = useRef();
  const passwordRef = useRef();

<<<<<<< HEAD
=======
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

>>>>>>> 255ecab1e337bfa23b87d44bcd757e07496c58d3
  const handleFocus = () => {
    setErrorMsg(null);
    setSuccessMsg(null);
  };

<<<<<<< HEAD
  const emptyFormCredentials = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const switchAuthModeHandler = () => {
    emptyFormCredentials();
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

      if (res.ok) {
        const data = await res.json();
        setSuccessMsg(doLogin ? "Login Successful" : "Signup Successful");
        setErrorMsg(null);
        emptyFormCredentials();
        await login(data.idToken);
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

  const renderMessages = () => {
    return (
      <>
        {errorMsg && (
          <div className="bg-white py-0.7 mb-4">
            <span className="text-red fw-bold">{errorMsg}</span>
          </div>
        )}
        {successMsg && (
          <div className="bg-white bg-green py-0.7 mb-4">
            <span className="text-green fw-bold">{successMsg}</span>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <section className={classes.auth}>
        {renderMessages()}

        <div className="mb-3">
          <h1>{isLoginForm ? "Login" : "Sign Up"}</h1>
        </div>
=======
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
>>>>>>> 255ecab1e337bfa23b87d44bcd757e07496c58d3

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
<<<<<<< HEAD
            {isLoading && (
              <h6 className="text-white fw-bold">Sending request...</h6>
            )}
            {!isLoading && (
              <button type="submit" className="text-white fw-bold">
                {isLoginForm ? "Login" : "Create Account"}
              </button>
            )}

=======
            <button type="submit" className="text-white fw-bold">
              {isLogin ? "Login" : "Create Account"}
            </button>
>>>>>>> 255ecab1e337bfa23b87d44bcd757e07496c58d3
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
<<<<<<< HEAD
              {isLoginForm
                ? "Create new account"
                : "Login with existing account"}
=======
              {isLogin ? "Create new account" : "Login with existing account"}
>>>>>>> 255ecab1e337bfa23b87d44bcd757e07496c58d3
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
