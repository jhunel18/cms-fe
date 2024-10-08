import React from 'react';
import Datatable from 'react-bs-datatable';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';

const UsersTable = ({ users, loading, error, handleDeleteClick }) => {
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

  // Define the table columns
  const header = [
    { prop: 'id', title: '#', isSortable: true },
    { prop: 'fname', title: 'First Name', isSortable: true },
    { prop: 'lname', title: 'Last Name', isSortable: true },
    { prop: 'email', title: 'Email', isSortable: true },
    { prop: 'role', title: 'Role', isSortable: true },
    {
      prop: 'action',
      title: 'Action',
      cell: (row) => (
        <>
          <Button><FontAwesomeIcon icon={faPencilSquare} /></Button>{' '}
          <Button variant="danger" onClick={() => handleDeleteClick(row)}>
            <FontAwesomeIcon icon={faEraser} />
          </Button>
        </>
      )
    }
  ];

  // Prepare the data
  const tableData = users.map((user, index) => ({
    id: index + 1,
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    role: user.role,
    action: user // This is just passed for the handleDeleteClick
  }));

  return (
    <Datatable
      tableHeaders={header}
      tableBody={tableData}
      rowsPerPage={5}
      initialSort={{ prop: 'fname', isAscending: true }}
      labels={{
        noResults: 'No users found!',
        pagination: {
          showing: 'Showing',
          of: 'of',
          to: 'to',
          results: 'results'
        }
      }}
    />
  );
}

export default UsersTable;
