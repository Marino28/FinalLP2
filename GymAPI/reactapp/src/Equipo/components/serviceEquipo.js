import axios from 'axios';
const BASE_BACKEND_URL = 'https://localhost:44346/api'

export default {
  getA: () => 
    axios.get(`${BASE_BACKEND_URL}/Equipoes`),
  addA: (equipo) => 
    axios.post(`${BASE_BACKEND_URL}/Equipoes`, equipo),
  editA: (idEquipo) =>
    axios.get(`${BASE_BACKEND_URL}/Equipoes/${idEquipo}`),
  updateA: (equipo) =>
    axios.put(`${BASE_BACKEND_URL}/Equipoes/${equipo.idEquipo}`, equipo),
  deleteA: (idEquipo) =>
    axios.delete(`${BASE_BACKEND_URL}/Equipoes/${idEquipo}`)
}