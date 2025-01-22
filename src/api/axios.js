import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/api/v1',
  headers: {
    token: 'Bearer ' + localStorage.getItem('token'),
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response)
)

export default axiosInstance
