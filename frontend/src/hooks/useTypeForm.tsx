import { ProductListElement, Type } from "../types"
import { useEffect, useState } from "react";
import { Box, FormControl, FormHelperText, FormLabel, Input, Button, Heading, chakra } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getAllProductByType } from "../services/productService";
import { TableListInstantiate } from "../page/Product/ProductList";
import Loading from "../components/Loading";

interface TypeFormHook {
  FormComponent: JSX.Element | JSX.Element[];
  formValue: Type;
}

interface TypeFormProps {
  isUpdate: boolean;
  type?: Type;
}

const useTypeForm = ({ isUpdate, type } : TypeFormProps) : TypeFormHook => {
  const [name, setName] = useState<string>("");
  const [products, setProducts] = useState<ProductListElement[]>([]);
  const typeId = type ? type.id : 0;

  const { isLoading, data: response } = useQuery(['type-' + typeId, typeId],getAllProductByType, {
    enabled: isUpdate,
  }) 

  useEffect(() => {
    if (response && response.data) {
      setProducts(response.data.data);
      console.log(products)
    }
  }, [response])

  useEffect(() => {
    if (type) {
      setName(type.name);
    }
  }, [type])

  let FormComponent;

  if (isUpdate) {
    FormComponent = (
      <Box>
        <FormControl>
          <FormLabel>Product Type Name</FormLabel>
          <Input value={name} onChange={(e : React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}></Input>
          <FormHelperText>Type name must be simple and concise.</FormHelperText>
        </FormControl>
        {
          isLoading && products ?
          <Loading />
          :
          <Box my='1rem'>
            <Heading mb='1rem' fontSize='1.2rem' as={chakra.h3}>Product under this type</Heading>
            {TableListInstantiate(products.map(p => ({...p, type: 'product'})))}
          </Box>
        }
        <Button type="submit" mt='1rem' colorScheme='orange'>Update Type</Button>
      </Box>
    )
  } else {
    FormComponent = (
      <Box>
        <FormControl>
          <FormLabel>Product Type Name</FormLabel>
          <Input onChange={(e : React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}></Input>
          <FormHelperText>Type name must be simple and concise.</FormHelperText>
        </FormControl>
        <Button type="submit" mt='1rem' colorScheme='orange'>Create Type</Button>
      </Box>
    )
  }

  return {
    FormComponent,
    formValue: {
      id: type && type.id ? type.id : 0,
      name,
      products: [],
      numberOfProducts: 0,
      type: 'type',
    }
  }
}

export default useTypeForm;