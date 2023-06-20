import axios from "./axiosClient";
import { DTO, Type, TypeListElement } from "../types"

const baseUrl = '/api/types'

const getAllTypes = async () => {
  return axios.get<DTO<TypeListElement>>(baseUrl);
}

const createType = async (type: Type) => {
  return axios.post<Type>(baseUrl, type).then(res => res.data)
}

export { getAllTypes, createType };