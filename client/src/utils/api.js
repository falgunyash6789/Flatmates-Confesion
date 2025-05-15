import axios from 'axios';
  const url = process.env.URL
const API = axios.create({
  baseURL: `${url}/api/user`,
});

export const loginUser = (credentials) => API.post('/login', credentials);
export const fetchAllMessages = () => API.get('/all');
export const sendMessage = (data) => API.post('/confess', data);
