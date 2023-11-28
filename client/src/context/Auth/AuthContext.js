import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (idToken) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  //convert truthly/falsy value to boolean: denotes falsy if empty convert it to boolean
  const userIsLoggedIn = !!token;

  const loginHandler = (idToken) => {
    console.log("Firebase idToken is: ", idToken);
    setToken(idToken);
  };

  const logoutHandler = () => {
    setToken(null);
    console.log("logged out successfully..!");
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
