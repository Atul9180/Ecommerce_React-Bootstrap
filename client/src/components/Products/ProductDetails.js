import { useParams } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import ReusableSpinner from "../UI/ReusableSpinner";
import Rating from "./Rating";
import axios from "axios";
import React, { useCallback, useEffect, useState, useMemo } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductData = useCallback(async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  const renderLoader = useMemo(() => <ReusableSpinner />, []);

  if (isLoading) {
    return renderLoader;
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
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
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
          <Button variant="primary" disabled={!stock}>
            {stock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
