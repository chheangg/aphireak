import axios from "axios";

const tokenStr = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0aW5nIiwiZXhwIjoxNjg3MzQ1OTAyLCJpYXQiOjE2ODczMjc5MDJ9.AR3P9e4-8mgH00vMgf1_9xqKogs4vjjwosUNw2HGieY0M4qnMjEiAvIu3958Xrain75UOHh4SojodSNekB0G9Q'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient