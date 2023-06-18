export interface ProductListElement {
  id: number;
  name: string,
  typeId: number,
  priceInCent: number,
}

export interface TypeListElement {
  id: number;
  name: string;
}

export interface Type extends TypeListElement {
  products: ProductListElement[],
}

export interface CustomerListElement {
  id: number;
  fullName: string;
  url: string
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
}

export interface Maintenance extends MaintenancePrototype {
  customer: CustomerListElement;
}