import React, { useState } from 'react';
import {
  DatatableWrapper,
  Pagination,
  TableBody,
  TableHeader,
} from 'react-bs-datatable';
import { Col, Row, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';

const ClientsTable = ({clients, loading, error, handleDeleteClick}) => {
    const [searchText, setSearchText] = useState(''); // State to hold search term

    if (loading) {
      return <p>Loading clients...</p>;
    }
  
    if (error) {
      return <p>Error loading clients: {error.message}</p>;
    }
    
    const headers = [
        { prop: 'fname', title: 'First Name', isSortable: true },
        { prop: 'mname', title: 'Middle Name', isSortable: true },
        { prop: 'lname', title: 'Last Name', isSortable: true },
        { prop: 'email', title: 'Email', isSortable: true },
        { prop: 'type', title: 'Type', isSortable: true },
        { prop: 'course', title: 'Course', isSortable: true },
        { prop: 'year', title: 'Year', isSortable: true },
        { prop: 'section', title: 'Section', isSortable: true },
        { prop: 'department', title: 'Department', isSortable: true },
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
  const filteredClients = clients.filter((client) => {
    const searchTerm = searchText.toLowerCase(); // Case-insensitive search
    return (
      client.fname.toLowerCase().includes(searchTerm) ||
      client.mname.toLowerCase().includes(searchTerm) ||
      client.lname.toLowerCase().includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm) ||
      client.type.toString().includes(searchTerm) ||
      client.course.toLowerCase().includes(searchTerm) ||
      client.year.toString().includes(searchTerm) ||
      client.section.toLowerCase().includes(searchTerm) ||
      client.department.toLowerCase().includes(searchTerm)
    );
  });

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  
  return (
    <DatatableWrapper body={filteredClients} headers={headers}  paginationOptionsProps={{
        initialState: {
          rowsPerPage: 5,
          options: [5, 10, 15, 20],
        },
      }}>
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <input
            className="form-control form-control-sm mb-2"
            type="search"
            placeholder="Search clients..."
            aria-label="Search"
            value={searchText}
            onChange={handleSearchChange}
          />
        </Col>
        <Col xs={12} md={6} className="d-flex flex-col justify-content-end align-items-end">
          <Pagination alwaysShowPagination paginationRange={2} />
        </Col>
      </Row>
      <Table responsive striped bordered hover size="sm">
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  )
}

export default ClientsTable