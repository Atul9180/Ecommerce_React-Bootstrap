import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import ContactUs from "../pages/ContactUs";
import ProductDetails from "../components/Products/ProductDetails";
import PageNotFound from "../pages/PageNotFound";
import AuthForm from "../components/Auth/AuthForm";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";

// const PublicRoute=({path,element})=>{
//   const {token}=AuthContextData;
//   return token?(<Navigate to="/" />):(<Route path={path} element={element} />)}

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
