import React from 'react'
import AddSupplies from '../../components/forms/AddSupplies'

const AddSuppliesPage = () => {
  return (
    <div>
    <RootLayout menuItems={menuItems} username={username}>
      <div className="custom-wrapper">
        <AddSupplies/>
      </div>
    </RootLayout>
  </div>
  )
}

export default AddSuppliesPage