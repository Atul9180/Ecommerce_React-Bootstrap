import axios from "axios";
import React, { useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const contactFormData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    console.log(contactFormData);

    try {
      const response = await axios.post(
        "https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app/contactUs.json",
        contactFormData
      );
      console.log("added messages: ", response.data);
      setShowErrorAlert(false);
      setShowSuccessAlert(true);
    } catch (err) {
      console.log("Error in sending message : ", err);
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }

    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      <div className="text-center m-0 p-0 pt-3 ">
        <h5 className="display-2 fw-semibold">CONTACT US</h5>
      </div>

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form
          onSubmit={submitHandler}
          className="w-75 p-3 pt-1 bg-light rounded"
        >
          {showSuccessAlert && (
            <Alert
              variant="success"
              onClose={() => setShowSuccessAlert(false)}
              dismissible
            >
              Message sent successfully!
            </Alert>
          )}
          {showErrorAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowErrorAlert(false)}
              dismissible
            >
              Error sending message. Please try again later.
            </Alert>
          )}

          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label className="fw-bold">Name</Form.Label>
            <Form.Control
              ref={nameRef}
              required
              type="text"
              placeholder="Enter name"
              className="form-control-dark"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              required
              placeholder="Enter email"
              className="form-control-dark"
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPhone">
            <Form.Label className="fw-bold">Phone Number</Form.Label>
            <Form.Control
              ref={phoneRef}
              type="number"
              min={0}
              placeholder="Enter Phone no."
              className="form-control-dark"
              required
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicMessage">
            <Form.Label className="fw-bold">Your Query:</Form.Label>
            <Form.Control
              ref={messageRef}
              as="textarea"
              rows={3}
              className="form-control-dark"
              placeholder="Enter your query"
            />
            <Form.Text className="text-muted m-2">
              We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ContactUs;
