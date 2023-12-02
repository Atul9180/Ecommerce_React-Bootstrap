import "./Header.css";
import React from "react";
import { Nav, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import { CartState } from "../../context/Context";
import Cart from "../Cart/Cart";

const HeaderCartButton = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <Nav>
      <DropdownButton
        autoClose={false}
        align={"end"}
        title={
          <>
            <MdShoppingCart className="cart" />
            <Badge pill bg="info" className="cartBadge">
              {cart?.length}
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
