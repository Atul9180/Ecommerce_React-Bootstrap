import React from "react";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  useRequireAuth();

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <h4>Email: {localStorage.getItem("email")}</h4>
      {/* <ChangePassword /> */}
    </section>
  );
};

export default UserProfile;
