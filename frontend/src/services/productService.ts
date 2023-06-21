import axios from "./axiosClient";
import { DTO, ProductListElement, Product } from "../types"
import { QueryFunctionContext } from "react-query";

const baseUrl = '/api/products'

const getAllProducts = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => 
  axios.get<DTO<ProductListElement>>(baseUrl+ '?type=0&q=' + queryKey[1]);


const getAllProductByType = async ({ queryKey }: QueryFunctionContext<[string, number | string | null | undefined]>) => 
  axios.get<DTO<ProductListElement>>(baseUrl+ '?q=a&type=' + queryKey[1]);

const getProduct = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) =>
  axios.get<Product>(baseUrl + '/' + queryKey[1])

const createProduct = async (product : Product) =>
  axios.post<Product>(baseUrl, product);

const updateProduct = async (product : Product) => 
  axios.put<Product>(baseUrl + '/' + product.id, product)

export { getAllProducts, createProduct, getAllProductByType, getProduct, updateProduct };