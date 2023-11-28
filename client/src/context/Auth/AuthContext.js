import React, { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (idToken) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [token, setToken] = useState(null);

  //convert truthly/falsy value to boolean: denotes falsy if empty convert it to boolean
  const userIsLoggedIn = !!token;

  const loginHandler = (idToken) => {
    console.log("Firebase idToken is: ", idToken);
    setToken(idToken);
  };

  const logoutHandler = () => {
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
