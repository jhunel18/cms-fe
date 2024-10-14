import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { ClientService } from "../../services/ClientService"; // Assuming you have this service for handling user data
import toast, { Toaster } from "react-hot-toast";

const AddClients = () => {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    type: "",
    course: "",
    year: "",
    section: "",
    department: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await ClientService.addClient(formData); // Adjust based on your API's expected request body
      toast.success("User Added Successfully!");
    } catch (err) {
      toast.error("An error occurred.");
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <h4>Add New User</h4>
    <hr />
    <Form onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Col md={4}>
          <Form.Group controlId="formFName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Enter first name"
              size="sm" // Smaller size
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formMName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              placeholder="Enter middle name"
              size="sm" // Smaller size
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formLName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Enter last name"
              size="sm" // Smaller size
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={6}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              size="sm" // Smaller size
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
              size="sm" // Smaller size
            >
              <option value="">Select type</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
              <option value="student">Student</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={6}>
          <Form.Group controlId="formCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control
              as="select"
              name="course"
              value={formData.course}
              onChange={handleChange}
              size="sm" // Smaller size
            >
              <option value="">Select course</option>
              <option value="NA">N/A</option>
              <option value="BSIT">BSIT</option>
              <option value="DOMT">DOMT</option>
              <option value="DIT">DIT</option>
              <option value="BEED">BEED</option>
              <option value="BSENT">BSENT</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formYear">
            <Form.Label>Year</Form.Label>
            <Form.Control
              as="select"
              name="year"
              value={formData.year}
              onChange={handleChange}
              size="sm" // Smaller size
            >
              <option value="">Select year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col md={6}>
          <Form.Group controlId="formSection">
            <Form.Label>Section</Form.Label>
            <Form.Control
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              placeholder="Enter section"
              size="sm" // Smaller size
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              size="sm" // Smaller size
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="text-end">
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add User"}
        </Button>
      </div>
    </Form>
  </>
  )
}

export default AddClients