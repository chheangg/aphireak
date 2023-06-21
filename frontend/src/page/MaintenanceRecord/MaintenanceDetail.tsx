import { useMutation, useQuery } from "react-query";
import Detail from "../../components/Detail";
import useMaintenanceForm from "../../hooks/useMaintenanceForm";
import { getMaintenance, updateMaintenance } from "../../services/maintenanceService";
import { useParams } from "react-router-dom";
import { CustomerListElement, Maintenance } from "../../types";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const MaintenanceDetail = () => {
  const { id } = useParams();

  const tag = 'maintenance-' + id;

  const [maintenance, setMaintenance] = useState<Maintenance>();

  const { isLoading, data: response } = useQuery([tag, id], getMaintenance)
  const updateMaintenanceMutation = useMutation(updateMaintenance);

  const { FormComponent, formValue } = useMaintenanceForm({ maintenance ,isUpdate: true });

  useEffect(() => {
    if (response && response.data) {
      setMaintenance(response.data);
    }
  }, [response])

  const onSubmit = () => {
    if (formValue) {
      if (formValue.customer.vehicles) {
        formValue.customer as CustomerListElement
        formValue.customer.vehicles = []
      }

      formValue.serviceDetails.forEach(sd => typeof sd.id === 'string' ? sd.id = 0 : null);

      updateMaintenanceMutation.mutate(formValue)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Detail title='Maintenance Record Detail / Edit' onSubmit={onSubmit}>
      {FormComponent}
    </Detail>
  )
}
export default MaintenanceDetail;