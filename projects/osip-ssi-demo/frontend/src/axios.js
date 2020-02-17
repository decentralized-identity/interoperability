import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_URL
});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error.response)
})

instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default instance
