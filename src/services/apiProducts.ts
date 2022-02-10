import axios from './BaseApi';

export const GetAllProducts = () => {
  const url = 'products';
  return axios.get(url);
};
