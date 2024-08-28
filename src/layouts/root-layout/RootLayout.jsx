import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../ui/Header';
import Sidebar from '../../components/sidebar/Sidebar';

const RootLayout = ({ children, menuItems, username }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header username={username} toggleSidebar={toggleSidebar} />
      <Container fluid>
        <Row>
          <Col md={3} lg={2} className="p-0">
            <Sidebar menuItems={menuItems} username={username} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </Col>
          <Col md={9} lg={10} className="pt-3" style={{ marginLeft: isSidebarOpen ? '250px' : '0', marginTop: '56px', transition: 'margin-left 0.3s ease-in-out' }}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RootLayout;
