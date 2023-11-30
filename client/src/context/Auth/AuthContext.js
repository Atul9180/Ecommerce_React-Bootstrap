import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  useCallback,
} from "react";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: (idToken, expiresIn) => {},
  logout: () => {},
  autoLogOut: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialToken || null);

  //convert truthly/falsy value to boolean: denotes falsy if empty convert it to boolean
  const userIsLoggedIn = !!token;

  //login
  const loginHandler = (idToken, expiresIn) => {
    localStorage.setItem("idToken", idToken);
    localStorage.setItem(
      "expiresIn",
      (new Date().getTime() + expiresIn).toString()
    );
    setToken(idToken);
  };

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiresIn");
    setToken(null);
  }, []);

  //getting remaining expire timer for token:
  const calculateRemainingTime = useCallback(() => {
    const storedExpiration = localStorage.getItem("expiresIn");
    if (storedExpiration) {
      const remainingTime = +storedExpiration - new Date().getTime();
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  }, []);

  //auto log out when on TokenExpire:
  const runLogOutTimer = useCallback(() => {
    const remainingTime = calculateRemainingTime();
    if (remainingTime === 0) return;

    const logoutTimer = setTimeout(() => {
      alert("Your session has been logged out due to inactivity");
      logoutHandler();
    }, remainingTime);

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [calculateRemainingTime, logoutHandler]);

  useEffect(() => {
    const logoutTimer = runLogOutTimer();
    return () => {
      if (logoutTimer) logoutTimer();
    };
  }, [runLogOutTimer]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    autoLogOut: runLogOutTimer,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const AuthContextData = () => useContext(AuthContext);
