import "./About.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import signatureImg from "../assets/signature.png";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";

const About = () => {
  return (
    <Container className="about-section">
      <Row className="align-items-center">
        <Col lg={6} md={12}>
          <div className="about-content mb-md-3 mb-sm-3">
            <h2>About Our Store</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="signature">
              <Image src={signatureImg} alt="image" />
            </div>
          </div>
        </Col>

        <Col
          lg={6}
          md={12}
          className="mt-md-3 mt-sm-3  order-first order-md-last"
        >
          <div className="about-image d-none d-sm-block">
            <Image
              src={aboutImg1}
              className="about-img1 d-block  "
              alt="image"
            />
            <Image
              src={aboutImg2}
              className="about-img2 d-block "
              alt="image"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
