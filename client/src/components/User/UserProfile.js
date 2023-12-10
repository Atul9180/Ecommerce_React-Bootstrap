import React from "react";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import classes from "./UserProfile.module.css";
import { AuthContextData } from "../../context/Auth/AuthContext";

const UserProfile = () => {
  useRequireAuth();

  const { token } = AuthContextData();
  console.log(token);

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <h4>Email: {localStorage.getItem("email")}</h4>
      <h4>userId: {token || localStorage.getItem("token")}</h4>
    </section>
  );
};

export default UserProfile;
