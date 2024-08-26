import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserRole } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const AuthenticationService = {
  async login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, credentials, {
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

  logout() {
    Cookies.remove('auth_token');
  },
};
