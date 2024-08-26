import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout'

const AdminDashboardPage = () => {
  const adminMenuItems = ['Dashboard', 'Manage Users', 'Reports'];
  const adminUsername = 'AdminUser';  // Define the username here
  return (
    <div>
      <RootLayout menuItems={adminMenuItems} username={adminUsername}>
      <h2>Admin Dashboard Content</h2>
      {/* Other admin-specific content */}
      </RootLayout>

    </div>
  )
}

export default AdminDashboardPage