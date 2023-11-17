import React from "react";
import CardComponent from "../UI/Card";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  return (
    <Container className="mt-5 mb-4">
      <Row
        xs={1}
        md={2}
        lg={4}
        className="gy-5 g-md-5 justify-content-center mb-3"
      >
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
        <Col className="">
          <CardComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
