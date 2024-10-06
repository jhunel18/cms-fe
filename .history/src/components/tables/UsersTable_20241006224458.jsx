import React from 'react';
import { Table, Button } from 'react-bootstrap';
import useFetchData from '../../hooks/UseFetchData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';

const UsersTable = ({handleDeleteClick}) => {
  const { data: users, error, loading, refetch } = useFetchData(AdminService.getAllUsers, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
  )
}

export default UsersTable