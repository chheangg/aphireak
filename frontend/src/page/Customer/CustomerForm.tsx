import { Customer } from "../../types";
import { useMutation } from "react-query";
import { createCustomer } from "../../services/customerService";
import Form from "../../components/Form";

import useCustomer from "../../hooks/useCustomerForm";

const CustomerForm = () => {
    const { FormComponent, formValue } = useCustomer();
    const newCustomerMutation = useMutation(createCustomer);

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