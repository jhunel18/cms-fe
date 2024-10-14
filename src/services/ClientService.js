import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserRole, getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const ClientService = {
    async addClient(formDetails){
        console.log(JSON.stringify(formDetails))
        try {
            const response = await axios.post(`${API_URL}/api/clients/`, formDetails, {
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
    async getAllClients(){
      try {
          const response = await axios.get(`${API_URL}/api/clients/`, {
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

}