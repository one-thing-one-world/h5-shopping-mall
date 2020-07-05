import axios from 'axios'
const service = axios.create({
    baseURL: '/api',
    timeoutl:'1000'
})