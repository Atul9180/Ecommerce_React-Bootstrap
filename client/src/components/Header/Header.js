import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import HeaderCartButton from "./HeaderCartButton";
import HeaderNavLinks from "./HeaderNavLinks";
import { FcShop } from "react-icons/fc";

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
          <HeaderCartButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
