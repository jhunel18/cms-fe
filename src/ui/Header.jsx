import React from "react";
import { Navbar, Dropdown, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthenticationService } from "../services/AuthenticationService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots, faSignOut } from "@fortawesome/free-solid-svg-icons";

const Header = ({ username, toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthenticationService.logout();
    navigate("/"); // Redirect to the login page after logout
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="px-4 fixed-top"
      style={{
        background: "#1d2634",
        marginLeft: isSidebarOpen ? "250px" : "0",
        width: isSidebarOpen ? "calc(100% - 250px)" : "100%",
        transition: "margin-left 0.3s ease-in-out, width 0.3s ease-in-out",
      }}
    >
      <Navbar.Brand href="#" onClick={toggleSidebar}>
        <FontAwesomeIcon icon = {faListDots}/> Clinic Inventory Management System
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
