import { FormControl, FormLabel, Input, FormHelperText, Button, Box } from "@chakra-ui/react"
import { useState } from "react";
import { Customer } from "../types";

interface CustomerFormHook {
  FormComponent: JSX.Element | JSX.Element[];
  formValue: Customer;
}

const useCustomerForm = () : CustomerFormHook => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const FormComponent = (
    <Box>
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="John Appleseed"
          onChange={(e : React.FormEvent<HTMLInputElement>) => setFullName(e.currentTarget.value)}
        ></Input>
        <FormHelperText>Enter customer full name correctly!</FormHelperText>
      </FormControl>
      <FormControl mt='1rem'>
        <FormLabel>Phone Number</FormLabel>
        <Input type='tel' placeholder="Ex: 012 123 345"
          onChange={(e : React.FormEvent<HTMLInputElement>) => setPhoneNumber(e.currentTarget.value)}
        ></Input>
        <FormHelperText>Recommended space between 3 numbers segment in your phone number</FormHelperText>
      </FormControl>
      <Button type="submit" mt='1rem' colorScheme='orange'>Create Customer</Button>
    </Box>
   )

   return {
    FormComponent,
    formValue: {
      fullName,
      phoneNumber,
      id: 0,
      vehicles: [],
      maintenances: [],
      url: "",
      type: "customer"
    },
   }
}

export default useCustomerForm