import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3MzY0MDcxLCJpYXQiOjE2ODczNDYwNzF9.EGeeEUhk9IQqy2csS6SwVakpmaLKRpqFsFmvj1LzWRbUHXa0XfgMn5fgNkrzQkxm3UTX2tThQKojm8_O-igZOQ'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient