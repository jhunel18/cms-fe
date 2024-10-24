import axios from 'axios';
import { getToken } from '../utils/TokenHelpers';

const API_URL = 'http://localhost:8080';

export const TreatmentService = {
    async addTreatment(formDetails){
      console.log(formDetails)
        try {
            const response = await axios.post(`${API_URL}/api/treatments/`, formDetails, {
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
    }
}