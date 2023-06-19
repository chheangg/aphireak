import axios from "./axiosClient";
import { DTO, TypeListElement } from "../types"

const baseUrl = '/api/types/'

const getAllTypes = async () => {
  return axios.get<DTO<TypeListElement>>(baseUrl);
}

export { getAllTypes };