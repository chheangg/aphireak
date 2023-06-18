import { Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { CustomerListElement, Data, MaintenanceListElement, VehicleListElement } from "../types";
import { format } from "date-fns";

interface TableListProp {
  children: JSX.Element | JSX.Element[];
  data: Data[];
}

const constructTableBody = (data: Data[]) : JSX.Element[] | null => {
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
          </Tr>  
        );
      case 'product':
        return data.map(d => <div key={d.id}>{d.id}</div>)
      case 'type':
        return data.map(d => <div key={d.id}>{d.id}</div>)
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

const TableList = ({ data, children } : TableListProp) => (
  <Table p='0' variant='striped' colorScheme="orange">
    <Thead p='0' bgColor='orange.400'>
      {children}
    </Thead>
    <Tbody>
      {constructTableBody(data)}
    </Tbody>
  </Table>
)

export default TableList;