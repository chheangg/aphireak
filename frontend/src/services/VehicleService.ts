import axios from "./axiosClient";
import { DTO, DeleteResponse, Vehicle, VehicleListElement } from "../types"
import { QueryFunctionContext } from "react-query";

const baseUrl = '/api/vehicles'

const getAllVehicles = async () => 
  axios.get<DTO<VehicleListElement>>(baseUrl);

const createVehicle = async (vehicle: Vehicle) =>
  axios.post<Vehicle>(baseUrl, vehicle)

const getVehicle = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) =>
  axios.get<Vehicle>(baseUrl + '/' + queryKey[1])

const updateVehicle = async (vehicle: Vehicle) =>
  axios.put<Vehicle>(baseUrl + '/' + vehicle.id, vehicle)

const deleteVehicle = async (id : number) =>
  axios.delete<DeleteResponse>(baseUrl + '/' + id);

export { getAllVehicles, createVehicle, getVehicle, updateVehicle, deleteVehicle };