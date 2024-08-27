import React from 'react'
import { Dropdown, NavLink} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthenticationService } from '../services/AuthenticationService';

const SidebarAccountDropdown = ({username}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
      AuthenticationService.logout();
      navigate('/'); // Redirect to the login page after logout
    };
  return (
    <div className="mt-auto" style={{ marginBottom: '50px' }}>
    <Dropdown align="end">
      <Dropdown.Toggle as={NavLink} style={{ color: 'white', cursor: 'pointer' }}>
        <i className="fas fa-user"></i> {/* Account icon */}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#profile">Profile</Dropdown.Item>
        <Dropdown.Item href="#settings">Settings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}

export default SidebarAccountDropdown