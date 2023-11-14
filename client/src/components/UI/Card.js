import { Button, Card } from "react-bootstrap";
import productsArr from "../../data";

const CardComponent = () => {
  return (
    <>
      console.log(productsArr);
      {productsArr &&
        productsArr.map((product) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>"{product.description}"</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default CardComponent;
