import "./Header.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import HeaderCartButton from "./HeaderCartButton";
import HeaderNavLinks from "./HeaderNavLinks";
import { FcShop } from "react-icons/fc";
import { AuthContextData } from "../../context/Auth/AuthContext";

const Header = () => {
  const { isLoggedIn } = AuthContextData();

  return (
    <Navbar
      bg="primary"
      collapseOnSelect
      expand="sm"
      variant="dark"
      className="sticky-top py-2 bg-body-primary"
    >
      <Container>
        {/* BrandLogo */}
        <Navbar.Brand className="brandName">
          <FcShop />
          Mart
        </Navbar.Brand>

        {/* Navbar toggle for smaller screens */}
        <Navbar.Toggle aria-controls="navbar-toggle" />

        {/* Collapse content (Links and Cart) */}
        <Navbar.Collapse id="navbar-toggle">
          {/* Header Nav Links */}
          <HeaderNavLinks />

          {/* Cart Header Button Component */}
          {isLoggedIn && <HeaderCartButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
