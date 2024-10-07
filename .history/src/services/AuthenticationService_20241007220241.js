import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserRole, getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const AuthenticationService = {
  async login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/api/auth/`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const token = response.data.accessToken;
      if (token) {
        Cookies.set('auth_token', token, { expires: 7 });
        const userRole = getUserRole();

        if (!userRole || !['role_user', 'role_admin'].includes(userRole)) {
          throw new Error('Invalid user role');
        }

        return userRole; // Return the role (admin/user)
      } else {
        throw new Error('Token is undefined');
      }
    } catch (error) {
      if (error.response) {
        // Here you can check the status code and handle it accordingly
        switch (error.response.status) {
          case 400:
            throw new Error('Bad Request: Email exists or invalid data');
          case 401:
            throw new Error('Unauthorized: Invalid credentials');
          case 403:
            throw new Error('Forbidden: Access is denied');
          case 404:
            throw new Error('Not Found: Endpoint not found');
          default:
            throw new Error(`Login failed: ${error.response.data.message || 'Unknown error'}`);
        }
      } else {
        // If error response is undefined, handle network or other errors
        throw new Error(`Network Error: ${error.message}`);
      }
    }
  },

 logout() {
    Cookies.remove('auth_token');
  },
};
