import { Customer } from "../../types";
import { useMutation } from "react-query";
import { createCustomer } from "../../services/customerService";
import Form from "../../components/Form";

import useCustomer from "../../hooks/useCustomerForm";

const CustomerForm = () => {
  const newCustomerMutation = useMutation(createCustomer);

  const { FormComponent, formValue } = useCustomer({ isUpdate: false });

  const onSubmit = async () => {
    newCustomerMutation.mutate(formValue);
  };

  return (
    <Form onSubmit={onSubmit} title="Customer Creation">
      {FormComponent}
    </Form>
  )
  }

export default CustomerForm;