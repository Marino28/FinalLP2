import axios from 'axios';
const BASE_BACKEND_URL = 'https://localhost:44346/api'

export default {
  getA: () => 
    axios.get(`${BASE_BACKEND_URL}/Workouts`),
  addA: (workout) => 
    axios.post(`${BASE_BACKEND_URL}/Workouts`, workout),
  editA: (idWorkout) =>
    axios.get(`${BASE_BACKEND_URL}/Workouts/${idWorkout}`),
  updateA: (workout) =>
    axios.put(`${BASE_BACKEND_URL}/Workouts/${workout.idWorkout}`, workout),
  deleteA: (idWorkout) =>
    axios.delete(`${BASE_BACKEND_URL}/Workouts/${idWorkout}`)
}