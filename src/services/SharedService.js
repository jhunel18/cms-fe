import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserRole, getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';
export const SharedService = {
async getUserById(userId){
    try {
        const response = await axios.get(`${API_URL}/api/shared/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}` // If needed
          },
        });

        return response.data[0]
    }
    catch(error){
        throw new Error(`Failed to fetch users: ${error.response ? error.response.data.message : error.message}`);
    }

}
}