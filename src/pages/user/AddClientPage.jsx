import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import {useDashboardData} from '../../hooks/UseDashboard';
import AddClients from '../../components/forms/AddClients';

const AddClientPage = () => {
    const { menuItems, username } = useDashboardData(getUserRole());
    const handleShow = () => setShowModal(true);
  return (
    <div>
    <RootLayout menuItems={menuItems} username={username}>
      <div className="custom-wrapper">
        <AddClients/>
      </div>
    </RootLayout>
  </div>
  )
}

export default AddClientPage