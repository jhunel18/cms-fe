import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddUser = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formMiddleName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter middle name" />
          </Form.Group>
        </Col>
        
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="formLastName">
            <Form.Label> Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formBranch" className="mb-3">
        <Form.Label>Branch</Form.Label>
        <Form.Control as="select">
          <option>Select Branch</option>
          <option>PUP_UQ</option>
          <option>PUP_QC</option>
          <option>PUP_CM</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default AddUser;
