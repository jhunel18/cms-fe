import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import {useDashboardData} from '../../hooks/UseDashboard'

const UserDashboardPage = () => {

  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <RootLayout menuItems={menuItems} username={username}>
       <h2>User Dashboard Content</h2>
       {/* Other user-specific content */}
    </RootLayout>
  )
}

export default UserDashboardPage