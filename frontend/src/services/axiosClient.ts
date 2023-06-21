import axios from "axios";

const tokenObj = localStorage.getItem('aphireak-token')

let tokenStr = '';

if (tokenObj) {
  const accountObj = JSON.parse(tokenObj);
  tokenStr = accountObj.token
}

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient