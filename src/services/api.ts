import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sapathanos-sales.herokuapp.com' ,
});

export default api;
