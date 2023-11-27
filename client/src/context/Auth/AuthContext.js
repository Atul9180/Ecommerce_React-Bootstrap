import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
  token: null,
  login: (idToken) => {},
  logout: () => {},
  refreshToken: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const loginHandler = (idToken) => {
    console.log("Firebase idToken is: ", idToken);
    setToken(idToken);
    console.log("login token set is: ", token);
    //if req. store in http cookie or localstorage or sessionstorage
  };

  const logoutHandler = () => {
    setToken(null);
    console.log("logged out successfully..!");
    // if req. logic to clear token from storage
  };

  const refreshTokenHandler = () => {
    // Logic to refresh token
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        login: loginHandler,
        logout: logoutHandler,
        refreshToken: refreshTokenHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContextData = () => useContext(AuthContext);
