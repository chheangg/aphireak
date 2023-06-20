import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllMaintenances } from "../../services/maintenanceService";
import { MaintenanceListElement } from "../../types";

const TableListInstantiate = (data : MaintenanceListElement[]) => (
  <TableList data={data}>
    <Tr>
      <Th color='gray.50'>Vehicle</Th>
      <Th color='gray.50'>Customer</Th>
      <Th color='gray.50'>Salesperson</Th>
      <Th color='gray.50' isNumeric>Total Cost</Th>
      <Th color='gray.50'>Status</Th>
      <Th></Th>
      <Th></Th>
    </Tr>
  </TableList>
)

const MaintenanceList = () => {
  const { isLoading, data: response } = useQuery('maintenance', getAllMaintenances);
  
  if (isLoading) {
    return TableListInstantiate([]);
  }

  if (response) {
    return TableListInstantiate(response.data.data.map(d => ({...d, type: 'maintenance'})));
  } else {
    return TableListInstantiate([]);
  }
}

export default MaintenanceList