import { IconType } from "react-icons";

export interface ProductListElement {
  id: number;
  name: string,
  typeName: string,
  priceInCent: number,
  type: 'product',
}

export type Product = Omit<ProductListElement, 'type'> & { type?: TypeListElement };

export interface TypeListElement {
  id: number;
  name: string;
  numberOfProducts: number;
  type: 'type',
}

export interface Type extends TypeListElement {
  products: ProductListElement[],
}

export interface CustomerListElement {
  id: number;
  fullName: string;
  url: string
  numberOfVehicles?: number;
  phoneNumber: string;
  vehicles?: Vehicle[];
  type: 'customer';
}

export interface Customer extends CustomerListElement {
  vehicles: Vehicle[];
  maintenances: number[];
}

export interface ServiceDetail {
  id?: number;
  oilType: string;
  changeEngineOil: boolean;
  changeOilFilter: boolean;
  changeCoolant: boolean;
  changeBrakeFluid: boolean;
  changeAirFilter: boolean;
  changeTransmission: boolean;
  carCheckup: boolean;
  other?: string;
}

export interface VehicleListElement {
  id: number;
  plateNumber: string;
  vehicleName: string;
  vehicleType: string;
  nextService: Date;
  url: string;
  vehicleOwner?: string;
  type: 'vehicle';
}

export interface Vehicle extends VehicleListElement {
  serviceDetail: ServiceDetail;
  customer?: CustomerListElement;
}

export interface MaintenancePrototype {
  id?: number;
  totalCostInCent: number;
  paid: boolean;
  timestamp: Date
  url: string
}

export interface Account {
  id: number;
  username: string;
}

export interface MaintenanceListElement extends MaintenancePrototype {
  accountName: string;
  customerName: string;
  vehicleName: string;
  type: 'maintenance',
}

export interface Maintenance extends MaintenancePrototype {
  customer: CustomerListElement | Customer;
  account: Account | null,
  vehicle: VehicleListElement;
  serviceDetails: MaintenanceDetail[];
}

export interface PanelPage {
  id: number;
  tabIcon: IconType;
  tabText: string;
  page: JSX.Element,
}

export type Data = TypeListElement | CustomerListElement | VehicleListElement | ProductListElement | TypeListElement | MaintenanceListElement;

export interface DTO<T> {
  data: T[]
}

export interface MaintenanceDetail {
  id?: string | number;
  quantity: number;
  priceInCent: number;
  product: ProductListElement | Product | number;
}

export interface DeleteResponse {
  id: number;
}

export interface InitResponse {
  initialization: boolean;
}

export interface TokenResponse {
  token: string;
  username: string;
}