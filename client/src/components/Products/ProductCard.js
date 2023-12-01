import { Button, Card } from "react-bootstrap";
import React from "react";
import "./ProductCard.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";

import { CartState } from "../../context/Context";

const ProductCard = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="productContainer">
      <Card
        className={`itemCard d-flex align-items-center ${
          window.innerWidth < 500 ? "flex-row" : "flex-column"
        }`}
        key={item.id}
      >
        <Link to={`/product/${item.id}`} className="imageLink">
          <Card.Img
            variant="top"
            className="productCardImg"
            src={item.images[0]}
            alt={item.id + ".jpg"}
          />
        </Link>
        <Card.Body
          className={`d-flex justify-content-between align-items-center w-100 ${
            window.innerWidth < 576 ? "flex-row" : "flex-column"
          }`}
        >
          <div>
            <Link to={`/product/${item.id}`}>
              <Card.Title style={{ color: "black", textDecoration: "none" }}>
                {item.title}
              </Card.Title>
            </Link>

            <Card.Subtitle style={{ padding: 8, paddingLeft: 0 }}>
              rating: <Rating rating={item.rating} />
            </Card.Subtitle>
          </div>
          <div className="text-center">
            <Card.Text style={{ fontWeight: "bold" }}>
              Rs. {item?.price}
            </Card.Text>

            {cart?.some((p) => p.id === item.id) ? (
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: item });
                }}
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                disabled={!item.stock}
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: item });
                }}
              >
                {!item.stock ? "Out of Stock" : "Add To Cart"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
