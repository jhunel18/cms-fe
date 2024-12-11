import React from 'react';
import { Container, Row } from 'react-bootstrap';

const UserProfile = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <span>
          <span style={{ fontWeight: '300', fontSize: '20px' }}>Hi,</span>{' '}
          <span style={{ fontWeight: 'bold', fontSize: '24px' }}>User</span>
        </span>
      </Row>
      <hr className="text-white" />
    </Container>
  );
};

export default UserProfile;
