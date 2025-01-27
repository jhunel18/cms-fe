import React, { useState } from "react";
import { AuthenticationService } from "../../services/AuthenticationService";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
      toast.success("Login successful");

      const redirectPath =
        role === "role_admin" ? "/admin-dashboard" : "/user-dashboard";
      setTimeout(() => navigate(redirectPath), 1000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4}>
          <Card className="p-4 shadow-sm" style={{ width: "25rem" }}>
            <Toaster position="top-center" />
            <h1 className="h3 mb-3 font-weight-normal text-center">CLIMS</h1>
            <p className="text-center text-muted mb-6">
              Please enter your details
            </p>
            <Form onSubmit={handleSubmit}>
              {/* Email Field with Icon */}
              <Form.Group controlId="email" className="mb-3">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-user"></i>
                  </InputGroup.Text>
                  <Form.Control
                    size="md"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    required
                  />
                </InputGroup>
              </Form.Group>

              {/* Password Field with Icon */}
              <Form.Group controlId="password" className="mb-3">
                <Form.Label className="font-weight-bold">Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="fas fa-lock"></i>
                  </InputGroup.Text>
                  <Form.Control
                    size="md"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                    required
                  />
                </InputGroup>
              </Form.Group>
              {/* Remember Me and Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Group controlId="remember" className="mb-0">
                  <Form.Check type="checkbox" label="Keep me signed in" />
                </Form.Group>
                <Button variant="link" className="p-0 text-decoration-none">
                  Forgot Password?
                </Button>
              </div>
              <Button
                variant="primary"
                size="md"
                type="submit"
                className="w-100"
              >
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
  