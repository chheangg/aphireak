import axios from "./axiosClient";
import { DTO, MaintenanceListElement } from "../types"

const baseUrl = '/api/maintenances/'

const getAllMaintenances = async () => {
  return axios.get<DTO<MaintenanceListElement>>(baseUrl);
}

export { getAllMaintenances };