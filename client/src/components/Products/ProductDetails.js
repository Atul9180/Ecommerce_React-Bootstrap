import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { CartState } from "../../context/Context";
import ReusableSpinner from "../UI/ReusableSpinner";
import Rating from "./Rating";
import { fetchData } from "../../firebase/firebaseFunctions";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import ProductAddRemoveButton from "../UI/ProductAddRemoveButton";

const ProductDetails = () => {
  useRequireAuth();
  const { id } = useParams();
  const productId = Number(id);

  const {
    state: { products, cart },
  } = CartState();

  const isInCart = cart.some((item) => item.id === productId);

  const productFromContext = products.find((item) => item.id === productId);

  const [product, setProduct] = useState(productFromContext || null);
  const [isLoading, setIsLoading] = useState(!productFromContext);
  const [error, setError] = useState(null);

  const fetchProductData = useCallback(async () => {
    try {
      const fetchedProduct = await fetchData(
        `https://dummyjson.com/products/${productId}`
      );
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

          {/* Button for  Product  Add & Remove to/from Cart */}
          <ProductAddRemoveButton
            isInCart={isInCart}
            stock={stock}
            product={product}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
