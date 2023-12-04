import "./Cart.css";
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Button, Row, Col } from "react-bootstrap";
import useCartContext from "../../context/CartContext";

const Cart = () => {
  const token = localStorage.getItem("idToken");
  const { cart, removeFromCart } = useCartContext();

  const [total, setTotal] = useState();

  useEffect(() => {
    if (token) {
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
      );
    } else {
      setTotal(0);
      localStorage.setItem("cart", []);
    }
  }, [cart, token]);

  return (
    <>
      <Row className="text-center">
        <span className="CartHeading">Cart</span>
        <hr />
      </Row>

      <Row className="CartItemColHeading text-center">
        <Col>Image</Col>
        <Col>Item</Col>
        <Col className="text-end">Quantity</Col>
        <Col className="">Price</Col>
        {/* <Col>Action</Col> */}
        <Col>Delete</Col>
      </Row>

      <div className="cartItemsList">
        {cart?.length === 0 ? (
          <span className="cartItemRow">
            <div className="text-center">Cart Empty....</div>
          </span>
        ) : (
          cart?.map((item) => (
            <Row className="cartItemRow text-center mb-2" key={item.id}>
              <Col className=" text-center">
                <img
                  src={item.image}
                  className="cartItemImg"
                  alt={item.title}
                />
              </Col>
              <Col>{item.title}</Col>
              <Col>[x {item.quantity}]</Col>
              <Col>Rs {item.price * item.quantity}</Col>
              <Col>
                <AiFillDelete
                  className="iconDelete"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                />
              </Col>
            </Row>
          ))
        )}
      </div>

      <div className="text-end mt-4">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
      </div>

      <Button
        type="button"
        disabled={cart.length === 0}
        className="proceedToPayBtn text-end"
      >
        Proceed To Payment
      </Button>
    </>
  );
};

export default Cart;
