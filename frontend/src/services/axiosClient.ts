import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3MTU3NTk2LCJpYXQiOjE2ODcxMzk1OTZ9.veDMCObwIPwyTLFUmP8-8S0ika0Ns6Yn6nyxLXaXtSMxr2P-jmh2f2_y2K2pLKRp9SAD9H2y_SLsicpc4q9lxg'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient