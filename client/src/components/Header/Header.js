import React from "react";
import "./Header.css";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <Navbar
      bg="primary"
      collapseOnSelect
      expand="sm"
      variant="dark"
      className="sticky-top"
    >
      <Container>
        {/* BrandLogo */}
        <Navbar.Brand href="/" className="brandName">
          Apni Dukaan
        </Navbar.Brand>

        {/* Navbar toggle for smaller screens */}
        <Navbar.Toggle aria-controls="navbar-toggle" />

        {/* Collapse content (Links and Cart) */}
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="m-auto">
            <Nav.Link href="/" className="nav-link">
              HOME
            </Nav.Link>
            <Nav.Link href="/store" className="nav-link">
              STORE
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link">
              ABOUT
            </Nav.Link>
          </Nav>

          {/* Cart at the right */}
          <Nav className="ms-auto">
            <div>
              <AiOutlineShoppingCart className="cart" />
              <Badge className="cartBadge" bg="danger">
                {0}
              </Badge>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
