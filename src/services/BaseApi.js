import axios from 'axios';

const api = axios.create({
  baseURL: 'https://604d0cc7d3e3e10017d523b3.mockapi.io/meep',
});

export default api;
