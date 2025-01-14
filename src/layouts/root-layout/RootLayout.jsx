import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../ui/Header';
import Sidebar from '../../components/sidebar/Sidebar2';

const RootLayout = ({ children, menuItems, username }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getResponsiveStyles = () => {
    const isSmallScreen = window.innerWidth < 768; // Define small screen breakpoint
    const openWidth = isSmallScreen ? "50px" : "250px"; // Open width (small or large screens)
    const collapsedWidth = isSmallScreen ? "50px" : "100px"; // Collapsed width (small or large screens)
    const sidebarWidth = isSidebarOpen ? openWidth : collapsedWidth;

    return {
      marginLeft: sidebarWidth,
      width: `calc(100% - ${sidebarWidth})`,
    };
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
            className="content-area px-0"
            style={{
              transition: "all 0.3s ease-in-out",
              ...getResponsiveStyles(), // Apply dynamic styles
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
