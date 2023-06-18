import axios from "./axiosClient";
import { CustomerListElement, DTO } from "../types"

const baseUrl = '/api/customers/'

const getAllCustomers = async () => {
  return axios.get<DTO<CustomerListElement>>(baseUrl);
}

export { getAllCustomers };