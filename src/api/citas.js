import axios from './axios'

export const getAllCitasRequest = () => axios.get(`/citas`)

export const getMyCitasRequest = (id, rol) => axios.get(`/citas/${id}/${rol}`)

export const getCitaRequest = (id) => axios.get(`/citas/${id}`)

export const createCitaRequest = (cita) => axios.post(`/citas`, cita)

export const editCitaRequest = (id, cita) => axios.put(`/citas/${id}`, cita)

export const deleteCitaRequest = (id) => axios.delete(`/citas/${id}`)