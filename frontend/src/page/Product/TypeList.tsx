import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllTypes } from "../../services/typeService";
import { TypeListElement} from "../../types";
import { useEffect, useState } from "react";

const TableListInstantiate = (data : TypeListElement[], removeType: (id: number) => void) => (
  <TableList data={data} onRemove={removeType}>
    <Tr>
      <Th color='gray.50'>Type Category</Th>
      <Th color='gray.50'>Product Quantity</Th>
      <Th></Th>
      <Th></Th>
      <Th></Th>
      <Th></Th>
      <Th></Th>
    </Tr>
  </TableList>
)

const TypeList = () => {
  const { isLoading, data: response } = useQuery('type', getAllTypes);

  const [type, setType] = useState<TypeListElement[]>([]);

  const removeType = (id : number) => {
    setType(type.filter(t => t.id !== id))
  }

  useEffect(() => {
    if (response && response.data) {
      setType(response.data.data)
    }
  }, [response])
  
  if (isLoading) {
    return TableListInstantiate([], removeType);
  }

  if (response) {
    return TableListInstantiate(type.map(d => ({ ...d, type: 'type' })), removeType);
  } else {
    return TableListInstantiate([], removeType);
  }
}

export default TypeList