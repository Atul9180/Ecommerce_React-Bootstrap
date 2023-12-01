import Products from "../components/Products/Products";
import React from "react";
import { useRequireAuth } from "../hooks/useRequireAuth";
import { Container } from "react-bootstrap";

const Store = () => {
  useRequireAuth();
  return (
    <Container>
      <Products />
    </Container>
  );
};

export default Store;
