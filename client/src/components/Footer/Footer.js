import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-black mt-auto">
      <Container className="p-3">
        <p className="text-center text-white">
          Thank you for visiting this website. Follow us on social media:
        </p>

        <Row>
          <Col className="text-center">
            <a href="/">Instagram</a>
          </Col>
          <Col className="text-center">
            <a href="/">Facebook</a>
          </Col>
          <Col className="text-center">
            <a href="/">Twitter</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
