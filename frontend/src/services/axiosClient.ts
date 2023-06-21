import axios from "axios";

const tokenObj = localStorage.getItem('aphireak-token')

let tokenStr = '';

if (tokenObj) {
  const accountObj = JSON.parse(tokenObj);
  tokenStr = accountObj.token
}

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})

axiosClient.defaults.headers.common['Authorization'] = `Bearer ${tokenStr}` 

export default axiosClient