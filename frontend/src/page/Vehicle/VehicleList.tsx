import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllVehicles } from "../../services/vehicleService";
import { VehicleListElement } from "../../types";
import { useEffect, useState } from "react";

const TableListInstantiate = (data : VehicleListElement[], removeVehicle: (id: number) => void) => (
  <TableList data={data} onRemove={removeVehicle}>
    <Tr>
      <Th color='gray.50'>Vehicle Name</Th>
      <Th color='gray.50'>Type</Th>
      <Th color='gray.50'>Plate Number</Th>
      <Th color='gray.50'>Next Service</Th>
      <Th color='gray.50'>Vehicle Owner</Th>
      <Th></Th>
      <Th></Th>
    </Tr>
  </TableList>
)

const VehicleList = () => {
  const { isLoading, data: response } = useQuery('vehicle', getAllVehicles);

  const [vehicles, setVehicles] = useState<VehicleListElement[]>([]);

  useEffect(() => {
    if (response && response.data) {
      setVehicles(response.data.data)
    } 
  }, [response])

  const removeVehicle = (id: number) => {
    setVehicles(vehicles.filter(v => v.id !== id))
  }
  
  if (isLoading) {
    return TableListInstantiate([], removeVehicle);
  }

  if (response) {
    return TableListInstantiate(vehicles.map(d => ({...d, nextService: new Date(d.nextService), type: 'vehicle'})), removeVehicle);
  } else {
    return TableListInstantiate([], removeVehicle);
  }
}

export default VehicleList