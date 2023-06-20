import axios from "./axiosClient";
import { DTO, Vehicle, VehicleListElement } from "../types"

const baseUrl = '/api/vehicles'

const getAllVehicles = async () => {
  return axios.get<DTO<VehicleListElement>>(baseUrl);
}

const createVehicle = async (vehicle: Vehicle) =>
  axios.post<Vehicle>(baseUrl, vehicle)

export { getAllVehicles, createVehicle };