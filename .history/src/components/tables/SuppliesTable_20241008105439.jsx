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

const SuppliesTable = ({ supplies, loading, error, handleDeleteClick }) => {
  const [searchText, setSearchText] = useState(''); // State to hold search term

  if (loading) {
    return <p>Loading supplies...</p>;
  }

  if (error) {
    return <p>Error loading supplies: {error.message}</p>;
  }

  const headers = [
    { prop: 'id', title: '#', isKey: true }, // Added 'isKey: true' for unique row identification
    { prop: 'brandName', title: 'Brand Name' },
    { prop: 'genericName', title: 'Generic Name' },
    { prop: 'category', title: 'Indications' }, // Assuming 'category' is meant for 'Indications'
    { prop: 'dosageForm', title: 'Dosage Form' },
    { prop: 'dosage', title: 'Dosage' },
    { prop: 'unit', title: 'Unit' },
    { prop: 'quantity', title: 'Quantity' },
    { prop: 'dateReceived', title: 'Date Received' },
    { prop: 'expiryDate', title: 'Expiry Date' },
    {
      prop: 'action',
      title: 'Action',
      cell: (row) => (
        <>
          <Button variant="primary">
            <FontAwesomeIcon icon={faPencilSquare} />
          </Button>
          <Button variant="danger" onClick={() => handleDeleteClick(row)}>
            <FontAwesomeIcon icon={faEraser} />
          </Button>
        </>
      ),
    },
  ];

  // Filter data based on search term
  const filteredSupplies = supplies.filter((supply) => {
    const searchTerm = searchText.toLowerCase(); // Case-insensitive search
    return (
      supply.brandName.toLowerCase().includes(searchTerm) ||
      supply.genericName.toLowerCase().includes(searchTerm) ||
      supply.category.toLowerCase().includes(searchTerm) ||
      supply.dosageForm.toLowerCase().includes(searchTerm) ||
      supply.dosage.toString().includes(searchTerm) ||
      supply.unit.toLowerCase().includes(searchTerm) ||
      supply.quantity.toString().includes(searchTerm) ||
      supply.dateReceived.toLowerCase().includes(searchTerm) ||
      supply.expiryDate.toLowerCase().includes(searchTerm)
    );
  });

  const tableData = filteredSupplies.map((supply) => ({ ...supply })); // No need to add index for ID with 'isKey: true'

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <DatatableWrapper body={tableData} headers={headers}  paginationOptionsProps={{
      initialState: {
        rowsPerPage: 5,
        options: [5, 10, 15, 20],
      },
    }}>
      <Row className="mb-4">
        <Col xs={12} md={6}>
          {/* Search input integrated with 'react-bs-datatable' styling */}
          <input
            className="form-control form-control-sm mb-2"
            type="search"
            placeholder="Search Supplies..."
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

export default SuppliesTable;