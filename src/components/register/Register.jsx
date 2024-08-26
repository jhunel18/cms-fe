import React, {useState} from 'react'
import { AuthenticationService } from "../../services/AuthenticationService";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
            await AuthenticationService.register(formData);
            toast.success('Registration successful!');
            navigate('/admin-dashboard'); // Redirect to login or another page after successful registration
        } catch (error) {
            if (error.message === 'BAD_REQUEST') {
                toast.error('This email is already registered. Please use a different email.');
            } else {
                toast.error(`Registration failed: ${error.message}`);
            }
        }
      };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="justify-content-center w-100">
        <Col  xs={12} md={6} lg={4}>
          <Card className="p-4 shadow-sm" style={{ width: '30rem' }}>
            <Toaster position="top-center" />
            <h1 className="h3 mb-3 font-weight-normal text-center">Register A User</h1>
            <p className="text-center text-muted mb-4">Please enter your details</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control
                  size="lg"
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
                size="lg"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  required
                />
              </Form.Group>
          
              <div className="text-right mb-3">
                
              </div>
              <Button variant="primary" size="lg" type="submit" block>
                Sign In
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register