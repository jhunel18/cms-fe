import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, ListGroup, InputGroup } from "react-bootstrap";
import { TreatmentService } from "../../services/TreatmentService";
import toast, { Toaster } from "react-hot-toast";
import useFetchData from "../../hooks/UseFetchData";
import { ClientService } from '../../services/ClientService'; 
import { UserService } from "../../services/UserService";
import { getUserId } from "../../utils/TokenHelpers";

const AddTreatment = () => {
    const [userId, setUserId] = useState(""); // Assuming you have a way to set the current user's ID
    const [selectedClientId, setSelectedClientId] = useState("");
    const [selectedSupplyId, setSelectedSupplyId] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [selectedSupplies, setSelectedSupplies] = useState([]);
    const [complaint, setComplaint] = useState("");
    const [treatmentDescription, setTreatmentDescription] = useState("");

     // Use effect to get the userId from the token when the component mounts
     useEffect(() => {
        const currentUserId = getUserId();
        if (currentUserId) {
            setUserId(currentUserId); // Set the userId to the state
        }
    }, []);

    // Fetch clients and supplies
    const {
        data: clients,
        loading: clientsLoading,
        error: clientsError,
    } = useFetchData(ClientService.getAllClients, []);

    const {
        data: supplies,
        loading: suppliesLoading,
        error: suppliesError,
    } = useFetchData(UserService.getAllSupplies, []);

    // Handle adding a supply to the list
    const handleAddSupply = () => {
        if (!selectedSupplyId || quantity <= 0) {
            toast.error("Please select a supply and enter a valid quantity.");
            return;
        }

        const selectedSupply = supplies.find(supply => supply.id === parseInt(selectedSupplyId));

        // Check if the supply is already in the list
        const existingSupply = selectedSupplies.find(s => s.suppliesId === selectedSupplyId);

        if (existingSupply) {
            toast.error("This supply is already selected. Please modify the existing entry.");
            return;
        }

        // Add the selected supply to the list
        setSelectedSupplies(prev => [
            ...prev,
            { suppliesId: selectedSupplyId, supplyName: selectedSupply.brandName, quantity }
        ]);

        // Reset input fields
        setSelectedSupplyId("");
        setQuantity("");
    };

    // Handle removing a supply from the list
    const handleRemoveSupply = (supplyId) => {
        setSelectedSupplies(prev => prev.filter(s => s.suppliesId !== supplyId));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (selectedSupplies.length === 0) {
            toast.error("Please select at least one supply.");
            return;
        }
    
        // Check if any supply has a quantity less than or equal to 0
        const hasInvalidQuantity = selectedSupplies.some(s => s.quantity <= 0);
    
        if (hasInvalidQuantity) {
            toast.error("All quantities must be greater than 0.");
            return;
        }
    
        const treatmentData = {
            clientId: selectedClientId,
            supplyRequests: selectedSupplies.map(s => ({
                suppliesId: s.suppliesId,
                quantity: s.quantity,
            })),
            complaint,
            treatmentDescription,
            userId : userId,
        };
    
        try {
            await TreatmentService.addTreatment(treatmentData);
            toast.success("Supplies issued successfully!");
    
            // Reset form
            setSelectedClientId("");
            setSelectedSupplies([]);
            setComplaint("");
            setTreatmentDescription("");
        } catch (error) {
            console.error("Error issuing supplies", error);
            toast.error("Failed to issue supplies: " + error.message);
        }
    };
    
    if (clientsLoading || suppliesLoading) return <p>Loading...</p>;
    if (clientsError || suppliesError) return <p>Error loading data</p>;

    return (
        <Form onSubmit={handleSubmit}>
            <h2 className="mb-4">Issue Medical Supplies</h2>

            {/* Client Selection */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Select Client</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        as="select"
                        value={selectedClientId}
                        onChange={(e) => setSelectedClientId(e.target.value)}
                        required
                    >
                        <option value="">Select Client</option>
                        {clients.map(client => (
                            <option key={client.id} value={client.id}>
                                {client.fname} {client.lname}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
            </Form.Group>

            {/* Supply and Quantity Input */}
            <Row className="mb-3">
                <Col sm={6}>
                    <Form.Group controlId="formSupply">
                        <Form.Label>Select Supply</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedSupplyId}
                            onChange={(e) => setSelectedSupplyId(e.target.value)}
                        >
                            <option value="">Select Supply</option>
                            {supplies.map(supply => (
                                <option key={supply.id} value={supply.id}>
                                    {supply.brandName} ({supply.genericName})
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col sm={4}>
                    <Form.Group controlId="formQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                                min="1"
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>

                <Col sm={2} className="d-flex align-items-end">
                    <Button variant="primary" onClick={handleAddSupply}>
                        Add
                    </Button>
                </Col>
            </Row>

            {/* Selected Supplies List */}
            <h5 className="mb-3">Selected Supplies</h5>
            <ListGroup className="mb-4">
                {selectedSupplies.length === 0 ? (
                    <ListGroup.Item>No supplies selected.</ListGroup.Item>
                ) : (
                    selectedSupplies.map(s => (
                        <ListGroup.Item key={s.suppliesId}>
                            <Row>
                                <Col>{s.supplyName}</Col>
                                <Col>{s.quantity}</Col>
                                <Col sm="auto">
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleRemoveSupply(s.suppliesId)}
                                    >
                                        Remove
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))
                )}
            </ListGroup>

            {/* Complaint and Treatment Description */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Complaint</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        required
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Treatment Description</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        value={treatmentDescription}
                        onChange={(e) => setTreatmentDescription(e.target.value)}
                        required
                    />
                </Col>
            </Form.Group>

            {/* Submit Button */}
            <Button type="submit" variant="success" className="mt-3">
                Issue Supplies
            </Button>
            <Toaster />
        </Form>
    );
};

export default AddTreatment;
