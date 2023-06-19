import axios from "./axiosClient";
import { DTO, ProductListElement, Product } from "../types"

const baseUrl = '/api/products/'

const getAllProducts = async () => {
  return axios.get<DTO<ProductListElement>>(baseUrl);
}

const createProduct = async (product : Product) =>
  axios.post(baseUrl, product);

export { getAllProducts, createProduct };