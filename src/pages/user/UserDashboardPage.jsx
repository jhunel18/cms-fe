import React from 'react'
import RootLayout from '../../layouts/root-layout/RootLayout';
import { getUserRole } from '../../utils/TokenHelpers';
import {useDashboardData} from '../../hooks/UseDashboard'
import CustomCard from '../../components/card/CustomCard';



const UserDashboardPage = () => {

  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <RootLayout menuItems={menuItems} username={username}>
      <h2>User, {username}</h2>
      <div className="d-flex justify-content-center" style={{background:'blue', padding:'20px', margin:'10px'
      }}>
        <CustomCard title = {"50"} content={"Stocks"} icon = 'check'/>
        <CustomCard title = {"50"} content={"Clients"} icon = 'users'/>
        <CustomCard title = {"50"} content={"Critical Items"} icon = 'notes-medical'/>
      </div>
        
    </RootLayout>
  )
}

export default UserDashboardPage