import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3MzI5ODE2LCJpYXQiOjE2ODczMTE4MTZ9.dnJpaHbMvXr35W-9B6C1OComm8Fz4pHYvuZX2vZwcpIoiI4k4OoXBnstomNH7uLUmPdcHdIf6DBd4gjIXC4x3g'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient