import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { UserService } from "../../services/UserService"; // Assuming you have this service for handling supplies
import toast, { Toaster } from "react-hot-toast";
const AddSupplies = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    brandName: "",
    genericName: "",
    category: "",
    dosageForm: "",
    dosage: "",
    unit: "",
    quantity: "",
    dateReceived: "",
    expiryDate: "",
  });

  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await UserService.addSupply(formData); // Adjust based on your API's expected request body
      toast.success("Added Successfully!");
    } catch (err) {
      toast.error("An error occured.");
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <h4>Add New Supplies</h4>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Col md={6}>
            <Form.Group controlId="formBrandName">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Enter brand name"
                size="sm" // Smaller size
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGenericName">
              <Form.Label>Generic Name</Form.Label>
              <Form.Control
                type="text"
                name="genericName"
                value={formData.genericName}
                onChange={handleChange}
                placeholder="Enter generic name"
                size="sm" // Smaller size
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={4}>
            <Form.Group controlId="formCategory">
              <Form.Label>Indications</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Enter category"
                size="sm" // Smaller size
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formDosageForm">
              <Form.Label>Dosage Form</Form.Label>
              <Form.Control
                as="select"
                name="dosageForm"
                value={formData.dosageForm}
                onChange={handleChange}
                size="sm" // Smaller size
              >
                <option value="">Select dosage form</option>{" "}
                {/* Default option */}
                <option value="Tablet">Tablet</option>
                <option value="Liquid">Liquid</option>
                <option value="Bottle">Bottle</option>
                <option value="Capsule">Capsule</option>
                <option value="Ointment">Ointment</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formDosage">
              <Form.Label>Dosage(mg, g)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
                placeholder="Enter dosage (e.g., 500mg)"
                size="sm" // Smaller size
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Group controlId="formUnit">
              <Form.Label>Unit</Form.Label>
              <Form.Control
                as="select"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                size="sm" // Smaller size
              >
                <option value="">Select unit</option> {/* Default option */}
                <option value="mg">mg</option>
                <option value="g">g</option>
                <option value="mL">mL</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                size="sm" // Smaller size
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Group controlId="formDateReceived">
              <Form.Label>Date Received</Form.Label>
              <Form.Control
                type="date"
                name="dateReceived"
                value={formData.dateReceived}
                onChange={handleChange}
                size="sm" // Smaller size
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formExpiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                size="sm" // Smaller size
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-end">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Supply"}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AddSupplies;
