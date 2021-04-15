import axios from 'axios';
const BASE_BACKEND_URL = 'https://localhost:44346/api'

export default {
  getA: () => 
    axios.get(`${BASE_BACKEND_URL}/Clientes`),
  addA: (cliente) => 
    axios.post(`${BASE_BACKEND_URL}/Clientes`, cliente),
  editA: (idCliente) =>
    axios.get(`${BASE_BACKEND_URL}/Clientes/${idCliente}`),
  updateA: (cliente) =>
    axios.put(`${BASE_BACKEND_URL}/Clientes/${cliente.idCliente}`, cliente),
  deleteA: (idCliente) =>
    axios.delete(`${BASE_BACKEND_URL}/Clientes/${idCliente}`)

    
}
