import React, { useState } from 'react';
import { Form, Button, Row, Col, Modal} from 'react-bootstrap';
import { AdminService } from '../../services/AdminService';
import toast, { Toaster } from 'react-hot-toast';
const AddUser = () => {
  const [formData, setFormData] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    password: '',
    branch: '',
  });
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null); // State for success message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      await AdminService.register(formData); // Adjust based on your API's expected request body
      toast.success('User added successfully!');
    } catch (err) {
      // setError(err.message);
      toast.error('Error adding User!');
      // setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Form onSubmit={handleSubmit}>
      <h3>Add New User</h3>
      <hr />
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
              required
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
          {loading ? 'Adding...' : 'Add User'} {/* Show loading state */}
        </Button>
      </div>
    </Form>
    </>
  );
};

export default AddUser;
