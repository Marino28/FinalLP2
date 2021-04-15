import axios from 'axios';
const BASE_BACKEND_URL = 'https://localhost:44346/api'

export default {
  getA: () => 
    axios.get(`${BASE_BACKEND_URL}/Asistencias`),
  addA: (asistencia) => 
    axios.post(`${BASE_BACKEND_URL}/Asistencias`, asistencia),
  editA: (fecha) =>
    axios.get(`${BASE_BACKEND_URL}/Asistencias/${fecha}`),
  updateA: (asistencia) =>
    axios.put(`${BASE_BACKEND_URL}/Asistencias/${asistencia.fecha}&${asistencia.idPersona}`, asistencia),
  deleteA: (fecha,idPersona) =>
    axios.delete(`${BASE_BACKEND_URL}/Asistencias/${fecha}&${idPersona}`)

}