import { Button, Card } from "react-bootstrap";
import "./Card.css";
import { useContext } from "react";
import { CartContext } from "../../context/DataContext";

const CardComponent = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      {products.map((item) => {
        return (
          <Card className="itemCard" key={item.id}>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(item)}>
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default CardComponent;
