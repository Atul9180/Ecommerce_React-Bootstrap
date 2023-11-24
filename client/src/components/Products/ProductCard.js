import { Button, Card } from "react-bootstrap";
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
      <Link to={`/product/${item.id}`} className="itemLink">
        <Card className="itemCard" key={item.id}>
          <Card.Img
            variant="top"
            className="productCardImg"
            src={item.images[0]}
            alt={item.id + ".jpg"}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle style={{ padding: 8, paddingLeft: 0 }}>
              rating: <Rating rating={item.rating} />
            </Card.Subtitle>
            {/* <Card.Subtitle style={{ padding: 8, paddingLeft: 0 }}>
            {item.fastDelivery ? (
              <span style={{ color: "green" }}>*fast Delivery</span>
            ) : (
              <span style={{ color: "grey" }}>*standard Delivery</span>
            )}
          </Card.Subtitle> */}
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
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;

//require cart : as we have to control Out Of Stock and Remove From Cart(if some/any exists in cart) Btns
//require dispatch fn. as it will be passed with {type and payload} on btn click
