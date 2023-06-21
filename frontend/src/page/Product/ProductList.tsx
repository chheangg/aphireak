import { Tr, Th } from "@chakra-ui/react";
import TableList from "../../components/TableList";

import { useQuery } from "react-query";
import { getAllProducts } from "../../services/productService";
import { ProductListElement } from "../../types";
import { useEffect, useState } from "react";

export const TableListInstantiate = (data : ProductListElement[], removeProduct: (id: number) => void) => (
  <TableList data={data} onRemove={removeProduct}>
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

  const [products, setProducts] = useState<ProductListElement[]>([]);

  const removeProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  }

  useEffect(() => {
    if (response && response.data) {
      setProducts(response.data.data);
    }
  }, [response])
  
  if (isLoading) {
    return TableListInstantiate([], removeProduct);
  }

  if (response) {
    return TableListInstantiate(products.map(d => ({...d, type: 'product'})), removeProduct);
  } else {
    return TableListInstantiate([], removeProduct);
  }
}

export default ProductList