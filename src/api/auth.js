import axios from './axios'

export const registerRequest = (user) => axios.post(`/register`, user)

export const loginRequest = (user) => axios.post(`/login`, user)

export const verifyTokenReq = (user) => axios.get(`/verifyToken`, user)

export const logoutRequest = () => axios.post(`/logout`)