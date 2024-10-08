import React, { useState } from 'react';
import {
  DatatableWrapper,
  BulkCheckboxControl,
  Filter, // Not currently used but included for future reference
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from 'react-bs-datatable';
import { Col, Row, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';

const UsersTable = ({ users, loading, error, handleDeleteClick }) => {
  const [searchText, setSearchText] = useState(''); // State to hold search term

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error loading users: {error.message}</p>;
  }

  // Define the table columns
  const headers = [
    // { prop: 'id', title: '#', isSortable: true },
    { prop: 'fname', title: 'First Name', isSortable: true },
    { prop: 'lname', title: 'Last Name', isSortable: true },
    { prop: 'email', title: 'Email', isSortable: true },
    { prop: 'role', title: 'Role', isSortable: true },
    {
      prop: 'action',
      title: 'Action',
      cell: (row) => (
        <>
          <Button variant="primary">
            <FontAwesomeIcon icon={faPencilSquare} />
          </Button>
          {' '}
          <Button variant="danger" onClick={() => handleDeleteClick(row)}>
            <FontAwesomeIcon icon={faEraser} />
          </Button>
        </>
      ),
    },
  ];

  // Filter data based on search term
  const filteredUsers = users.filter((user) => {
    const searchTerm = searchText.toLowerCase(); // Case-insensitive search
    return (
      user.fname.toLowerCase().includes(searchTerm) ||
      user.lname.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm)
    );
  });

  // Prepare the data with IDs
  const tableData = filteredUsers.map((user, index) => ({
    id: index + 1,
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    role: user.role,
    action: user, // This is passed for handling actions
  }));

  // Search input handler
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <DatatableWrapper
      body={tableData}
      headers={headers}
      sortProps={{
        sortValueObj: {
          date: (date) =>
            parse(`${date}`, 'MMMM dd, yyyy', new Date()).getTime(),
        },
      }}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: 5,
          options: [5, 10, 15, 20],
        },
      }}
    >
      <Row className="mb-4">
        <Col xs={12} md={6}>
          {/* Search input integrated with 'react-bs-datatable' styling */}
          <input
            className="form-control form-control-sm mb-2"
            type="search"
            placeholder="Search Users..."
            aria-label="Search"
            value={searchText}
            onChange={handleSearchChange}
          />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-col justify-content-end align-items-end">
          <Pagination alwaysShowPagination paginationRange={3} />
        </Col>
      </Row>
      <Table responsive striped bordered hover size="sm">
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
};

export default UsersTable;