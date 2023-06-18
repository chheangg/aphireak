import axios from "./axiosClient";
import { VehicleDTO } from "../types"

const baseUrl = '/api/vehicles/'

const getAllVehicles = async () => {
  return axios.get<VehicleDTO>(baseUrl);
}

export { getAllVehicles };