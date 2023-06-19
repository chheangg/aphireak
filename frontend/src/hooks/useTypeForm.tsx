import { Type } from "../types"
import { useState } from "react";
import { Box, FormControl, FormHelperText, FormLabel, Input, Button } from "@chakra-ui/react";

interface TypeFormHook {
  FormComponent: JSX.Element | JSX.Element[];
  formValue: Type;
}

const useTypeForm = () : TypeFormHook => {
  const [name, setName] = useState<string>("");
  const FormComponent = (
    <Box>
      <FormControl>
        <FormLabel>Product Type Name</FormLabel>
        <Input onChange={(e : React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}></Input>
        <FormHelperText>Type name must be simple and concise.</FormHelperText>
      </FormControl>
      <Button type="submit" mt='1rem' colorScheme='orange'>Create Type</Button>
    </Box>
  )

  return {
    FormComponent,
    formValue: {
      id: 0,
      name,
      products: [],
      numberOfProducts: 0,
      type: 'type',
    }
  }
}

export default useTypeForm;