import React from "react";
import RootLayout from "../../layouts/root-layout/RootLayout";
import { getUserRole } from "../../utils/TokenHelpers";
import { useDashboardData } from "../../hooks/UseDashboard";
import CustomCard from "../../components/card/CustomCard";
import { Table } from 'react-bootstrap';

const UserDashboardPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <RootLayout menuItems={menuItems} username={username}>
      <h3>User Dashboard</h3>
      {/* <h2>User, {username}</h2> */}
      <div
        className="d-flex justify-content-center"
        style={{
          background: "#fff",
          padding: "20px",
          margin: "20px",
          boxShadow:'2px',
          borderRadius:'10px',
          boxShadow:'0px 0px 6px rgba(0, 0, 0, 0.5)'
        }}
      >
        <CustomCard title={"50"} content={"Stocks"} icon="check" type = "success"/>
        <CustomCard title={"50"} content={"Clients"} icon="users" type = "primary"/>
        <CustomCard
          title={"50"}
          content={"Critical Items"}
          icon="notes-medical"
          type = "danger"
        />
      </div>
      <div>
        <h3>Recent Clients</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        
      </tbody>
      
    </Table>
      </div>
    </RootLayout>
  );
};

export default UserDashboardPage;
