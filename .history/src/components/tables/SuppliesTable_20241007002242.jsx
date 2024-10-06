import React from 'react'

const SuppliesTable = ({users, loading, error, handleDeleteClick}) => {
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

    </>
  )
}

export default SuppliesTable