import React from 'react';
import  DatatableWrapper, Filter, Pagination, PaginationOpts,
  TableBody, TableHeader
 from 'react-bs-datatable';
import { Col, Row, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';

const UsersTable = ({ users, loading, error, handleDeleteClick }) => {
  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error loading users: {error.message}</p>;
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
          <Button variant="primary">
            <FontAwesomeIcon icon={faPencilSquare} />
          </Button>{' '}
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
    action: user // This is passed for handling actions
  }));

  return (
    <DatatableWrapper body={body} headers={headers}>
    <Row className="mb-4">
      <Col
        xs={12}
        lg={4}
        className="d-flex flex-col justify-content-end align-items-end"
      >
        <Filter />
      </Col>
      <Col
        xs={12}
        sm={6}
        lg={4}
        className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
      >
        <PaginationOpts />
      </Col>
      <Col
        xs={12}
        sm={6}
        lg={4}
        className="d-flex flex-col justify-content-end align-items-end"
      >
        <Pagination />
      </Col>
    </Row>
    <Table>
      <TableHeader />
      <TableBody />
    </Table>
  </DatatableWrapper>
  );
};

export default UsersTable;
