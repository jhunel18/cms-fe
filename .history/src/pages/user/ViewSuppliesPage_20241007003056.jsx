import React, {useState} from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import {useDashboardData} from '../../hooks/UseDashboard';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import CustomModal from '../../components/modal/CustomModal'
import AddSupplies from '../../components/forms/AddSupplies'
import SuppliesTable from '../../components/tables/SuppliesTable';
import useFetchData from '../../hooks/UseFetchData';
import { UserService } from "../../services/UserService";

const SuppliesPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  const [showModal, setShowModal] = useState(false);
  const {
    data: supplies,
    error,
    loading,
    refetch,
  } = useFetchData(UserService.getAllSupplies, []);
  

  const handleAddSuppliesSuccess = () => {
    setShowModal(false); // Close the modal
    refetch(); // Re-fetch the users after adding a new user
  };

  return (
    <RootLayout menuItems={menuItems} username={username}>
      {/* <h2>User, {username}</h2> */}
      <div className="custom-wrapper">
          <Row className="align-items-center mb-3">
            <Col>
              <h3>Manage Supplies</h3>
            </Col>
            <Col className="text-end">
              <Button variant='success' onClick={null}>
                <FontAwesomeIcon icon={faPlusCircle} /> Add
              </Button>
            </Col>
          </Row>
          <Row>
            {/* <SuppliesTable/> */}
          <CustomModal
            show={showModal}
            handleClose={handleClose}
            title="Add New Supplies"
          >
            
            {/* <AddSupplies onSuccess={handleAddSuppliesSuccess} onClose={handleClose}/> */}
          </CustomModal>
          </Row>
          </div>
    </RootLayout>
  )
}

export default SuppliesPage