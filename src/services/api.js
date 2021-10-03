import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.github.com/`
});

const token = `${process.env.REACT_APP_GITHUB_SECRET_KEY}`

api.defaults.headers.authorization = `Bearer ${token}`;
api.defaults.headers.accept = `application/vnd.github.v3+json`;

export default api;