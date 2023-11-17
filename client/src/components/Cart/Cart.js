import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import { Modal, Button, Row, Col } from "react-bootstrap";
import CartItemsList from "./CartItemsList";

const Cart = ({ handleCartButtonToggle }) => {
  return ReactDOM.createPortal(
    <Modal
      show={handleCartButtonToggle}
      onHide={handleCartButtonToggle}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="tet-center">Cart </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pb-0 text-center">
        <div className="CartItemColHeading">
          <Row>
            <Col>Item</Col>
            <Col>Quantity</Col>
            <Col>Price</Col>
            <Col>Action</Col>
            <Col>Delete</Col>
          </Row>
        </div>
        <div className="cartItemsList">
          <CartItemsList />
        </div>

        <div className="text-end mt-4">
          <h5>Total Price: Rs. 1307 </h5>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="CartCloseBtn"
          variant="secondary"
          onClick={handleCartButtonToggle}
        >
          Close
        </Button>
        <Button className="proceedToPayBtn" variant="success">
          Proceed To Payment
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById("cart-root")
  );
};

export default Cart;
