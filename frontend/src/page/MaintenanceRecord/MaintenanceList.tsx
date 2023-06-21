import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllMaintenances } from "../../services/maintenanceService";
import { MaintenanceListElement } from "../../types";
import { useEffect, useState } from "react";

const TableListInstantiate = (data : MaintenanceListElement[], removeMaintenance: (id: number) => void) => (
  <TableList data={data} onRemove={removeMaintenance}>
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

  const [maintainances, setMaintenances] = useState<MaintenanceListElement[]>([]);

  useEffect(() => {
    if (response && response.data) {
      setMaintenances(response.data.data)
    }
  }, [response])

  const removeMaintenance = (id: number) => {
    setMaintenances(maintainances.filter(m => m.id !== id))
  }
  
  if (isLoading) {
    return TableListInstantiate([], removeMaintenance);
  }

  if (response) {
    return TableListInstantiate(maintainances.map(d => ({...d, type: 'maintenance'})), removeMaintenance);
  } else {
    return TableListInstantiate([], removeMaintenance);
  }
}

export default MaintenanceList