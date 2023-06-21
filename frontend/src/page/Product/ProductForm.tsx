import { Product } from "../../types";
import { useMutation } from "react-query";
import { createProduct } from "../../services/productService";
import useProductForm from "../../hooks/useProductForm";
import Form from "../../components/Form";

const ProductForm = () => {
  const { FormComponent, formValue, type } = useProductForm({ isUpdate: false });
  const newProductMutation = useMutation(createProduct);

  const onSubmit = async () => {
    if (formValue && type) {
      newProductMutation.mutate(formValue);
    }
  };

  return (
    <Form onSubmit={onSubmit} title="Product Creation">
      { FormComponent }
    </Form>
  )
}

export default ProductForm;