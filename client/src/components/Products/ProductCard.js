import { Card } from "react-bootstrap";
import React from "react";
import "./ProductCard.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import useCartContext from "../../context/CartContext";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import ProductAddRemoveButton from "../UI/ProductAddRemoveButton";

const ProductCard = ({ item }) => {
  useRequireAuth();

  const { cart } = useCartContext();

  const cartItem = cart.find((cartItem) => cartItem.id === item.id);
  const isInCart = !!cartItem;

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

            {/* Button for  Product  Add & Remove from Cart */}
            <ProductAddRemoveButton
              isInCart={isInCart}
              stock={item.stock}
              product={cartItem || item}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
