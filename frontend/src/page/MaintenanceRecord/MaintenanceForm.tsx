import { useMutation } from "react-query";
import Form from "../../components/Form";
import useMaintenanceForm from "../../hooks/useMaintenanceForm";
import { createMaintenance } from "../../services/maintenanceService";

const MaintenanceForm = () => {
  const { FormComponent, formValue } = useMaintenanceForm();
  const newMaintenanceMutation = useMutation(createMaintenance);

  const onSubmit = () => {
    console.log(formValue)
    formValue.serviceDetails.forEach(md => delete md.id);
    newMaintenanceMutation.mutate(formValue);
  }

  return (
    <Form title="Maintenance Record Form" onSubmit={onSubmit}>
      {FormComponent}
    </Form>
  )
}
export default MaintenanceForm;