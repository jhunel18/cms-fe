import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getUserId } from "../utils/TokenHelpers";
import useFetchData from "../hooks/UseFetchData";
import { SharedService } from "../services/SharedService";
const UserProfile = () => {
  const userId = getUserId(); // Get userId from token

  const {
    data: user,
    error,
    loading,
    refetch,
  } = useFetchData(() => SharedService.getUserById(userId), [userId]);
  console.log(user)
  return (
    <Container>
      <Row className="align-items-center">
        <span>
          <span style={{ fontWeight: "300", fontSize: "22px" }}>Hi,</span>{" "}
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>
            {" "}
            {user?.fname}
          </span>
        </span>
      </Row>
      <hr className="text-white" />
    </Container>
  );
};

export default UserProfile;
