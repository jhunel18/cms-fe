import React from "react";
import RootLayout from "../../layouts/root-layout/RootLayout";
import { getUserRole } from "../../utils/TokenHelpers";
import { useDashboardData } from "../../hooks/UseDashboard";
import CustomCard from "../../components/card/CustomCard";
import { Table, Row, Col } from 'react-bootstrap';
import { faCheckCircle, faMedkit, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import SuppliesUsageChart from "../../components/charts/SuppliesUsageChart";
import DemandFluctuationsChart from "../../components/charts/DemanFluctuationsChart";

const UserDashboardPage = () => {
  
  const { menuItems, username } = useDashboardData(getUserRole());
  const totalSupplies = 50; // Replace with fetched data
  const totalTreatments = 30; // Replace with fetched data
  const criticalItems = 10; // Replace with fetched data
  const recentClients = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', username: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'Bird', username: '@twitter' },
    // Add more sample clients as needed
  ];
 
  return (
    <RootLayout menuItems={menuItems} username={username}>
      <div className="d-flex justify-content-center custom-wrapper">
        <CustomCard title={totalSupplies} content={"Total Supplies "} icon={faCheckCircle} type="success"/>
        <CustomCard title={totalTreatments} content={"Total Treatments"} icon={faUserFriends} type="primary"/>
        <CustomCard title={criticalItems} content={"Critical Items"} icon={faMedkit} type="danger"/>
      </div>
      
      <div className="custom-wrapper">
        <Row>
          <Col>
          <h3>Monthly Demand Fluctuations</h3>
          <DemandFluctuationsChart/>
          </Col>
        </Row>
        
      </div>
      <div className="custom-wrapper">
      <Row>
          <Col>
          <h3> Medical Supplies Usage</h3>
          <SuppliesUsageChart/>
          </Col>
        </Row>
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
            {recentClients.map((client, index) => (
              <tr key={client.id}>
                <td>{index + 1}</td>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </RootLayout>
  );
};

export default UserDashboardPage;
