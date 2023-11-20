import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import AppRouter from "./routes/AppRouter.js";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
};

export default App;
