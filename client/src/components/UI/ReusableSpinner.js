import React from "react";
import { Spinner } from "react-bootstrap";

const ReusableSpinner = () => (
  <div className="vh-100 d-flex justify-content-center align-items-center">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default ReusableSpinner;
