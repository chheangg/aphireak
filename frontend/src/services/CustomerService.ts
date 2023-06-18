import axios from "./axiosClient";
import { CustomerDTO } from "../types"

const baseUrl = '/api/customers/'

const getAllCustomers = async () => {
  return axios.get<CustomerDTO>(baseUrl);
}

export { getAllCustomers };