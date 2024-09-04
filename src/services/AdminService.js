import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserRole, getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const AdminService = {
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

    }
}