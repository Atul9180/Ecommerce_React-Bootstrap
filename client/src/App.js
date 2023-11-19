import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousal from "./components/UI/Carousal";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Carousal />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
