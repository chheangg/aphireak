import { Box, Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllMaintenances } from "../../services/MaintenanceService";
import { MaintenanceListElement } from "../../types";

const TableListInstantiate = (data : MaintenanceListElement[]) => (
  <TableList data={data}>
    <Tr>
      <Th color='gray.50'>Vehicle</Th>
      <Th color='gray.50'>Customer</Th>
      <Th color='gray.50'>Salesperson</Th>
      <Th color='gray.50'>Total Cost</Th>
      <Th color='gray.50'>Status</Th>
    </Tr>
  </TableList>
)

const MaintenanceList = () => {
  const { isLoading, data: response, error} = useQuery('maintenance', getAllMaintenances);
  
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