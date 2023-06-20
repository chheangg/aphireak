import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllProducts } from "../../services/productService";
import { ProductListElement } from "../../types";

const TableListInstantiate = (data : ProductListElement[]) => (
  <TableList data={data}>
    <Tr>
      <Th color='gray.50'>Product Name</Th>
      <Th color='gray.50'>Type Category</Th>
      <Th color='gray.50' isNumeric>Price ($)</Th>
      <Th></Th>
      <Th></Th>
      <Th></Th>
      <Th></Th>
    </Tr>
  </TableList>
)

const ProductList = () => {
  const { isLoading, data: response } = useQuery(['product', ''], getAllProducts);
  
  if (isLoading) {
    return TableListInstantiate([]);
  }

  if (response) {
    return TableListInstantiate(response.data.data.map(d => ({...d, type: 'product'})));
  } else {
    return TableListInstantiate([]);
  }
}

export default ProductList