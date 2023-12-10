import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import PageNotFound from "../pages/PageNotFound";
import AuthForm from "../components/Auth/AuthForm";
import ChangePassword from "../components/User/ChangePassword";
import UserProfile from "../components/User/UserProfile";
import { AuthContextData } from "../context/Auth/AuthContext";
import ReusableSpinner from "../components/UI/ReusableSpinner";
// import About from "../pages/About";
// import Store from "../pages/Store";
// import ProductDetails from "../components/Products/ProductDetails";

const About = lazy(() => import("../pages/About"));
const Store = lazy(() => import("../pages/Store"));
const ProductDetails = lazy(() =>
  import("../components/Products/ProductDetails")
);

const AppRouter = () => {
  const { isLoggedIn } = AuthContextData();

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/store" element={<Store />} /> */}
      {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      {/* <Route path="/about" element={<About />} /> */}

      <Route
        path="/store"
        element={
          <Suspense fallback={<ReusableSpinner />}>
            <Store />
          </Suspense>
        }
      />

      <Route
        path="/product/:id"
        element={
          <Suspense fallback={<ReusableSpinner />}>
            <ProductDetails />
          </Suspense>
        }
      />

      <Route
        path="/about"
        element={
          <Suspense fallback={<ReusableSpinner />}>
            <About />
          </Suspense>
        }
      />
      <Route path="/contact" element={<ContactUs />} />

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
