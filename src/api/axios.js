import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_REST || 'http://localhost:3030/api',
    withCredentials : true,
    headers: {
        "Content-type": "application/json",
    },
})

export default instance