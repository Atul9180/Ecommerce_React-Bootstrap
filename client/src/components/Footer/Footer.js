import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiFacebook, SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer mt-auto" style={{ background: "slategray" }}>
      <Container className="p-2">
        <p className="text-center text-white mb-1">
          <span style={{ fontWeight: "bold" }}>
            Thank you for visiting this website. Follow us on social media:
          </span>
        </p>

        <Row>
          <Col className="text-center">
            <a href="/">
              <AiFillInstagram fill="white" />
            </a>
          </Col>
          <Col className="text-center">
            <a href="/">
              <SiFacebook fill="white" />
            </a>
          </Col>
          <Col className="text-center">
            <a href="/">
              <SiTwitter fill="white" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
