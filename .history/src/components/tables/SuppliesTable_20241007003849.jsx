import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';

const SuppliesTable = ({supplies, loading, error, handleDeleteClick}) => {
    if (loading) {
        return (
          <div>
            <p>Loading users...</p>
          </div>
        );
      }
    
      if (error) {
        return (
          <div>
            <p>Error loading users: {error.message}</p>
          </div>
        );
      }
  return (
    <>
     <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Brand Name</th>
              <th>Generic Name</th>
              <th>Indications</th>
              <th>Dosage Form</th>
              <th>Dosage</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Date Received</th>
              <th>Expiry Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {supplies.map((supply, index) => (
              <tr key={supply.id}>
                <td>{index + 1}</td>
                <td>{supply.brandName}</td>
                <td>{supply.genericName}</td>
                <td>{supply.category}</td>
                <td>{supply.dosageForm}</td>
                <td>{supply.dosage}</td>
                <td>{supply.category}</td>
                <td>{supply.unit}</td>
                <td>{supply.quantity}</td>
                <td>{supply.dateReceived}</td>
                <td>{supply.expiryDate}</td>
                <td>
                <Button><FontAwesomeIcon icon={faPencilSquare} /></Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteClick(user)}
                  >
                    <FontAwesomeIcon icon={faEraser} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </>
  )
}

export default SuppliesTable