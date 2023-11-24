import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Store from "../pages/Store";
import ContactUs from "../pages/ContactUs";
import ProductDetails from "../components/Products/ProductDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRouter;
