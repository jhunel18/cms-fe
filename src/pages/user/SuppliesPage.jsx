import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import {useDashboardData} from '../../hooks/UseDashboard'

const SuppliesPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <RootLayout menuItems={menuItems} username={username}>
      <h2>User, {username}</h2>
       
    </RootLayout>
  )
}

export default SuppliesPage