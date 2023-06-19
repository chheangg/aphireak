import { 
  FormControl, 
  FormHelperText, 
  FormLabel, 
  Input, 
  Button, 
  Select, 
  Flex,
  NumberInputField, 
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper
} from "@chakra-ui/react";
import Form from "../../components/Form";
import { Product, TypeListElement } from "../../types";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getAllTypes } from "../../services/typeService";
import { createProduct } from "../../services/productService";

const ProductForm = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<TypeListElement>();

  const { isLoading, data: response } = useQuery('form-type-list', getAllTypes);
  const newProductMutation = useMutation(createProduct);

  useEffect(() => {
    if (response && response.data && response.data.data[0]) {
      setType(response.data.data[0]);
    }
  }, [response])

  const onSubmit = async () => {
    if (type) {
      const newProduct : Product = {
        id: 0,
        name,
        type,
        typeName: '',
        priceInCent: price * 100,
      }

      newProductMutation.mutate(newProduct);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Form onSubmit={onSubmit} title="Product Creation">
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
    </Form>
  )
}

export default ProductForm;