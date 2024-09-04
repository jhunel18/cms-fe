import React, { useState } from 'react';
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import { Table, Button, Row, Col } from 'react-bootstrap';
import useDashboardData from '../../hooks/UseDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CustomModal from '../../components/modal/CustomModal'
import AddUser from '../../components/register/AddUser';
import useFetchData from '../../hooks/UseFetchData';
import { AdminService } from '../../services/AdminService';

const RegisterUserPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  const [showModal, setShowModal] = useState(false);


   // Use the custom hook to fetch users
  // Use the custom hook with AdminService.getAllUsers
  const { data: users, error, loading } = useFetchData(AdminService.getAllUsers, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
              <Button variant='success' onClick={handleShow}>
                <FontAwesomeIcon icon={faPlus} /> Add User
              </Button>
            </Col>
          </Row>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Branch</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fname}</td>
                  <td>{user.mname}</td>
                  <td>{user.lname}</td>
                  <td>{user.branch}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <CustomModal
            show={showModal}
            handleClose={handleClose}
            title="Add New User"
          >
            <AddUser onClose={handleClose}/>
          </CustomModal>

        </div>
      </RootLayout>
    </div>
  );
};

export default RegisterUserPage;
