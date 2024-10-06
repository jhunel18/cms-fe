import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { AdminService } from '../../services/AdminService';

const AddUser = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    password: '',
    branch: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // State for success message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null); // Reset success message on new submission
    try {
      await AdminService.register(formData); // Adjust based on your API's expected request body
      setSuccess('User added successfully!'); // Set success message
      onSuccess(); // Trigger success callback to refetch users
      setTimeout(() => {
        setError(null);
      }, 1000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>} {/* Display error message */}
      {success && <Alert variant="success">{success}</Alert>} {/* Display success message */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={formData.fname}
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
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              placeholder="Enter middle name"
              required
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
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Enter last name"
              req
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formBranch" className="mb-3">
            <Form.Label>Branch</Form.Label>
            <Form.Control
              as="select"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
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
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="text-end">
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add User'} {/* Show loading state */}
        </Button>
      </div>
    </Form>
  );
};

export default AddUser;
