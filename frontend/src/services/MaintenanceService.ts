import axios from "./axiosClient";
import { DTO, Maintenance, MaintenanceListElement } from "../types"
import { QueryFunctionContext } from "react-query";

const baseUrl = '/api/maintenances'

const getAllMaintenances = async () => {
  return axios.get<DTO<MaintenanceListElement>>(baseUrl);
}

const createMaintenance = async (maintenance : Maintenance) => 
  axios.post<Maintenance>(baseUrl, maintenance)

const getMaintenance = async ({ queryKey } : QueryFunctionContext<[string, string | null | undefined]>) => 
  axios.get<Maintenance>(baseUrl + `/${queryKey[1]}`);

export { getAllMaintenances, createMaintenance, getMaintenance };