import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (idToken) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken || null);
  const [remainingTokenExpireTime, setRemainingTokenExpireTime] = useState(0);

  // convert truthly/falsy value to boolean: denotes falsy if empty convert it to boolean
  const userIsLoggedIn = !!token;

  const loginHandler = (idToken) => {
    setToken(idToken);
    localStorage.setItem("idToken", idToken);

    const expirationTime = new Date(new Date().getTime() + 60 * 1000); // 1 minute expiry
    setRemainingTokenExpireTime(
      expirationTime.getTime() - new Date().getTime()
    );
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
    remainingTokenExpireTime,
  };

  useEffect(() => {
    if (remainingTokenExpireTime === 0) {
      logoutHandler();
      alert("Your session has expired. Please log in again.");
    }
  }, [remainingTokenExpireTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTokenExpireTime > 0) {
        setRemainingTokenExpireTime(remainingTokenExpireTime - 3600);
      }
    }, 3600);

    return () => clearInterval(interval);
  }, [remainingTokenExpireTime]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const AuthContextData = () => useContext(AuthContext);

// import React, { createContext, useState, useContext } from "react";

// export const AuthContext = createContext({
//   token: null,
//   isLoggedIn: false,
//   login: (idToken) => {},
//   logout: () => {},
// });

// export const AuthContextProvider = ({ children }) => {
//   const initialToken = localStorage.getItem("idToken");
//   const [token, setToken] = useState(initialToken || null);

//   //convert truthly/falsy value to boolean: denotes falsy if empty convert it to boolean
//   const userIsLoggedIn = !!token;

//   const loginHandler = (idToken) => {
//     setToken(idToken);
//     localStorage.setItem("idToken", idToken);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("idToken");
//     setToken(null);
//   };

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//   );
// };

// export const AuthContextData = () => useContext(AuthContext);
