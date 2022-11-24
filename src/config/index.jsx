import axios from 'axios';

// export const baseUrl =  'https://my-ecommerce-apis.herokuapp.com/';
export const baseUrl = process.env.REACT_APP_APIENDPOINT ;

 const axiosfun = () => {

    const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
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
    return axiosInstance;
}

export default axiosfun;