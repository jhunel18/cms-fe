import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

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
        background:'#FAFAFA', 
        transition: 'transform 0.3s ease-in-out', 
        transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' 
      }}
    >
      <Nav className="flex-column">
        <i className="fas fa-stethoscope" style={{color:'#263f73'}}></i>
        <p style={{ color: '#263f73' }}>Welcome, {username}</p>
        <hr className='text-dark'/>
        {menuItems.map((item, index) => (
          <div key={index}>
            <Nav.Link
              as={Link}
              to={item.subMenu ? '#' : item.to}
              style={{ color: '#263f73' }}
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
                    style={{ color: '#263f73' }}
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
    </div>
  );
};

export default Sidebar;
