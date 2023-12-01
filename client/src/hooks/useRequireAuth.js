import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextData } from "../context/Auth/AuthContext";

export const useRequireAuth = () => {
  const { isLoggedIn, token } = AuthContextData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !isLoggedIn) {
      navigate("/auth");
    }
  }, [navigate, token, isLoggedIn]);
};
