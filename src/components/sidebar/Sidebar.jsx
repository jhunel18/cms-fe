import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({menuItems }) => {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ marginTop: '56px' }}>
      <Nav className="flex-column">
      {menuItems.map((item, index) => (
          <Nav.Link
            key={index}
            as={Link}
            to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-white"
          >
            {item}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  )
}

export default Sidebar