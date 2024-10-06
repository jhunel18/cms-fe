import React from 'react';
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import { useDashboardData } from '../../hooks/UseDashboard';
import AddUser from '../../components/forms/AddUser';

const AddUsersPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <div>
      <RootLayout menuItems={menuItems} username={username}>
        <div className="custom-wrapper">
          <AddUser/>
        </div>
      </RootLayout>
    </div>
  );
};

export default AddUsersPage;
