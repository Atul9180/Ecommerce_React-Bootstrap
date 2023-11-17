import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousal from "./components/UI/Carousal";
import Products from "./components/Products/Products";
import { CartContextProvider } from "./context/DataContext";

const App = () => {
  return (
    <CartContextProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Carousal />
        <Products />
        <Footer />
      </div>
    </CartContextProvider>
  );
};

export default App;
