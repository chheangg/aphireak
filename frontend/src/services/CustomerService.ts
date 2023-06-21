import axios from "./axiosClient";
import { QueryFunctionContext } from 'react-query'
import { Customer, CustomerListElement, DTO } from "../types"

const baseUrl = '/api/customers'

const getAllCustomers = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => {
  return axios.get<DTO<CustomerListElement>>(baseUrl + '?q=' + queryKey[1]);
}

const getCustomer = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => 
  axios.get<Customer>(baseUrl + '/' + queryKey[1])

const createCustomer = async (customer: Customer) => 
  axios.post<Customer>(baseUrl, customer)

const updateCustomer = async (customer: Customer) => 
  axios.put<Customer>(baseUrl + '/' + customer.id, customer)

export { getAllCustomers, createCustomer, getCustomer, updateCustomer };