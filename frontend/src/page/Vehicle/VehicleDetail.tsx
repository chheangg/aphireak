import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getVehicle, updateVehicle } from "../../services/vehicleService";
import { Vehicle } from "../../types";
import Detail from "../../components/Detail";
import useVehicleForm from "../../hooks/useVehicleForm";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const VehicleDetail = () => {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState<Vehicle>();

  const { isLoading, data: response } = useQuery(['vehicle-' + id, id], getVehicle)
  const updateVehicleMutation = useMutation(updateVehicle);

  const { FormComponent, formValue } = useVehicleForm({ vehicle, isUpdate: true })

  useEffect(() => {
    if (response && response.data) {
      setVehicle(response.data);
    }
  }, [response])

  const onSubmit = () => {
    if (formValue) {
      updateVehicleMutation.mutate(formValue);
    }
  }
  
  if (isLoading) {
    return <Loading />
  }

  return (
    <Detail title="Vehicle Detail" onSubmit={onSubmit}>
      {FormComponent}
    </Detail>
  )


}

export default VehicleDetail;