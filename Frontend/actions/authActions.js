import { axiosInstance } from '../utils';
import { loginUser, logoutUser } from '../features/userSlice';

export const registerUserAction = (userData) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/api/v1/auth/register', userData);
        dispatch(loginUser(response.data.user));
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};

export const loginUserAction = (userData) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/api/v1/auth/login', userData);
        dispatch(loginUser(response.data.user));
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
