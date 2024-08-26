import React from 'react';
import useAuth from '../../hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
  const { userRole, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while the auth status is being determined
  }

  if (!userRole || (requiredRole && userRole !== requiredRole)) {
    // User is not authenticated or does not have the required role
    return <Navigate to="/forbidden" />;
  }

  // User is authenticated and has the required role
  return <Component {...rest} />;
};

export default ProtectedRoute;
