import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ component: Component, requiredRole, ...rest }) => {
  const token = Cookies.get('auth_token');

  if (!token) {
    // User is not authenticated
    return <Navigate to="/forbidden" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.roles[0];

    if (requiredRole && userRole !== requiredRole) {
      // User does not have the required role
      return <Navigate to="/forbidden" />;
    }

    // User is authenticated and has the required role
    return <Component {...rest} />;
  } catch (error) {
    // If token decoding fails, treat the user as unauthenticated
    return <Navigate to="/forbidden" />;
  }
};

export default ProtectedRoute;
