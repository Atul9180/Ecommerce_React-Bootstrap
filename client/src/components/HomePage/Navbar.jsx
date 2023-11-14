import { Navbar, Container, Nav } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";

const NavbarComponent = () => {
  return (
    <Navbar className="bg-body-dark font-white">
      <Container>
        <Navbar.Brand href="#home">Shoppy</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="justify-content-center flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <FaCartShopping />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
