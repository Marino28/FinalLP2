import axios from 'axios';
const BASE_BACKEND_URL = 'https://localhost:44346/api'

export default {
  getA: () => 
    axios.get(`${BASE_BACKEND_URL}/Admins`),
  addA: (admin) => 
    axios.post(`${BASE_BACKEND_URL}/Admins`, admin),
  editA: (idAdmin) =>
    axios.get(`${BASE_BACKEND_URL}/Admins/${idAdmin}`),
  updateA: (admin) =>
    axios.put(`${BASE_BACKEND_URL}/Admins/${admin.idAdmin}`, admin),
  deleteA: (idAdmin) =>
    axios.delete(`${BASE_BACKEND_URL}/Admins/${idAdmin}`)
}