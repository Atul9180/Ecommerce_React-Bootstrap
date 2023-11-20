import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import { AppRouter } from "./routes/AppRouter.js";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.js";
// import DummyNav from "./pages/DummyNav.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <>
      {/* <DummyNav /> */}
      <Header />
      <RouterProvider router={AppRouter} />
      <Footer />
    </>
  );
};

export default App;
