import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3MDk0Njk5LCJpYXQiOjE2ODcwNzY2OTl9.CqZK5lWx2H9xizD2iL2y_8kR4cpxEVr6mLscAiT81gXRi54ejjUB1TsD7qOzUj4zMu40P2xriIJKGbUQnlCP8w'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient