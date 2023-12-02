import { Button } from "react-bootstrap";
import { CartState } from "../../context/Context";

const ProductAddRemoveButton = ({ isInCart, stock, product }) => {
  const { dispatch } = CartState();

  const handleCartAction = () => {
    if (isInCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    } else {
      if (stock) {
        dispatch({ type: "ADD_TO_CART", payload: product });
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
