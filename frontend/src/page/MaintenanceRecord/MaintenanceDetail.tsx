import { useMutation, useQuery } from "react-query";
import Detail from "../../components/Detail";
import useMaintenanceForm from "../../hooks/useMaintenanceForm";
import { createMaintenance, getMaintenance, updateMaintenance } from "../../services/maintenanceService";
import { useParams } from "react-router-dom";
import { CustomerListElement, Maintenance } from "../../types";
import { useEffect, useState } from "react";
import { Flex, Spinner} from "@chakra-ui/react";

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

      console.log(formValue)
      updateMaintenanceMutation.mutate(formValue)
    }
  }

  if (isLoading) {
    return (
      <Flex justifyContent='center'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='green.400'
          size='32'
        />
      </Flex>
    )
  }

  return (
    <Detail title='Maintenance Record Detail / Edit' onSubmit={onSubmit}>
      {FormComponent}
    </Detail>
  )
}
export default MaintenanceDetail;