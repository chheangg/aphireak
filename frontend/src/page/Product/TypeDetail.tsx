import { useParams } from "react-router-dom"
import Detail from "../../components/Detail"
import { useQuery } from "react-query";
import { getType } from "../../services/typeService";
import useTypeForm from "../../hooks/useTypeForm";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Type } from "../../types";

const TypeDetail = () => {
  const { id } = useParams();

  const [type, setType] = useState<Type>()

  const { isLoading, data: response } = useQuery(['type-' + id, id], getType)
  const { FormComponent, formValue } = useTypeForm({ type, isUpdate: true });

  useEffect(() => {
    if (response && response.data) {
      setType(response.data)
    }
  }, [response])

  const onSubmit = () => {
    console.log(formValue)
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