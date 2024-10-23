import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

export const getToken = () => {
  return Cookies.get('auth_token');
};

export const getUserRoleFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.roles[0].toLowerCase(); // Assuming roles is an array and returning the first role
  } catch (error) {
    console.error('Token decoding failed:', error);
    return null;
  }
};

// Extract user ID from token (ensure you're using the correct claim, such as 'userId' or 'sub')
export const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    
    // Assuming the token has a claim like 'userId' or 'sub' that contains the user ID
    return decodedToken.userId || decodedToken.sub || null;
  } catch (error) {
    console.error('Token decoding failed:', error);
    return null;
  }
};

export const getUserRole = () => {
  const token = getToken();
  if (!token) {
    return null; // No token means no role
  }
  return getUserRoleFromToken(token);
};

// Get the user ID using the stored token
export const getUserId = () => {
  const token = getToken();
  if (!token) {
    return null; // No token means no user ID
  }
  return getUserIdFromToken(token);
};
