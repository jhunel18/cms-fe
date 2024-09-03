import React from 'react'
import {Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthenticationService } from '../services/AuthenticationService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const SidebarAccountDropdown = ({username}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
      AuthenticationService.logout();
      navigate('/'); // Redirect to the login page after logout
    };
  return (
    <div className="mt-auto">
    <Button variant='light'  onClick={handleLogout}
          style={{
            background: '#fff',
            padding: '8px 18px', // Correct padding syntax
            borderRadius: '8px',
            display: 'flex', // Center icon within button
            alignItems: 'center', // Center icon vertically
          }}>
     <FontAwesomeIcon icon={faSignOut} style={{
              color: "#000",
              fontSize: "24px" /* Increase icon size */,
            }}/>
    </Button>
    {/* <Dropdown align="end">
      <Dropdown.Toggle as={NavLink} style={{ color: 'white', cursor: 'pointer' }}>
        <i className="fas fa-user"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#profile">Profile</Dropdown.Item>
        <Dropdown.Item href="#settings">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}
  </div>
  )
}

export default SidebarAccountDropdown