import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { AdminService } from '../../services/AdminService';

const AddUser = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    branch: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null); // Reset success message

    try {
      await AdminService.register(formData); // Adjust based on your API's expected request body
      setSuccessMessage('User added successfully!'); // Set success message
      onSuccess(); // Trigger success callback
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Display Success Message */}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      
      {/* Display Error Message */}
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formMiddleName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Enter middle name"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={8}>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formBranch">
            <Form.Label>Branch</Form.Label>
            <Form.Control
              as="select"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Branch</option>
              <option>PUP_UQ</option>
              <option>PUP_QC</option>
              <option>PUP_CM</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="text-end">
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add User'}
        </Button>
      </div>
    </Form>
  );
};

export default AddUser;
