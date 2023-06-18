import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllCustomers } from "../../services/CustomerService";
import { CustomerListElement } from "../../types";

const TableListInstantiate = (data : CustomerListElement[]) => (
  <TableList data={data}>
    <Tr>
      <Th color='gray.50'>Customer Name</Th>
      <Th color='gray.50'>Vehicles Owned</Th>
    </Tr>
  </TableList>
)

const MaintenanceList = () => {
  const { isLoading, data: response } = useQuery('maintenance', getAllCustomers);
  
  if (isLoading) {
    return TableListInstantiate([]);
  }

  if (response) {
    return TableListInstantiate(response.data.data.map(d => ({...d, type: 'customer'})));
  } else {
    return TableListInstantiate([]);
  }
}

export default MaintenanceList