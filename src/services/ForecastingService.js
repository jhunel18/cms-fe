import axios from 'axios';
import Cookies from 'js-cookie';
import { getUserRole, getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const ForecastingService = {
    async forecastByUser(userId, supplyId, alpha){
        
        try {
            const response = await axios.get(`${API_URL}/api/forecast/exponential_smoothing/${userId}/${supplyId}?alpha=${alpha}`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}` // If needed
              },
            });
            console.log(response)
            return response.data
        }
        catch(error){
            throw new Error(`Failed to fetch users: ${error.response ? error.response.data.message : error.message}`);
        }
    }
}