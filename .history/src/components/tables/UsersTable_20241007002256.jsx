import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faEraser } from '@fortawesome/free-solid-svg-icons';


const UsersTable = ({users, loading, error, handleDeleteClick}) => {
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
       c
  )
}

export default UsersTable