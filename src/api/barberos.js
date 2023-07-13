import axios from './axios'

export const getBarbersRequest = () => axios.get(`/barbers`)

export const getBarberRequest = (id) => axios.get(`/barbers/${id}`)

export const createBarberRequest = (barber) => axios.post(`/barbers`, barber)

export const editBarberRequest = (id, barber) => axios.put(`/barbers/${id}`, barber)

export const deleteBarberRequest = (id) => axios.delete(`/barbers/${id}`)