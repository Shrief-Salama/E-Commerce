import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";

export const api = {
  login: async (user) => {
    const response = await axios.post(`${API_BASE_URL}/signin`, user);
    return response.data;
  },
  register: async (user) => {
    const response = await axios.post(`${API_BASE_URL}/signup`, user);
    console.log(response);
    return response;
  }
}