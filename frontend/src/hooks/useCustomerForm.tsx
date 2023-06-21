import { FormControl, FormLabel, Input, FormHelperText, Button, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Customer } from "../types";

interface CustomerFormHook {
  FormComponent: JSX.Element | JSX.Element[];
  formValue: Customer;
}

interface CustomerFormProps {
  customer?: Customer;
  isUpdate: boolean;
}

const useCustomerForm = ({ customer, isUpdate } : CustomerFormProps) : CustomerFormHook => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  useEffect(() => {
    if (customer) {
      setFullName(customer.fullName);
      setPhoneNumber(customer.phoneNumber);
    }
  }, [customer])

  const FormComponent = (
    <Box>
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="John Appleseed" value={fullName}
          onChange={(e : React.FormEvent<HTMLInputElement>) => setFullName(e.currentTarget.value)}
        ></Input>
        <FormHelperText>Enter customer full name correctly!</FormHelperText>
      </FormControl>
      <FormControl mt='1rem'>
        <FormLabel>Phone Number</FormLabel>
        <Input type='tel' placeholder="Ex: 012 123 345" value={phoneNumber}
          onChange={(e : React.FormEvent<HTMLInputElement>) => setPhoneNumber(e.currentTarget.value)}
        ></Input>
        <FormHelperText>Recommended space between 3 numbers segment in your phone number</FormHelperText>
      </FormControl>
      <Button type="submit" mt='1rem' colorScheme='orange'>{isUpdate ? 'Update' : 'Create'} Customer</Button>
    </Box>
   )

   return {
    FormComponent,
    formValue: {
      fullName,
      phoneNumber,
      id: customer ? customer.id : 0,
      vehicles: [],
      maintenances: [],
      url: "",
      type: "customer"
    },
   }
}

export default useCustomerForm