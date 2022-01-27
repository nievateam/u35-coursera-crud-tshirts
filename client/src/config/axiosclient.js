import axios from 'axios'

const axiosClientConnect = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_SERVER,
})

export default axiosClientConnect
