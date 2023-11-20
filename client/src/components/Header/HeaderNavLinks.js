import "./Header.css";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const HeaderNavLinks = () => {
  return (
    <Nav className="m-auto">
      <Nav.Link as={NavLink} to="/" className="nav-link">
        HOME
      </Nav.Link>
      <Nav.Link as={NavLink} to="/store" className="nav-link">
        STORE
      </Nav.Link>
      <Nav.Link as={NavLink} to="/about" className="nav-link">
        ABOUT
      </Nav.Link>
    </Nav>
  );
};

export default HeaderNavLinks;
