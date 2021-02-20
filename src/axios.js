import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.index-indicators.com' : 'http://localhost:8080',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default httpClient;
