import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"
import { ChangeEvent } from "react";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { Product, TypeListElement } from "../types";

import { getAllTypes } from "../services/typeService";
import Loading from "../components/Loading";

interface ProductFormHook {
  FormComponent: JSX.Element | JSX.Element[],
  formValue: Product | null;
  type: TypeListElement | null | undefined;
}

interface ProductFormProps {
  product?: Product;
  isUpdate: boolean;
}

const useProductForm = ({ product, isUpdate } : ProductFormProps) : ProductFormHook => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<TypeListElement | number>();

  const { data: response } = useQuery('form-type-list', getAllTypes);

  useEffect(() => {
    if (response && response.data && response.data.data[0]) {
      setType(response.data.data[0]);
    }
  }, [response])

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.priceInCent / 100);
      if (response && response.data && response.data.data[0] && typeof product.type === 'number') {
        setType(response.data.data.find(t => t.id === product.type as unknown as number));
      }
    }
  }, [product, response])
  
  const FormComponent = (
    <Box>
      <FormControl>
        <FormLabel>Product Name</FormLabel>
        <Input value={name} onChange={(e : React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}></Input>
        <FormHelperText>Product name must be simple and concise.</FormHelperText>
      </FormControl>
      <Flex mt='1rem' gap='1rem'>
        <FormControl>
          <FormLabel>Product Type Category</FormLabel>
          <Select 
            value={type && typeof type !== 'number' ? type.id : 0}
            placeholder="Select Type" 
            onChange={(e : ChangeEvent<HTMLSelectElement>) => {
              const id : number = parseInt(e.currentTarget.value);
              setType(response?.data.data.find(t => t.id === id))
            }}>
            {
              response?.data.data.map(t => 
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              )
            }
          </Select>
          <FormHelperText>Select an existing type!</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Product Price Per Quantity ($)</FormLabel>
          <NumberInput onChange={(value) => setPrice(parseInt(value))} value={price} min={0} max={1000}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormHelperText>Price range must be [$0, $1000]</FormHelperText>
        </FormControl>
      </Flex>
      <Button type="submit" mt='1rem' colorScheme='orange'>{isUpdate ? 'Update' : 'Create'} Product</Button>
    </Box>
  )
  
  if (!type || typeof type === 'number') {
    return {
      FormComponent: <Loading />,
      formValue: null,
      type: null,
    }
  }

  return {
    FormComponent,
    formValue: {
      id: product ? product.id : 0,
      name,
      type,
      typeName: '',
      priceInCent: price * 100,
    },
    type
  }
}

export default useProductForm;