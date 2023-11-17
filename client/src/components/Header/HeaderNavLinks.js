import "./Header.css";
import Nav from "react-bootstrap/Nav";

const HeaderNavLinks = () => {
  return (
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
  );
};

export default HeaderNavLinks;
