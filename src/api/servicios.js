import axios from './axios'

export const createServiceRequest = (service) => axios.post(`/services`, service)