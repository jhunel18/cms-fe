import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const API_URL = 'http://localhost:8080';

export const AuthenticationService = {
  async login(credentials) {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const token = response.data.accessToken; // Adjust according to the structure
      
      if (token) {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.roles[0];
        
        if (!['ROLE_USER', 'ROLE_ADMIN'].includes(userRole)) {
          throw new Error('Invalid user role');
        }
        Cookies.set('auth_token', token, { expires: 7 });
        return userRole.toLowerCase(); // Return the role (admin/user)
      } else {
        throw new Error('Token is undefined');
      }
    } catch (error) {
      throw new Error(`Login failed: ${error.response ? error.response.data.message : error.message}`);
    }
  },
};
