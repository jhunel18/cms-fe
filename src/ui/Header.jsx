import React from 'react'
import { Navbar, Dropdown, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthenticationService } from '../services/AuthenticationService';
const Header = ({username}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    AuthenticationService.logout();
    navigate('/'); // Redirect to the login page after logout
  };
  return (
      <Navbar variant="dark" expand="lg" className="px-4 fixed-top" style={{marginLeft:'250px', background:'#263f73'}}>
      <Navbar.Brand href="#"> <i className="fas fa-stethoscope"></i> Clinic Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Dropdown align="end">
          <Dropdown.Toggle as={NavLink} style={{ color: 'white' }}>
            Welcome, {username}
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