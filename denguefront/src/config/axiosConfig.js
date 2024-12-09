import axios from "axios";

// Configuração básica do Axios
const api = axios.create({
  baseURL: 'http://localhost:8081/api/v1/',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;