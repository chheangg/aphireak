import Form from "../../components/Form";
import { Type } from "../../types";
import { createType } from "../../services/typeService";
import { useMutation } from "react-query";
import useTypeForm from "../../hooks/useTypeForm";

const TypeForm = () => {
  const { FormComponent, formValue } = useTypeForm();
  const newTypeMutation = useMutation(createType);

  const onSubmit = async () => {
    newTypeMutation.mutate(formValue);
  };

  return (
    <Form onSubmit={onSubmit} title="Type Category Creation">
      { FormComponent }
    </Form>
  )
}

export default TypeForm;