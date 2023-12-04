import React, { useEffect, createContext } from "react";
import { useState, useContext, useCallback } from "react";
export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (data, expiresIn) => {},
  logout: () => {},
  autoLogOut: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken || null);

  //convert truthly/falsy value to boolean: denotes falsy if empty convert it to boolean
  const userIsLoggedIn = !!token;

  //login--------
  const loginHandler = (data, expiresIn) => {
    console.log({ data });
    const { localId, email } = data;
    localStorage.setItem("idToken", localId);
    localStorage.setItem("email", email);
    localStorage.setItem(
      "expiresIn",
      (new Date().getTime() + expiresIn).toString()
    );
    setToken(localId);
  };

  //logout------
  const logoutHandler = useCallback(() => {
    localStorage.removeItem("email");
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiresIn");
    setToken(null);
  }, []);

  //Calculate remaining time for token expiration---
  const calculateRemainingTime = useCallback(() => {
    const storedExpiration = localStorage.getItem("expiresIn");
    if (storedExpiration) {
      const remainingTime = +storedExpiration - new Date().getTime();
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  }, []);

  useEffect(() => {
    const handlePageRefresh = () => {
      const remaining = calculateRemainingTime();
      if (remaining === 0) {
        logoutHandler();
        alert("Your session has been logged out , Please Re-login.");
      }
    };

    window.addEventListener("beforeunload", handlePageRefresh);
    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
  }, [calculateRemainingTime, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const AuthContextData = () => useContext(AuthContext);
