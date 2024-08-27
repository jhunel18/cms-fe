import React, {useState} from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation  } from 'react-router-dom';


const Sidebar = ({menuItems, username }) => {
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
    <div className="text-white vh-100 p-3 position-fixed top-0 start-0" style={{ marginTop: '56px', width: '250px', background:'#FAFAFA', borderRight:'2px solid #263f73 '}}>
      <Nav className="flex-column">
        <p> Welcome, {username}</p>
        {menuItems.map((item, index) => (
          <div key={index}>
            <Nav.Link
              as={Link}
              to={item.subMenu ? '#' : `/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{color:'#263f73'}}
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
                    style={{color:'#263f73'}}
                  >
                    {subItem.name}
                  </Nav.Link>
                ))}
              </Nav>
            )}
          </div>
        ))}
      </Nav>
    </div>
  )
}

export default Sidebar