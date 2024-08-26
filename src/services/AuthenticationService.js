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
      throw new Error(`Login failed: ${error.response ? error.response.data.message : error.message}`);
    }
  },

  async register(credentials){
    try {
      const response = await axios.post(`${API_URL}/api/admin/`, credentials, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}` // If needed
        },
      });

      return response.data; // Return the response data
    } catch (error) {
      if (error.response.status === 400) {
        throw new Error("BAD_REQUEST");
    }
      throw new Error(`Registration failed: ${error.response ? error.response.data.message : error.message}`);
    }
  },

  logout() {
    Cookies.remove('auth_token');
  },
};
