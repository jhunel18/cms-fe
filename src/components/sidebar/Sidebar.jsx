import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import SidebarAccountDropdown from '../../ui/SidebarAccountDropdown'
import './sidebar-style.css'; // Import your CSS file

const Sidebar = ({ menuItems, username, isSidebarOpen, toggleSidebar }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const location = useLocation();

  const toggleSubMenu = (index, event) => {
    event.preventDefault(); // Prevent navigation if submenu is present
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClick = (item, index, event) => {
    if (item.subMenu) {
      toggleSubMenu(index, event);
    } else {
      // Allow navigation if there's no submenu
      setExpandedIndex(null);
    }
  };

  return (
    <div 
      className={`text-white vh-100 p-3 position-fixed top-0 start-0 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`} 
      style={{ 
        width: '250px',
        marginTop:'56px',
        background:'#1d2634 ', 
        transition: 'transform 0.2s ease-in-out', 
        transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' 
      }}
    >
      <Nav className="flex-column">
      <div 
        className="text-center d-flex flex-column align-items-center" 
        style={{ height: '100px', justifyContent: 'center' }}
      >
        <i 
          className="fas fa-user-md" 
          style={{ 
            color:'#c2c7d0', 
            fontSize: '60px', /* Increase icon size */
            marginBottom: '10px' /* Optional: Space between icon and text */
          }} 
        ></i>
        <p style={{ color: '#c2c7d0'}}>Clinic Inventory System</p>
      </div>
        <hr className='text-dark'/>
        {menuItems.map((item, index) => (
          <div key={index}>
            <Nav.Link
              as={Link}
              to={item.subMenu ? '#' : item.to}
              className="sidebar-item" // Apply the class here
              onClick={(event) => handleClick(item, index, event)}
            >
              <i className={`fas fa-${item.icon}`} style={{ marginRight: '8px' }}></i>
              {item.name}
            </Nav.Link>
            {item.subMenu && expandedIndex === index && (
              <Nav className="flex-column ms-3">
                {item.subMenu.map((subItem, subIndex) => (
                  <Nav.Link
                    key={subIndex}
                    as={Link}
                    to={subItem.to}
                    className="sidebar-item" // Apply the class here
                  >
                    {subItem.name}
                  </Nav.Link>
                ))}
              </Nav>
            )}
          </div>
        ))}
      </Nav>
      <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      {/* <SidebarAccountDropdown /> */}
    </div>
  );
};

export default Sidebar;
