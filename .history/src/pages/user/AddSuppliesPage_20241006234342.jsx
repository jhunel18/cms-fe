import React from 'react'

const AddSuppliesPage = () => {
  return (
    <div>
    <RootLayout menuItems={menuItems} username={username}>
      <div className="custom-wrapper">
        <Add/>
      </div>
    </RootLayout>
  </div>
  )
}

export default AddSuppliesPage