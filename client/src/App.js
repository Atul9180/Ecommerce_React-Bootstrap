import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import { AppRouter } from "./routes/AppRouter.js";
import { RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
// import Carousal from "./components/UI/Carousal.js";
// import Products from "./components/Products/Products.js";

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={AppRouter} />
      <Footer />
    </>
  );
};

export default App;

// (
// <div className="d-flex flex-column min-vh-100">

{
  /* <Header />
      <Carousal />
      <Products />
      <Footer />
    </div> */
}
// );
