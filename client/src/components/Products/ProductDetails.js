import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import { CartState } from "../../context/Context";
import ReusableSpinner from "../UI/ReusableSpinner";
import Rating from "./Rating";
import axios from "axios";
import { useRequireAuth } from "../../hooks/useRequireAuth";

const ProductDetails = () => {
  useRequireAuth();
  const { id } = useParams();
  const productId = Number(id);

  const {
    state: { products, cart },
    dispatch,
  } = CartState();

  const isInCart = cart.some((item) => item.id === productId);

  const productFromContext = products.find((item) => item.id === productId);

  const [product, setProduct] = useState(productFromContext || null);
  const [isLoading, setIsLoading] = useState(!productFromContext);
  const [error, setError] = useState(null);

  const fetchProductData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const fetchedProduct = response.data;

      setProduct(fetchedProduct);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    if (product === null) {
      fetchProductData();
    } else {
      setIsLoading(false);
    }
  }, [fetchProductData, product]);

  if (isLoading) {
    return <ReusableSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product data available</div>;
  }

  const { title, brand, images, category, rating, description, price, stock } =
    product;

  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <Row className="p-5 mt-1 mb-1">
        <Col md={6}>
          <Image src={images[0]} alt={title} fluid />
        </Col>
        <Col md={6}>
          <h2>{title}</h2>
          <h2>{category}</h2>
          <h2>{brand}</h2>
          <br />
          <Rating rating={rating} />
          <p>{description}</p>
          <h4>Price: Rs.{price}</h4>
          <br />

          {isInCart ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: product });
              }}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              disabled={!stock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: product });
              }}
            >
              {!stock ? "Out of Stock" : "Add To Cart"}
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
