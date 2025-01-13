import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../ui/Header';
import Sidebar from '../../components/sidebar/Sidebar2';

const RootLayout = ({ children, menuItems, username }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Sidebar
            menuItems={menuItems}
            username={username}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <Col
            className="px-0"
            style={{
              transition: 'margin-left 0.3s ease-in-out',
              marginLeft: isSidebarOpen ? '250px' : '50px',  // Sidebar width adjusted here
              width: isSidebarOpen ? 'calc(100% - 250px)' : '100%',  // Adjust content width based on sidebar state
              marginTop: '56px', // Adjust to prevent header overlap
            }}
          >
            {/* <Header username={username} toggleSidebar={toggleSidebar} /> */}
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RootLayout;
