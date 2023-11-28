import classes from "./ChangePassword.module.css";
import React, { useRef } from "react";
import { AuthContextData } from "../../context/Auth/AuthContext";

const ChangePassword = () => {
  const { token } = AuthContextData();
  const newPasswordInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventddefault();
    const enteredPassword = newPasswordInputRef.current.value;
    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(async (res) => {
      await res?.json().then((data) => {
        console.log("changed Password: ", data);
      });
    });
  };

  return (
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
  );
};

export default ChangePassword;
