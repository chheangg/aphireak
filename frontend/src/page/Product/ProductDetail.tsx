import { useEffect, useState } from "react"
import Detail from "../../components/Detail"
import { Product } from "../../types"
import { getProduct, updateProduct } from "../../services/productService";
import { useMutation, useQuery } from "react-query";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import useProductForm from "../../hooks/useProductForm";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  const { isLoading, data: response } = useQuery(['product-' + id, id], getProduct)
  const updateProductMutation = useMutation(updateProduct)

  const { FormComponent, formValue, type } = useProductForm({ product, isUpdate: true })

  useEffect(() => {
    if (response && response.data) {
      setProduct(response.data)
    }
  }, [response])

  const onSubmit = () => {
    if (type && formValue) {
      updateProductMutation.mutate(formValue)
    }
  }

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <Detail title="Product Detail" onSubmit={onSubmit}>
      {FormComponent}
    </Detail>
  )
}

export default ProductDetail;