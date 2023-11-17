import { useState, useContext } from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { MdShoppingCart } from "react-icons/md";
import Cart from "../Cart/Cart";
import { CartContext } from "../../context/DataContext";

const HeaderCartButton = () => {
  const { totalCartQuantity } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartButtonToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <Nav className="ms-auto">
        <div onClick={handleCartButtonToggle}>
          <MdShoppingCart className="cart" />
          <Badge pill bg="info" className="cartBadge">
            {totalCartQuantity | 0}
          </Badge>
        </div>
      </Nav>
      {isCartOpen && <Cart handleCartButtonToggle={handleCartButtonToggle} />}
    </>
  );
};

export default HeaderCartButton;
