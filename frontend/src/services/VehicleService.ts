import axios from "./axiosClient";
import { DTO, VehicleListElement } from "../types"

const baseUrl = '/api/vehicles/'

const getAllVehicles = async () => {
  return axios.get<DTO<VehicleListElement>>(baseUrl);
}

export { getAllVehicles };