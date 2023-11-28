import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { AuthContextData } from "../../context/Auth/AuthContext";
import PrivateNavLinks from "./PrivateNavLinks";

const HeaderNavLinks = () => {
  const { isLoggedIn } = AuthContextData();

  return (
    <>
      <Nav className="m-auto">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/store" className="nav-link">
          Store
        </NavLink>
        <NavLink to="/about" className="nav-link">
          ABOUT
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          CONTACT
        </NavLink>

        {!isLoggedIn && (
          <NavLink to="/auth" className="nav-link">
            Login
          </NavLink>
        )}

        {isLoggedIn && <PrivateNavLinks />}
      </Nav>
    </>
  );
};

export default HeaderNavLinks;

// import "./Header.css";
// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Nav, Dropdown } from "react-bootstrap";
// import { AuthContextData } from "../../context/Auth/AuthContext";
// import PrivateNavLinks from "./PrivateNavLinks";

// const HeaderNavLinks = () => {
//   const { isLoggedIn } = AuthContextData();

//   return (
//     <Nav className="m-auto">
//       <Nav.Link as={NavLink} to="/" className="nav-link">
//         HOME
//       </Nav.Link>
//       <Nav.Link as={NavLink} to="/store" className="nav-link">
//         STORE
//       </Nav.Link>
//       <Nav.Link as={NavLink} to="/about" className="nav-link">
//         ABOUT
//       </Nav.Link>
//       <Nav.Link as={NavLink} to="/contact" className="nav-link">
//         CONTACT
//       </Nav.Link>

//       {!isLoggedIn && (
//         <Nav.Link as={NavLink} to="/auth" className="nav-link">
//           Login
//         </Nav.Link>
//       )}

//       <Dropdown>
//         <Dropdown.Toggle
//           variant="primary"
//           className="outline-none "
//           id="dropdown-basic"
//         >
//           Dropdown Button
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       {isLoggedIn && <PrivateNavLinks />}
//     </Nav>
//   );
// };

// export default HeaderNavLinks;
