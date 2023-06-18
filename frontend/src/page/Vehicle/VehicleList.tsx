import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllVehicles } from "../../services/VehicleService";
import { VehicleListElement } from "../../types";
import { parse } from "date-fns"

const TableListInstantiate = (data : VehicleListElement[]) => (
  <TableList data={data}>
    <Tr>
      <Th color='gray.50'>Vehicle Name</Th>
      <Th color='gray.50'>Type</Th>
      <Th color='gray.50'>Plate Number</Th>
      <Th color='gray.50'>Next Service</Th>
      <Th color='gray.50'>Vehicle Owner</Th>
    </Tr>
  </TableList>
)

const VehicleList = () => {
  const { isLoading, data: response } = useQuery('vehicle', getAllVehicles);
  
  if (isLoading) {
    return TableListInstantiate([]);
  }

  if (response) {
    return TableListInstantiate(response.data.data.map(d => {
      return {...d, nextService: new Date(d.nextService), type: 'vehicle'}
    }));
  } else {
    return TableListInstantiate([]);
  }
}

export default VehicleList