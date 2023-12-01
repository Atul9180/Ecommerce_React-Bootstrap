import ProductCard from "./ProductCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReusableSpinner from "../UI/ReusableSpinner";
import { CartState } from "../../context/Context";
import React, { useEffect, useMemo, useCallback } from "react";

const Products = () => {
  const {
    state: { products, isLoading, error, retryIntervalId },
    cancelRetry,
    dispatch,
  } = CartState();

  const retryFetch = useCallback(() => {
    dispatch({ type: "SET_ERROR", payload: null });
    dispatch({ type: "SET_LOADING", payload: true });
  }, [dispatch]);

  useEffect(() => {
    return () => clearInterval(retryIntervalId);
  }, [retryIntervalId]);

  const renderLoader = useMemo(() => <ReusableSpinner />, []);

  const renderError = useMemo(
    () => (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div>
          <p>{error}</p>
          {error && (
            <Button variant="danger" onClick={cancelRetry}>
              Cancel Retry
            </Button>
          )}
          <Button variant="primary" onClick={retryFetch}>
            Retry
          </Button>
        </div>
      </div>
    ),
    [error, cancelRetry, retryFetch]
  );

  const renderProducts = useMemo(
    () => (
      <div className="w-100%">
        <Container fluid className="mt-4 mb-4">
          <Row xs={1} md={2} lg={4} className="d-flex gy-4 gx-4">
            {products.map((item) => (
              <Col key={item.id + Math.random()} className="gx-4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    ),
    [products]
  );

  if (isLoading && products.length === 0) {
    return renderLoader;
  }

  if (error) {
    return renderError;
  }

  return renderProducts;
};

export default Products;
