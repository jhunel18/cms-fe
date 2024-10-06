import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { UserService } from '../../services/UserService'; // Assuming you have this service for handling supplies

const AddSupplies = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    brandName: '',
    genericName: '',
    category: '',
    dosageForm: '',
    dosage: '',
    unit: '',
    quantity: '',
    dateReceived: '',
    expiryDate: '',
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
      await UserService.addSupply(formData); // Adjust based on your API's expected request body
      onSuccess(); // Trigger success callback to refresh supplies list
      onClose(); // Close modal on success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <p className="text-danger">{error}</p>}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formBrandName">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Enter brand name"
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
            />
          </Form.Group>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formDosageForm">
            <Form.Label>Dosage Form</Form.Label>
            <Form.Control
              type="text"
              name="dosageForm"
              value={formData.dosageForm}
              onChange={handleChange}
              placeholder="Enter dosage form (e.g., tablet, capsule)"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formDosage">
            <Form.Label>Dosage</Form.Label>
            <Form.Control
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              placeholder="Enter dosage (e.g., 500mg)"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formUnit">
            <Form.Label>Unit</Form.Label>
            <Form.Control
              type="text"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              placeholder="Enter unit (e.g., bottle, box)"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formDateReceived">
            <Form.Label>Date Received</Form.Label>
            <Form.Control
              type="date"
              name="dateReceived"
              value={formData.dateReceived}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formExpiryDate">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="text-end">
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Supply'}
        </Button>
      </div>
    </Form>
  );
};

export default AddSupplies;