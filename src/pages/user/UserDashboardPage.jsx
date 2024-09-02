import React from "react";
import RootLayout from "../../layouts/root-layout/RootLayout";
import { getUserRole } from "../../utils/TokenHelpers";
import { useDashboardData } from "../../hooks/UseDashboard";
import CustomCard from "../../components/card/CustomCard";
import { Table } from 'react-bootstrap';
import { faCheckCircle, faMedkit, faUserFriends } from "@fortawesome/free-solid-svg-icons";


const UserDashboardPage = () => {
  const { menuItems, username } = useDashboardData(getUserRole());
  return (
    <RootLayout menuItems={menuItems} username={username}>
      <h3>User Dashboard</h3>
      {/* <h2>User, {username}</h2> */}
      <div
        className="d-flex justify-content-center custom-wrapper"
      >
        <CustomCard title={"50"} content={"Stocks"} icon={faCheckCircle} type = "success"/>
        <CustomCard title={"50"} content={"Clients"} icon={faUserFriends} type = "primary"/>
        <CustomCard
          title={"50"}
          content={"Critical Items"}
          icon={faMedkit}
          type = "danger"
        />
      </div>
      <div className="custom-wrapper">
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
