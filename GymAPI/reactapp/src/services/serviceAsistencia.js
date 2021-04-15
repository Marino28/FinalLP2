import axios from 'axios';
const BASE_BACKEND_URL = 'https://localhost:44346/api'

export default {
  getA: () => 
    axios.get(`${BASE_BACKEND_URL}/Asistencias`),
  addA: (asistencia) => 
    axios.post(`${BASE_BACKEND_URL}/Asistencias`, asistencia),
  editA: (idPersona) =>
    axios.get(`${BASE_BACKEND_URL}/Asistencias/${idPersona}`),
  updateA: (asistencia) =>
    axios.put(`${BASE_BACKEND_URL}/Asistencias/${asistencia.idPersona}`, asistencia),
  deleteA: (idPersona) =>
    axios.delete(`${BASE_BACKEND_URL}/Asistencias/${idPersona}`)
}