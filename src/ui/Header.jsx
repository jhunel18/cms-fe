import React from 'react'
import { Navbar, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthenticationService } from '../services/AuthenticationService';
const Header = ({username}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    AuthenticationService.logout();
    navigate('/'); // Redirect to the login page after logout
  };
  return (
    <Navbar bg="secondary" variant="light" expand="lg" className=" bg-body-tertiary px-4 fixed-top">
      <Navbar.Brand href="#">PUP Clinic Inventory Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Dropdown align="end">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {username}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header