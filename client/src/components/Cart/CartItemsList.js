// import React, { useContext } from "react";
import "./Cart.css";
import { Row, Col } from "react-bootstrap";
import {
  AiTwotonePlusCircle,
  AiTwotoneMinusCircle,
  AiTwotoneDelete,
} from "react-icons/ai";
import { CartState } from "../../context/Context";

const CartItemsList = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <>
      {cart?.length < 1 ? (
        <Row className="cartItemRow">
          <col className="text-center">Cart Empty....</col>
        </Row>
      ) : (
        cart?.map((item) => (
          <Row className="cartItemRow" key={item.id}>
            <Col>{item.title}</Col>
            <Col>[x {item.quantity}]</Col>
            <Col>Rs {item.price * item.quantity}</Col>
            <Col className="actionIcons plusMinusIcon">
              <AiTwotoneMinusCircle className="iconMinus" />
              <AiTwotonePlusCircle className="iconPlus" />
            </Col>
            <Col className="actionIcons">
              <AiTwotoneDelete className="iconDelete" />
            </Col>
          </Row>
        ))
      )}
    </>
  );
};

export default CartItemsList;
