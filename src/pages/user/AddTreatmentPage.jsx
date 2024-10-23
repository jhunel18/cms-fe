import React from 'react'
import AddTreatment from '../../components/forms/AddTreatment'
import RootLayout from '../../layouts/root-layout/RootLayout'
import useDashboardData from '../../hooks/UseDashboard'
import { getUserRole } from '../../utils/TokenHelpers'

const AddTreatmentPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <div>
    <RootLayout menuItems={menuItems} username={username}>
      <div className="custom-wrapper">
        <AddTreatment/>
      </div>
    </RootLayout>
  </div>
  )
}

export default AddTreatmentPage