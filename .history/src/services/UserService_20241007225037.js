import axios from 'axios';
import { getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const UserService = {
    async addSupply(formDetails){
        console.log(JSON.stringify(formDetails))
        try {
            const response = await axios.post(`${API_URL}/api/supplies/`, formDetails, {
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
            throw new Error(`Adding Data Failed: ${error.response ? error.response.data.message : error.message}`);
          }
    },
    async getAllSupplies(){
        try {
            const response = await axios.get(`${API_URL}/api/supplies/`, {
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

    async deleteSupplies(id){
      try {
        const response = await axios.delete(`${API_URL}/api/supplies/${id}`, {
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