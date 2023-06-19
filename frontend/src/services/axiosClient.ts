import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3MTc2NDM2LCJpYXQiOjE2ODcxNTg0MzZ9.64jPHfMIA69FoTKgPkhOrbSGkilUz8pLpV0qhLBVq1ZUysOvA9zC_qaA5uQCdKNILrY6c6JRH_0amh0zTjXODw'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient