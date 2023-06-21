import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3Mzc0NzM4LCJpYXQiOjE2ODczNTY3Mzh9.1je5ZMFJeLUYWMzkwKRzvD5SgRZU-M_PXEz3ijDLleIQzhTYbztdHyCF4Zrvp9UWZQsPm4Ik3O1IKjB-n-f1-w'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient