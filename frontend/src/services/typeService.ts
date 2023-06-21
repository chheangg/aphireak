import axios from "./axiosClient";
import { DTO, Type, TypeListElement } from "../types"
import { QueryFunctionContext } from "react-query";

const baseUrl = '/api/types'

const getAllTypes = async () => {
  return axios.get<DTO<TypeListElement>>(baseUrl);
}

const getType = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => {
  return axios.get<Type>(baseUrl + '/' + queryKey[1]);
}

const createType = async (type: Type) => {
  return axios.post<Type>(baseUrl, type).then(res => res.data)
}

const updateType = async(type: Type) => {
  return axios.put<Type>(baseUrl + '/' + type.id, type)
}

export { getAllTypes, createType, getType, updateType };