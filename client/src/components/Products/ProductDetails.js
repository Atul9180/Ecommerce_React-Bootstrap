import { useParams } from "react-router-dom";
import { Row, Col, Image, Button, Spinner } from "react-bootstrap";
import Rating from "./Rating";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

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

  if (isLoading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product data available</div>;
  }

  const {
    title,
    brand,
    discountPercentage,
    images,
    thumbnail,
    category,
    rating,
    description,
    price,
    stock,
  } = product;

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col md={6}>
          <Image src={images[0]} alt={title} fluid />
          <Image src={thumbnail} alt={thumbnail} fluid />
        </Col>
        <Col md={6}>
          <h2>{title}</h2>
          <h2>{category}</h2>
          <h2>{brand}</h2>
          <Rating rating={rating} />
          <p>{description}</p>
          <h4>Price: Rs. {price}</h4>
          <span className="color-red">{discountPercentage}</span>
          <p>{stock ? "In Stock" : "Out of Stock"}</p>
          <Button variant="primary" disabled={!stock}>
            {stock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
