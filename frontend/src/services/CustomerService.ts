import axios from "./axiosClient";
import { Customer, CustomerListElement, DTO } from "../types"

const baseUrl = '/api/customers/'

const getAllCustomers = async () => {
  return axios.get<DTO<CustomerListElement>>(baseUrl);
}

const createCustomer = async (customer: Customer) => 
  axios.post<Customer>(baseUrl, customer)

export { getAllCustomers, createCustomer };