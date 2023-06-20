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
}

export interface MaintenanceListElement extends MaintenancePrototype {
  accountName: string;
  customerName: string;
  vehicleName: string;
  type: 'maintenance',
}

export interface Maintenance extends MaintenancePrototype {
  customer: CustomerListElement | Customer | null;
  account: Account,
  vehicle: VehicleListElement | Vehicle | null;
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
  id?: string;
  quantity: number;
  priceInCent: number;
  product: ProductListElement | Product;
}