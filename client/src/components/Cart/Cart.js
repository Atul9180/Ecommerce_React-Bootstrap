import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../context/Context";
import { Button, Row, Col } from "react-bootstrap";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <Row className="text-center">
        <span className="CartHeading">Cart</span>
        <hr />
      </Row>

      <Row className="CartItemColHeading text-center">
        <Col>Image</Col>
        <Col>Item</Col>
        <Col className="text-end">Quantity</Col>
        <Col className="">Price</Col>
        {/* <Col>Action</Col> */}
        <Col>Delete</Col>
      </Row>

      <div className="cartItemsList">
        {cart?.length === 0 ? (
          <span className="cartItemRow">
            <div className="text-center">Cart Empty....</div>
          </span>
        ) : (
          cart?.map((item) => (
            <Row className="cartItemRow text-center mb-2" key={item.id}>
              <Col className=" text-center">
                <img
                  src={item.images[0]}
                  className="cartItemImg"
                  alt={item.title}
                />
              </Col>
              <Col>{item.title}</Col>
              <Col>[x {item.qty}]</Col>
              <Col>Rs {item.price * item.qty}</Col>
              <Col>
                <AiFillDelete
                  className="iconDelete"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FROM_CART", payload: item });
                  }}
                />
              </Col>
            </Row>
          ))
        )}
      </div>

      <div className="text-end mt-4">
        <h5>Total Price: Rs. {"0"} </h5>
      </div>

      <Button className="proceedToPayBtn text-end">Proceed To Payment</Button>
    </>
  );
};

export default Cart;

/* <Col className="actionIcons plusMinusIcon">
          <AiTwotoneMinusCircle className="iconMinus" />
          <AiTwotonePlusCircle className="iconPlus" />
        </Col>
        <Col className="actionIcons">
          <AiTwotoneDelete className="iconDelete" />
        </Col> */

// import ReactDOM from "react-dom";
// import "./Cart.css";
// import { Modal, Button, Row, Col } from "react-bootstrap";
// import CartItemsList from "./CartItemsList";
// import { CartState } from "../../context/Context";

// const Cart = ({ handleCartButtonToggle }) => {
//   const {
//     state: { cart },
//   } = CartState();

//   return ReactDOM.createPortal(
//     <Modal
//       show={handleCartButtonToggle}
//       onHide={handleCartButtonToggle}
//       backdrop="static"
//       keyboard={false}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title className="text-center">Cart </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="pb-0 text-center">
//         <div className="CartItemColHeading">
//           <Row>
//             <Col>Item</Col>
//             <Col>Quantity</Col>
//             <Col>Price</Col>
//             <Col>Action</Col>
//             <Col>Delete</Col>
//           </Row>
//         </div>
//         <div className="cartItemsList">
//           <CartItemsList />
//         </div>

//         <div className="text-end mt-4">
//           <h5>Total Price: Rs. {totalCartPrice} </h5>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button
//           className="CartCloseBtn"
//           variant="secondary"
//           onClick={handleCartButtonToggle}
//         >
//           Close
//         </Button>
//         <Button className="proceedToPayBtn" variant="success">
//           Proceed To Payment
//         </Button>
//       </Modal.Footer>
//     </Modal>,
//     document.getElementById("cart-root")
//   );
// };

// export default Cart;
