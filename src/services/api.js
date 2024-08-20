// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getParticipants = () => api.get('/participants');
export const createParticipant = (participant) => api.post('/participants', participant);

export default api;
