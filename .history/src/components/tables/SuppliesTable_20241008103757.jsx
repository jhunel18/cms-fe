import React from 'react';
import {
  DatatableWrapper,
  TableBody,
  TableHeader,
  Pagination,
  PaginationOptions,
} from 'react-bs-datatable';
import { Col, Row, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';

const SuppliesTable = ({ supplies, loading, error, handleDeleteClick }) => {
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

  const tableData = supplies.map((supply) => ({ ...supply })); // No need to add index for ID with 'isKey: true'

  return (
    <DatatableWrapper body={tableData} headers={headers}>
      <Row className="mb-4">
        <Col xs={12}> {/* Can add search functionality here if needed */} </Col>
        <Col xs={12} sm={6} lg={4} className="d-flex flex-col justify-content-end align-items-end">
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