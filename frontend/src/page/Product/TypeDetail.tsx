import { useParams } from "react-router-dom"
import Detail from "../../components/Detail"
import { useMutation, useQuery } from "react-query";
import { getType, updateType } from "../../services/typeService";
import useTypeForm from "../../hooks/useTypeForm";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Type } from "../../types";

const TypeDetail = () => {
  const { id } = useParams();

  const [type, setType] = useState<Type>()

  const { isLoading, data: response } = useQuery(['type-' + id, id], getType)
  const updateTypeMutation = useMutation(updateType);
  const { FormComponent, formValue } = useTypeForm({ type, isUpdate: true });

  useEffect(() => {
    if (response && response.data) {
      setType(response.data)
    }
  }, [response])

  const onSubmit = () => {
    if (formValue) {
      updateTypeMutation.mutate(formValue);
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Detail title="Type Detail" onSubmit={onSubmit}>
      {FormComponent}
    </Detail>
  )
}

export default TypeDetail;