import axios from "./axiosClient";
import { DTO, ProductListElement, Product } from "../types"
import { QueryFunctionContext } from "react-query";

const baseUrl = '/api/products'

const getAllProducts = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => {
  return axios.get<DTO<ProductListElement>>(baseUrl+ '?q=' + queryKey[1]);
}

const createProduct = async (product : Product) =>
  axios.post(baseUrl, product);

export { getAllProducts, createProduct };