import { FormControl, FormHelperText, FormLabel, Input, Button } from "@chakra-ui/react";
import Form from "../../components/Form";
import { Type } from "../../types";
import { createType } from "../../services/typeService";
import { useState } from "react";
import { useMutation } from "react-query";

const TypeForm = () => {
  const [name, setName] = useState<string>("");
  const newTypeMutation = useMutation(createType);

  const onSubmit = async () => {
    const newType : Type = {
      id: 0,
      name,
      products: [],
      numberOfProducts: 0,
      type: 'type',
    }

    newTypeMutation.mutate(newType);
  };

  return (
    <Form onSubmit={onSubmit} title="Type Category Creation">
      <FormControl>
        <FormLabel>Product Type Name</FormLabel>
        <Input onChange={(e : React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}></Input>
        <FormHelperText>Type name must be simple and concise.</FormHelperText>
      </FormControl>
      <Button type="submit" mt='1rem' colorScheme='orange'>Create Type</Button>
    </Form>
  )
}

export default TypeForm;