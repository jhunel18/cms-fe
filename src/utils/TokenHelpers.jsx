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

export const getUserRole = () => {
  const token = getToken();
  if (!token) {
    return null; // No token means no role
  }
  return getUserRoleFromToken(token);
};
