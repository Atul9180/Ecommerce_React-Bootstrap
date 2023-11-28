import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import ContactUs from "../pages/ContactUs";
import ProductDetails from "../components/Products/ProductDetails";
import PageNotFound from "../pages/PageNotFound";
import AuthForm from "../components/Auth/AuthForm";
import ChangePassword from "../components/User/ChangePassword";
import UserProfile from "../components/User/UserProfile";
import { AuthContextData } from "../context/Auth/AuthContext";

const AppRouter = () => {
  const { isLoggedIn } = AuthContextData();
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      {!isLoggedIn && <Route path="/auth" element={<AuthForm />} />}
      {isLoggedIn && (
        <>
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </>
      )}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
