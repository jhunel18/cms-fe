import React from 'react'
import AddSupplies from '../../components/forms/AddSupplies'
import RootLayout from '../../layouts/root-layout/RootLayout'

const AddSuppliesPage = () => {const { menuItems, username } = useDashboardData(getUserRole());
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