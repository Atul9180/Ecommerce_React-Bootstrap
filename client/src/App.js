import React from "react";
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
