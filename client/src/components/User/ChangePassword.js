import classes from "./ChangePassword.module.css";
import React, { useRef, useState } from "react";
import { AuthContextData } from "../../context/Auth/AuthContext";
import Message from "../UI/Message";

const ChangePassword = () => {
  const { token } = AuthContextData();
  const newPasswordInputRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordInputRef.current.value;

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }

      setSuccessMsg(
        "Password changed Successfully. Logout and relogin with the changed password"
      );
      setErrorMsg(null);
      newPasswordInputRef.current.value = "";
    } catch (error) {
      setErrorMsg(error.message);
      setSuccessMsg(null);
      console.log("Something went wrong");
    }
  };

  return (
    <>
      {errorMsg && <Message type="red" message={errorMsg} />}
      {successMsg && <Message type="green" message={successMsg} />}

      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input
            ref={newPasswordInputRef}
            minLength="7"
            type="password"
            id="new-password"
            required
          />
        </div>
        <div className={classes.action}>
          <button type="submit">Change Password</button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
