import axios from 'axios';

// Axios instance with credentials for API calls
export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000'
});
