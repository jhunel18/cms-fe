import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken, getUserRoleFromToken } from '../../utils/TokenHelpers';

const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
  const token = getToken();
  
  if (!token) {
    // User is not authenticated
    return <Navigate to="/forbidden" />;
  }

  const userRole = getUserRoleFromToken(token);
  if (requiredRole && userRole !== requiredRole) {
    // User does not have the required role
    return <Navigate to="/forbidden" />;
  }

  // User is authenticated and has the required role
  return <Component {...rest} />;
};

export default ProtectedRoute;
