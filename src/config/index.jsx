import axios from 'axios';

export const baseUrl = process.env.REACT_APP_APIENDPOINT;
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    token: token,
    baseURL: baseUrl,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
});


// For POST requests
axiosInstance.interceptors.response.use(
    (res) => {
        // Add configurations here
        if (res.status === 201) {
            console.log('Posted Successfully');
        }
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default axiosInstance;