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
      
      <Container fluid>
        <Row>
          <Sidebar 
            menuItems={menuItems} 
            username={username} 
            isSidebarOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar} 
          />
          <Col 
            className="pt-3" 
            style={{ 
              marginLeft: isSidebarOpen ? '250px' : '0', 
              marginTop: '56px', 
              transition: 'margin-left 0.3s ease-in-out', 
              width: isSidebarOpen ? 'calc(100% - 250px)' : '100%',
              paddingLeft: isSidebarOpen ? '20px' : '0',
              paddingRight: isSidebarOpen ? '20px' : '0'
            }}
          >
            <Header username={username} toggleSidebar={toggleSidebar} />
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RootLayout;
