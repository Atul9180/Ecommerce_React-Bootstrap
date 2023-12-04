import "./Header.css";
import React from "react";
import { Nav, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import useCartContext from "../../context/CartContext";
import Cart from "../Cart/Cart";
// import { AuthContext } from "../../context/Auth/AuthContext";

const HeaderCartButton = () => {
  const { cart } = useCartContext();

  return (
    <Nav>
      <DropdownButton
        autoClose={false}
        align={"end"}
        title={
          <>
            <MdShoppingCart className="cart" />
            <Badge pill bg="info" className="cartBadge">
              {cart.length || 0}
            </Badge>
          </>
        }
      >
        <Dropdown.Item
          style={{ minWidth: "50vw", maxHeight: "88vh", overflowY: "scroll" }}
        >
          <Cart />
        </Dropdown.Item>
      </DropdownButton>
    </Nav>
  );
};

export default HeaderCartButton;
