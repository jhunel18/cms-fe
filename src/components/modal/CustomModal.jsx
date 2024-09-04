// components/modal/CustomModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, handleClose, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CustomModal;
