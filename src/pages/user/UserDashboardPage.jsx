import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';

const UserDashboardPage = () => {
  const userMenuItems = ['Dashboard', 'My Profile', 'Settings'];
  const userUsername = getUserRole();  // Define the username here
  return (
    <RootLayout menuItems={userMenuItems} username={userUsername}>
       <h2>User Dashboard Content</h2>
       {/* Other user-specific content */}
    </RootLayout>
  )
}

export default UserDashboardPage