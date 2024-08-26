import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout'
import { getUserRole } from '../../utils/TokenHelpers';
import {useDashboardData} from '../../hooks/UseDashboard'

const AdminDashboardPage = () => {
  // const adminMenuItems = ['Dashboard', 'Manage Users', 'Reports'];
  // const adminUsername = getUserRole();  // Define the username here
  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <div>
      <RootLayout menuItems={menuItems} username={username}>
      <h2>Admin Dashboard Content</h2>
      {/* Other admin-specific content */}
      </RootLayout>

    </div>
  )
}

export default AdminDashboardPage