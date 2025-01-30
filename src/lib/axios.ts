import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:8000/api',
    // baseURL: 'https://backoffice-lpsk.mareca.my.id/api',
    baseURL: 'http://localhost:8000/backoffice/api',
    // baseURL: 'https://portal.lpsk.go.id/backoffice/api/',
    // baseURL: 'https://portal.lpsk.go.id/backoffice/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
