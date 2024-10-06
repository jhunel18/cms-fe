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
              <th></th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {supplies.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
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