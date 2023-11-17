import React from "react";
import "./Cart.css";
import { Row, Col } from "react-bootstrap";
import {
  AiTwotonePlusCircle,
  AiTwotoneMinusCircle,
  AiTwotoneDelete,
} from "react-icons/ai";

const CartItemsList = () => {
  return (
    <>
      <Row className="cartItemRow">
        <Col>item 2</Col>
        <Col>[x5]</Col>
        <Col>Rs.650</Col>
        <Col className="actionIcons plusMinusIcon">
          <AiTwotoneMinusCircle className="iconMinus" />
          <AiTwotonePlusCircle className="iconPlus" />
        </Col>
        <Col className="actionIcons">
          <AiTwotoneDelete className="iconDelete" />
        </Col>
      </Row>

      <Row className="cartItemRow">
        <Col>item 2</Col>
        <Col>[x1]</Col>
        <Col>Rs.650</Col>
        <Col className="actionIcons plusMinusIcon">
          <AiTwotoneMinusCircle className="iconMinus" />
          <AiTwotonePlusCircle className="iconPlus" />
        </Col>
        <Col className="actionIcons">
          <AiTwotoneDelete className="iconDelete" />
        </Col>
      </Row>
    </>
  );
};

export default CartItemsList;
