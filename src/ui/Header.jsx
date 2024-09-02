  import React from 'react';
  import { Navbar, Dropdown, NavLink } from 'react-bootstrap';
  import { useNavigate } from 'react-router-dom';
  import { AuthenticationService } from '../services/AuthenticationService';

  const Header = ({ username, toggleSidebar, isSidebarOpen }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
      AuthenticationService.logout();
      navigate('/'); // Redirect to the login page after logout
    };

    return (
      <Navbar 
        variant="dark" 
        expand="lg" 
        className="px-4 fixed-top" 
        style={{ 
          background: '#1d2634',
          marginLeft: isSidebarOpen ? '250px' : '0',
          width: isSidebarOpen ? 'calc(100% - 250px)' : '100%',
          transition: 'margin-left 0.3s ease-in-out, width 0.3s ease-in-out',
        }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
        <Navbar.Brand href="#" onClick={toggleSidebar}>
          <i className="fas fa-list"></i> Home
        </Navbar.Brand>
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
    );
  };

  export default Header;
