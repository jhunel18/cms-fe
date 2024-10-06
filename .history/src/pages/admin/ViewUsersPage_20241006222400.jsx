import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "../../layouts/root-layout/RootLayout";
import { getUserRole } from "../../utils/TokenHelpers";
import { Button, Row, Col } from "react-bootstrap";
import useDashboardData from "../../hooks/UseDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CustomModal from "../../components/modal/CustomModal";
import AddUser from "../../components/forms/AddUser";
import useFetchData from "../../hooks/UseFetchData";
import { AdminService } from "../../services/AdminService";
import UsersTable from "../../components/tables/UsersTable";

const RegisterUserPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control delete confirmation modal
  const [selectedUser, setSelectedUser] = useState(null); // Store the user to delete

  // Use the custom hook to fetch users
  // Use the custom hook with AdminService.getAllUsers
  const {
    data: users,
    error,
    loading,
    refetch,
  } = useFetchData(AdminService.getAllUsers, []);

  //Delete user
  const handleDelete = (userId) => {
    AdminService.deleteUser(userId)
      .then(() => {
        refetch(); // Re-fetch the users after deletion
        setShowDeleteModal(false); // Close the delete confirmation modal
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        // Optionally handle the error
      });
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user); // Store the selected user
    setShowDeleteModal(true); // Show delete confirmation modal
  };

  const handleDeleteClose = () => {
    setSelectedUser(null);
    setShowDeleteModal(false);
  };

  const handleAddClick = () =>{
    navigate("/add"); // Redirect to add-users page

  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <RootLayout menuItems={menuItems} username={username}>
        <div className="custom-wrapper">
          <Row className="align-items-center mb-3">
            <Col>
              <h3>Manage Users</h3>
            </Col>
            <Col className="text-end">
              <Button variant="success" onClick={handleAddClick}>
                <FontAwesomeIcon icon={faPlusCircle} /> Add
              </Button>
            </Col>
          </Row>

          <UsersTable users={users} handleDeleteClick={handleDeleteClick} />

          <CustomModal
            show={showDeleteModal}
            handleClose={handleDeleteClose}
            title="Confirm Delete"
          >
            <p>Are you sure you want to delete {selectedUser?.fname}?</p>
            <Button
              variant="danger"
              onClick={() => handleDelete(selectedUser?.id)}
            >
              Yes, Delete
            </Button>{" "}
            <Button variant="secondary" onClick={handleDeleteClose}>
              Cancel
            </Button>
          </CustomModal>
        </div>
      </RootLayout>
    </div>
  );
};

export default RegisterUserPage;
