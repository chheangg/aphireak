import { useParams } from "react-router-dom"
import Detail from "../../components/Detail"
import { useEffect, useState } from "react"
import { Customer } from "../../types"
import { useMutation, useQuery } from "react-query"
import { getCustomer, updateCustomer } from "../../services/customerService"
import Loading from "../../components/Loading"
import useCustomerForm from "../../hooks/useCustomerForm"

const CustomerDetail = () => {
  const { id } = useParams()
  const [customer, setCustomer] = useState<Customer>();

  const { isLoading, data : response } = useQuery(['customer-' + id, id], getCustomer);
  const updateCustomerMutation = useMutation(updateCustomer)

  const { FormComponent, formValue } = useCustomerForm({ customer, isUpdate: true })

  useEffect(() => {
    if (response && response.data) {
      setCustomer(response.data)
    }
  }, [response])

  const onSubmit = () => {
    if (formValue) {
      updateCustomerMutation.mutate(formValue)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Detail title="Customer Detail" onSubmit={onSubmit}>
      {FormComponent}
    </Detail>
  )
}

export default CustomerDetail;