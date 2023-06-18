import axios from "./axiosClient";
import { DTO, ProductListElement } from "../types"

const baseUrl = '/api/products/'

const getAllProducts = async () => {
  return axios.get<DTO<ProductListElement>>(baseUrl);
}

export { getAllProducts };