import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3MjQyODU5LCJpYXQiOjE2ODcyMjQ4NTl9.PNO_xwScspsp6Ror237nLMR58f6xTBn7lDdLZMsMSY4C_hYvVKVJpcqM595m_0Znjd9wbLvMNN70g70y9n6Cig'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient