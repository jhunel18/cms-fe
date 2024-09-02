import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faUser, faEnvelope, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

const UserProfile = (    ) => {
  return (
    <Container>
      <Row className="align-items-center">
        
        <Col xs={4}>
        <FontAwesomeIcon icon={faUserDoctor} style = {{ color:'#c2c7d0', 
            fontSize: '46px', /* Increase icon size */}}/>
          {/* <Image src="/w3images/avatar2.png" roundedCircle style={{ width: '46px' }} /> */}
        </Col>
        <Col xs={8} className="d-flex align-items-center">
          <div>
            <span>Welcome, <strong>User</strong></span><br />
            <Button variant="link" className="p-1">
            <FontAwesomeIcon icon={faEnvelope} style = {{ color:'#c2c7d0', 
            fontSize: '18px', /* Increase icon size */}}/>
            </Button>
            <Button variant="link" className="p-1">
            <FontAwesomeIcon icon={faCommentAlt} style = {{ color:'#c2c7d0', 
            fontSize: '18px', /* Increase icon size */}}/>
            </Button>
            <Button variant="link" className="p-1">
            <FontAwesomeIcon icon={faUser} style = {{ color:'#c2c7d0', 
            fontSize: '18px', /* Increase icon size */}}/>
            </Button>
          </div>
        </Col>
      </Row>
      <hr className='text-white' />
    </Container>
  );
};

export default UserProfile;
