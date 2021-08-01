const axios = window.axios;

const instance = axios.create({
  baseURL: 'https://poke-dani.herokuapp.com',
  timeout: 1000,
});

export default instance;

