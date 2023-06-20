import axios from "./axiosClient";
import { DTO, Maintenance, MaintenanceListElement } from "../types"

const baseUrl = '/api/maintenances'

const getAllMaintenances = async () => {
  return axios.get<DTO<MaintenanceListElement>>(baseUrl);
}

const createMaintenance = async (maintenance : Maintenance) => 
  axios.post(baseUrl, maintenance)

export { getAllMaintenances, createMaintenance };