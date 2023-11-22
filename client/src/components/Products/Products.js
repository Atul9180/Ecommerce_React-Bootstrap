import ProductCard from "./SingleProduct";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { CartState } from "../../context/Context";
// import ProductFilter from "./ProductFilter";

const Products = () => {
  const {
    state: { products, isLoading },
  } = CartState();

  return (
    <div className="w-100%">
      <Container fluid className="d-flex mt-4 mb-4">
        {/* <ProductFilter /> */}
        {isLoading && products.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Row xs={1} md={2} lg={4} className="d-flex gy-4 gx-4  ">
            {products.map((item) => (
              <Col key={item.id + Math.random()}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;

//without filter in return....

// <Container className="mt-4 mb-4">
//   <Row xs={1} md={2} lg={4} className="d-flex gy-4 gx-5  ">
//     {products.map((item) => (
//       <Col key={item.id + Math.random()}>
//         <ProductCard item={item} />
//       </Col>
//     ))}
//   </Row>
// </Container>;
