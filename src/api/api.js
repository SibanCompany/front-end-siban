import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const DEFAULT_HEADER = 'application/json;charset=UTF-8';

export const boardApi = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': DEFAULT_HEADER },
});
