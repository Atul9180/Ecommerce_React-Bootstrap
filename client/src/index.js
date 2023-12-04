import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataContextProvider } from "./context/Context";
import { AuthContextProvider } from "./context/Auth/AuthContext.js";
import { CartProvider } from "./context/CartContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
