import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "../../layouts/root-layout/RootLayout";
import { getUserRole } from "../../utils/TokenHelpers";
import { useDashboardData } from "../../hooks/UseDashboard";
import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CustomModal from "../../components/modal/CustomModal";
import useFetchData from "../../hooks/UseFetchData";
import { ClientService } from "../../services/ClientService";
import ClientsTable from "../../components/tables/ClientsTable";

const ViewClientsPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control delete confirmation modal
  const [selectedClient, setSelectedClient] = useState(null); // Store the user to delete

  const navigate = useNavigate();
  const {
    data: clients,
    error,
    loading,
    refetch,
  } = useFetchData(ClientService.getAllClients, []);

  const handleDelete = (clientId) => {
    ClientService.deleteClient(clientId)
      .then(() => {
        refetch(); // Re-fetch the users after deletion
        setShowDeleteModal(false); // Close the delete confirmation modal
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        // Optionally handle the error
      });
  };

  const handleDeleteClick = (client) => {
    setSelectedClient(client); // Store the selected user
    setShowDeleteModal(true); // Show delete confirmation modal
  };
  const handleDeleteClose = () => {
    setSelectedClient(null);
    setShowDeleteModal(false);
  };
  const handleAddClick = () => {
    navigate("/clients/add"); // Redirect to add-users page
  };

  return (
    <RootLayout menuItems={menuItems} username={username}>
      {/* <h2>User, {username}</h2> */}
      <div className="custom-wrapper">
        <Row className="align-items-center mb-3">
          <Col>
            <h3>Manage Clients</h3>
          </Col>
          <Col className="text-end">
            <Button variant="success" onClick={handleAddClick}>
              <FontAwesomeIcon icon={faPlusCircle} /> Add
            </Button>
          </Col>
        </Row>
        <Row></Row>
        <ClientsTable clients={clients}
            loading={loading}
            error={error}
            handleDeleteClick={handleDeleteClick}/>

        <CustomModal
          show={showDeleteModal}
          handleClose={handleDeleteClose}
          title="Confirm Delete"
        >
          <p>Are you sure you want to delete?</p>
          <Button
            variant="danger"
            onClick={() => handleDelete(selectedClient?.id)}
          >
            Yes, Delete
          </Button>{" "}
          <Button variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
        </CustomModal>
      </div>
    </RootLayout>
  );
};

export default ViewClientsPage;
