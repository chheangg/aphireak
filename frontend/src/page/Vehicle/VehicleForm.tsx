import useVehicleForm from "../../hooks/useVehicleForm";
import { useMutation } from "react-query";
import Form from "../../components/Form";
import { createVehicle } from "../../services/vehicleService";

const VehicleForm = () => {
  const { FormComponent, formValue } = useVehicleForm({ isUpdate: false });
  const newVehicleMutation = useMutation(createVehicle);

  const onSubmit = () => {
    newVehicleMutation.mutate(formValue);
  }

  return (
    <Form title="Vehicle Creation" onSubmit={onSubmit}>
      {FormComponent}
    </Form>
  )
}

export default VehicleForm;