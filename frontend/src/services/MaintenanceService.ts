import axios from "./axiosClient";
import { DTO, DeleteResponse, Maintenance, MaintenanceListElement } from "../types"
import { QueryFunctionContext } from "react-query";

const baseUrl = '/api/maintenances'

const getAllMaintenances = async () =>
  axios.get<DTO<MaintenanceListElement>>(baseUrl);


const createMaintenance = async (maintenance : Maintenance) => 
  axios.post<Maintenance>(baseUrl, maintenance)

const getMaintenance = async ({ queryKey } : QueryFunctionContext<[string, string | null | undefined]>) => 
  axios.get<Maintenance>(baseUrl + `/${queryKey[1]}`);

const updateMaintenance = async (maintenance : Maintenance) =>
  axios.put<Maintenance>(baseUrl + '/' + maintenance.id, maintenance);

  const deleteMaintenance = async (id : number) =>
  axios.delete<DeleteResponse>(baseUrl + '/' + id);


export { getAllMaintenances, createMaintenance, getMaintenance, updateMaintenance, deleteMaintenance };