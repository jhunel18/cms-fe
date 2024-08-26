import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../ui/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const RootLayout = ({children, menuItems, username}) => {
  return (
    <div>
    <Header username={username} />
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className="p-0">
          <Sidebar menuItems={menuItems} />
        </Col>
        <Col md={9} lg={10} className="pt-3">
          {children}
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default RootLayout