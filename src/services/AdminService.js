import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserRole, getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const AdminService = {
  async register(credentials){
    console.log(credentials)
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
  
    async getAllUsers(){
        try {
            const response = await axios.get(`${API_URL}/api/admin/`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}` // If needed
              },
            });

            return response.data
        }
        catch(error){
            throw new Error(`Failed to fetch users: ${error.response ? error.response.data.message : error.message}`);
        }

    },

    async getUserById(userId){
      try {
          const response = await axios.get(`${API_URL}/api/admin/${userId}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${getToken()}` // If needed
            },
          });

          return response.data
      }
      catch(error){
          throw new Error(`Failed to fetch users: ${error.response ? error.response.data.message : error.message}`);
      }

  },

    async deleteUser(id){
      try {
        const response = await axios.delete(`${API_URL}/api/admin/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}` // If needed
          },
        });

        return response.data
    }
    catch(error){
        throw new Error(`Failed to fetch users: ${error.response ? error.response.data.message : error.message}`);
    }
    }
}