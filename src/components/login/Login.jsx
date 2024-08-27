import React, { useState } from "react";
import { AuthenticationService } from "../../services/AuthenticationService";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const role = await AuthenticationService.login(formData);
      onSubmit(role); 
      toast.success('Login successful');
      
      // Redirect based on role
      const redirectPath = role === 'role_admin' ? '/admin-dashboard' : '/user-dashboard';
      setTimeout(() => navigate(redirectPath), 1000);
      
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  };
  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="justify-content-center w-100">
        <Col  xs={12} md={6} lg={4}>
          <Card className="p-4 shadow-sm" style={{ width: '30rem' }}>
            <Toaster position="top-center" />
            <h1 className="h3 mb-3 font-weight-normal text-center">Welcome Back</h1>
            <p className="text-center text-muted mb-4">Please enter your details</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control
                  size="sm"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="font-weight-bold">Password</Form.Label>
                <Form.Control
                size="sm"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  required
                />
              </Form.Group>
              {/* <Form.Group controlId="remember" className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Remember Me"
                />
              </Form.Group> */}
              <div className="text-right mb-3">
                <Button variant="link" className="p-0">Forgot Password</Button>
              </div>
              <Button variant="primary" size="md" type="submit" block>
                Sign In
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
