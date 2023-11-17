import { Button, Card } from "react-bootstrap";
import "./Card.css";

const CardComponent = () => {
  return (
    <>
      <Card className="itemCard">
        <Card.Img
          variant="top"
          src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
        />
        <Card.Body>
          <Card.Title>Acer SB220Q bi</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
