import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react"
import { ChangeEvent } from "react";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { Product, TypeListElement } from "../types";

import { getAllTypes } from "../services/typeService";

interface ProductFormHook {
  FormComponent: JSX.Element | JSX.Element[],
  formValue: Product;
  type: TypeListElement | undefined | null;
}

const useProductForm = () : ProductFormHook => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<TypeListElement>();

  const { isLoading, data: response } = useQuery('form-type-list', getAllTypes);

  useEffect(() => {
    if (response && response.data && response.data.data[0]) {
      setType(response.data.data[0]);
    }
  }, [response])
  
  let FormComponent;

  if (isLoading) {
    FormComponent = <div>...Loading</div>
  } else {
    FormComponent = (
      <Box>
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input onChange={(e : React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}></Input>
          <FormHelperText>Product name must be simple and concise.</FormHelperText>
        </FormControl>
        <Flex mt='1rem' gap='1rem'>
          <FormControl>
            <FormLabel>Product Type Category</FormLabel>
            <Select 
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
        <Button type="submit" mt='1rem' colorScheme='orange'>Create Product</Button>
      </Box>
    )
  }

  return {
    FormComponent,
    formValue: {
      id: 0,
      name,
      type,
      typeName: '',
      priceInCent: price * 100,
    },
    type
  }
}

export default useProductForm;