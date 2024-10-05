import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import {useDashboardData} from '../../hooks/UseDashboard';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ClientsPage = () => {
    const { menuItems, username } = useDashboardData(getUserRole());
    const handleShow = () => setShowModal(true);
  return (
    <RootLayout menuItems={menuItems} username={username}>
    {/* <h2>User, {username}</h2> */}
    <div className="custom-wrapper">
        <Row className="align-items-center mb-3">
          <Col>
            <h3>Manage Clients</h3>
          </Col>
          <Col className="text-end">
            <Button variant='success' onClick={handleShow}>
              <FontAwesomeIcon icon={faPlusCircle} /> Add
            </Button>
          </Col>
        </Row>
        <Row>
        </Row>
        </div>
     
  </RootLayout>
  )
}

export default ClientsPage