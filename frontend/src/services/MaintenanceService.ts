import axios from "./axiosClient";
import { MaintenanceDTO } from "../types"

const baseUrl = '/api/maintenances/'

const getAllMaintenances = async () => {
  return axios.get<MaintenanceDTO>(baseUrl);
}

export { getAllMaintenances };