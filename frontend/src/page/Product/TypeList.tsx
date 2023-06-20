import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllTypes } from "../../services/typeService";
import { TypeListElement} from "../../types";

const TableListInstantiate = (data : TypeListElement[]) => (
  <TableList data={data}>
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

const ProductList = () => {
  const { isLoading, data: response } = useQuery('product', getAllTypes);
  
  if (isLoading) {
    return TableListInstantiate([]);
  }

  if (response) {
    return TableListInstantiate(response.data.data.map(d => ({ ...d, type: 'type' })));
  } else {
    return TableListInstantiate([]);
  }
}

export default ProductList