import React from "react";
import { Button } from "react-bootstrap";
import useCartContext from "../../context/CartContext";

const ProductAddRemoveButton = ({ isInCart, stock, product }) => {
  const { addToCart, removeFromCart } = useCartContext();

  const handleCartAction = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      if (stock) {
        addToCart(product);
      }
    }
  };

  return (
    <Button
      variant={isInCart ? "danger" : "primary"}
      disabled={!stock && !isInCart}
      onClick={handleCartAction}
    >
      {isInCart ? "Remove From Cart" : stock ? "Add To Cart" : "Out of Stock"}
    </Button>
  );
};

export default ProductAddRemoveButton;
