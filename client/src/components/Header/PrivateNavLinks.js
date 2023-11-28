import React from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContextData } from "../../context/Auth/AuthContext";

const PrivateNavLinks = () => {
  const { logout } = AuthContextData();
  const navigate = useNavigate();

  const logoutBtnClick = () => {
    logout();
    navigate("/auth", { replace: true });
  };

  const dropdownItemStyle = {
    color: "#ffc107",
    padding: "8px 16px",
    margin: "4px 0",
    fontWeight: "bold",
  };

  const handleMouseEnter = (event) => {
    event.target.style.color = "#ffc107";
    event.target.style.borderBottom = "4px solid rgb(95, 72, 3)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = "";
    event.target.style.borderBottom = "";
  };

  return (
    <NavDropdown title="Profile" id="user-nav-dropdown">
      <NavDropdown.Item
        as={NavLink}
        to="/userprofile"
        style={dropdownItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item
        as={NavLink}
        to="/changepassword"
        style={dropdownItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Change Password
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <Button variant="danger" onClick={logoutBtnClick}>
          Logout
        </Button>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default PrivateNavLinks;
