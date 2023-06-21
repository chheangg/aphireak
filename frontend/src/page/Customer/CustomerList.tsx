import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllCustomers } from "../../services/customerService";
import { CustomerListElement } from "../../types";
import { useEffect, useState } from "react";

const TableListInstantiate = (data : CustomerListElement[], removeCustomer: (id: number) => void) => (
  <TableList data={data} onRemove={removeCustomer}>
    <Tr>
      <Th color='gray.50'>Customer Name</Th>
      <Th color='gray.50'>Phone Number</Th>
      <Th color='gray.50'>Vehicles Owned</Th>
      <Th></Th>
      <Th></Th>
      <Th></Th>
      <Th></Th>
    </Tr>
  </TableList>
)

const MaintenanceList = () => {
  const { isLoading, data: response } = useQuery(['customer', ''], getAllCustomers);

  const [customers, setCustomers] = useState<CustomerListElement[]>([])
  
  useEffect(() => {
    if (response && response.data) {
      setCustomers(response.data.data);
    }
  }, [response])

  const removeCustomer = (id: number) => {
    setCustomers(customers.filter(c => c.id !== id));
  }

  if (isLoading) {
    return TableListInstantiate([], removeCustomer);
  }

  if (response) {
    return TableListInstantiate(customers.map(d => ({...d, type: 'customer'})), removeCustomer);
  } else {
    return TableListInstantiate([], removeCustomer);
  }
}

export default MaintenanceList