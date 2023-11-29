import React, { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (idToken) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken);

  //convert truthly/falsy value to boolean: denotes falsy if empty convert it to boolean
  const userIsLoggedIn = !!token;

  const loginHandler = (idToken) => {
    setToken(idToken);
    localStorage.setItem("idToken", idToken);
  };

  const logoutHandler = () => {
    localStorage.removeItem("idToken");
    setToken(null);
  };

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
