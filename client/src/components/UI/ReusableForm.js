import React, { useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ReusableForm = ({
  formType,
  formFields,
  endpoint,
  successMessage,
  errorMessage,
}) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const refs = {};

  //   formFields.forEach((field) => {
  //     refs[field.ref] = useRef(null);
  //   });

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = formFields.reduce((acc, field) => {
      acc[field.name] = refs[field.ref].current.value;
      return acc;
    }, {});

    try {
      const response = await axios.post(endpoint, formData);
      if (response.data) {
        console.log("Response data: ", response.data);
        setShowErrorAlert(false);
        setShowSuccessAlert(true);
      } else {
        throw new Error(errorMessage);
      }
    } catch (err) {
      console.log("Error: ", err);
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }

    formFields.forEach((field) => {
      refs[field.ref].current.value = "";
    });
  };

  return (
    <>
      <div className="text-center pt-3 pb-0 mb-0">
        <h5 className="display-1 fw-semibold">{formType}</h5>
      </div>

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Form
          onSubmit={submitHandler}
          className="w-50 w-sm-98 p-3 bg-light rounded shadow"
        >
          {showSuccessAlert && (
            <Alert
              variant="success"
              onClose={() => setShowSuccessAlert(false)}
              dismissible
            >
              {successMessage}
            </Alert>
          )}
          {showErrorAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowErrorAlert(false)}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}

          {formFields.map((field) => (
            <Form.Group
              key={field.ref}
              className="mb-2"
              controlId={`formBasic${field.name}`}
            >
              <Form.Label className="fw-bold">{field.label}</Form.Label>
              <Form.Control
                ref={refs[field.ref]}
                type={field.type}
                placeholder={`Enter ${field.label}`}
                className="form-control-dark"
                required={field.required}
              />
            </Form.Group>
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ReusableForm;
