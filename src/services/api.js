import axios from 'axios';

const api = axios.create({
  baseURL: 'https://superheroapi.com/api/1459450631132108',
});

export default api;