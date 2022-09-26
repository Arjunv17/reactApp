import axios from 'axios';

export const baseUrl = process.env.REACT_APP_APIENDPOINT;
const data = localStorage.getItem('token');
console.log(data,">>>>>>>>>>")
const axiosInstance = axios.create({
    token:data,
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
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