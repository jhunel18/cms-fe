import React, { useState } from 'react';
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import { Table, Button, Row, Col } from 'react-bootstrap';
import useDashboardData from '../../hooks/UseDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CustomModal from '../../components/modal/CustomModal'
import Register from '../../components/register/Register';

const RegisterUserPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </Table>

          <CustomModal
            show={showModal}
            handleClose={handleClose}
            title="Add New User"
          >
            {/* <Register /> */}
          </CustomModal>

        </div>
      </RootLayout>
    </div>
  );
};

export default RegisterUserPage;
