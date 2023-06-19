import { Tr, Td } from "@chakra-ui/react";
import { format } from "date-fns";
import { Data, MaintenanceListElement, CustomerListElement, ProductListElement, TypeListElement, VehicleListElement } from "../types";

export const constructTableBody = (data: Data[]) : JSX.Element[] | null => {
  if (data[0]) {
    switch(data[0].type) {
      case 'maintenance':
        return data
          .map(d => d as MaintenanceListElement)
          .map(d =>
            <Tr key={d.id}>
              <Td>{d.vehicleName}</Td>
              <Td>{d.customerName}</Td>
              <Td>{d.accountName}</Td>
              <Td isNumeric>$ {(d.totalCostInCent / 100).toFixed(2)}</Td>
              <Td>{d.paid ? 'paid' : 'unpaid'}</Td>
            </Tr>  
          );
      case 'customer':
        return data
        .map(d => d as CustomerListElement)
        .map(d =>
          <Tr key={d.id}>
            <Td>{d.fullName}</Td>
            <Td>{d.numberOfVehicles}</Td>
            <Td></Td>
            <Td></Td>
          </Tr>  
        );
      case 'product':
        return data
        .map(d => d as ProductListElement)
        .map(d =>
          <Tr key={d.id}>
            <Td>{d.name}</Td>
            <Td>{d.typeName}</Td>
            <Td isNumeric>{(d.priceInCent / 100).toFixed(2)}</Td>
            <Td></Td>
            <Td></Td>
          </Tr>  
        );
      case 'type':
        return data
        .map(d => d as TypeListElement)
        .map(d =>
          <Tr key={d.id}>
            <Td>{d.name}</Td>
            <Td>{d.name}</Td>
            <Td isNumeric>{d.numberOfProducts}</Td>
            <Td></Td>
            <Td></Td>
          </Tr>  
        );
      case 'vehicle':
        return data
        .map(d => d as VehicleListElement)
        .map(d =>
          <Tr key={d.id}>
            <Td>{d.vehicleName}</Td>
            <Td>{d.type}</Td>
            <Td>{d.plateNumber}</Td>
            <Td>{format(d.nextService, "do MMMMMMM, yyyy")}</Td>
            <Td>{d.vehicleOwner}</Td>
          </Tr>  
        );
      default:
        return null;
    }
  }
  return null;
}