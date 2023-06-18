import { IconType } from "react-icons";

export interface ProductListElement {
  id: number;
  name: string,
  typeId: number,
  priceInCent: number,
  type: 'product',
}

export interface TypeListElement {
  id: number;
  name: string;
  type: 'type',
}

export interface Type extends TypeListElement {
  products: ProductListElement[],
}

export interface CustomerListElement {
  id: number;
  fullName: string;
  url: string
  type: 'customer',
}

export interface Customer extends CustomerListElement {
  phoneNumber: string;
  vehicles: number[];
  maintenances: number[];
}

export interface ServiceDetail {
  id: number;
  oilType: string;
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
  type: 'vehicle',
}

export interface Vehicle extends VehicleListElement {
  serviceDetail: ServiceDetail;
  customerId: Customer;
}

export interface MaintenancePrototype {
  id: number;
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
  customer: CustomerListElement;
}

export interface PanelPage {
  id: number;
  tabIcon: IconType;
  tabText: string;
  page: JSX.Element,
}

export type Data = TypeListElement | CustomerListElement | VehicleListElement | ProductListElement | TypeListElement | MaintenanceListElement;

export interface MaintenanceDTO {
  data: MaintenanceListElement[]
}