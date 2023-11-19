import { Button, Card } from "react-bootstrap";
import "./SingleProduct.css";
import Rating from "./Rating";
import { CartState } from "../../context/Context";

const ProductCard = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="productContainer">
      <Card className="itemCard" key={item.id}>
        <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle style={{ padding: 8, paddingLeft: 0 }}>
            rating: <Rating rating={item.ratings} />
          </Card.Subtitle>
          <Card.Subtitle style={{ padding: 8, paddingLeft: 0 }}>
            {item.fastDelivery ? (
              <span style={{ color: "green" }}>*fast Delivery</span>
            ) : (
              <span style={{ color: "grey" }}>*standard Delivery</span>
            )}
          </Card.Subtitle>
          <Card.Text style={{ fontWeight: "bold" }}>
            Rs. {item?.price?.split(".")[0]}
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
              disabled={!item.inStock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: item });
              }}
            >
              {!item.inStock ? "Out of Stock" : "Add To Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;

//require cart : as we have to control Out Of Stock and Remove From Cart(if some/any exists in cart) Btns
//require dispatch fn. as it will be passed with {type and payload} on btn click
