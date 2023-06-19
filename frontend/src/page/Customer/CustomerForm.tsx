import { FormControl, FormHelperText, FormLabel, Input, Button } from "@chakra-ui/react";
import Form from "../../components/Form";
import { Customer } from "../../types";
import { ReactEventHandler, useState } from "react";
import { useMutation } from "react-query";
import { createCustomer } from "../../services/customerService";

const CustomerForm = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const newCustomerMutation = useMutation(createCustomer);

  const onSubmit = async () => {
    const newCustomer : Customer = {
      id: 0,
      fullName,
      phoneNumber,
      vehicles: [],
      maintenances: [],
      url: "",
      type: "customer"
    }

    newCustomerMutation.mutate(newCustomer);
  };

  return (
    <Form onSubmit={onSubmit} title="Customer Creation">
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input
          onChange={(e : React.FormEvent<HTMLInputElement>) => setFullName(e.currentTarget.value)}
        ></Input>
        <FormHelperText>Enter customer full name correctly!</FormHelperText>
      </FormControl>
      <FormControl mt='1rem'>
        <FormLabel>Phone Number</FormLabel>
        <Input type='tel' 
          onChange={(e : React.FormEvent<HTMLInputElement>) => setPhoneNumber(e.currentTarget.value)}
        ></Input>
        <FormHelperText>Recommended space between 3 numbers segment in your phone number</FormHelperText>
      </FormControl>
      <Button type="submit" mt='1rem' colorScheme='orange'>Create Customer</Button>
    </Form>
  )
}

export default CustomerForm;