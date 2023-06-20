import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3Mjc4MTc3LCJpYXQiOjE2ODcyNjAxNzd9.xY-VIUghj_xHv3sF9-LLUJnTToa5hmwhvXr5q9HX91hSP3HMhaRStEVzXHlS0-zo4dgeEfGPPr_6iu6SbfHtIQ'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient