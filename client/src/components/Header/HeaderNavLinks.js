import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { AuthContextData } from "../../context/Auth/AuthContext";

const HeaderNavLinks = () => {
  const { token, logout } = AuthContextData();

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
      <Nav.Link as={NavLink} to="/contact" className="nav-link">
        CONTACT
      </Nav.Link>

      {token ? (
        <>
          <NavLink as={NavLink} to="" className="nav-link">
            <button onClick={() => logout()}>Logout</button>
          </NavLink>
          {/* Display logged-in user's email */}
          <span>{/* Display user email here */}</span>
        </>
      ) : (
        <>
          <Nav.Link as={NavLink} to="/auth" className="nav-link">
            AuthLogin
          </Nav.Link>
        </>
      )}
    </Nav>
  );
};

export default HeaderNavLinks;
