import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const UserProfile = (user) => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={4}>
        <i 
          className="fas fa-user-md" 
          roundedCircle
          style={{ 
            color:'#c2c7d0', 
            fontSize: '46px', /* Increase icon size */
          }} 
        ></i>
          {/* <Image src="/w3images/avatar2.png" roundedCircle style={{ width: '46px' }} /> */}
        </Col>
        <Col xs={8} className="d-flex align-items-center">
          <div>
            <span>Welcome, <strong>Mike</strong></span><br />
            <Button variant="link" className="p-1">
            <i
              className={`fas fa-envelope`}
              style={{
                color: "#fff",
                fontSize: "24px" /* Increase icon size */,
              }}
            ></i>
            </Button>
            <Button variant="link" className="p-1">
            <i
              className={`fas fa-comment`}
              style={{
                color: "#fff",
                fontSize: "24px" /* Increase icon size */,
              }}
            ></i>
            </Button>
            <Button variant="link" className="p-1">
            <i
              className={`fas fa-user`}
              style={{
                color: "#fff",
                fontSize: "24px" /* Increase icon size */,
              }}
            ></i>
            </Button>
          </div>
        </Col>
      </Row>
      <hr className='text-white' />
    </Container>
  );
};

export default UserProfile;
