import axios from 'axios'

const API_URL = import.meta.env.VITE_API_REST || 'http://localhost:3030'
const instance = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials : true
})

export default instance