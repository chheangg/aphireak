import axios from "./axiosClient";
import { DTO, DeleteResponse, Type, TypeListElement } from "../types"
import { QueryFunctionContext } from "react-query";

const baseUrl = '/api/types'

const getAllTypes = async () => 
  axios.get<DTO<TypeListElement>>(baseUrl);

const getType = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => 
  axios.get<Type>(baseUrl + '/' + queryKey[1]);


const createType = async (type: Type) =>
  axios.post<Type>(baseUrl, type).then(res => res.data)


const updateType = async(type: Type) => 
  axios.put<Type>(baseUrl + '/' + type.id, type)

const deleteType = async (id : number) =>
  axios.delete<DeleteResponse>(baseUrl + '/' + id);


export { getAllTypes, createType, getType, updateType, deleteType };