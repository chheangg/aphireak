import useVehicleForm from "../../hooks/useVehicleForm";
import { useMutation } from "react-query";
import Form from "../../components/Form";
import { createVehicle } from "../../services/vehicleService";

const VehicleForm = () => {
  const { FormComponent, formValue } = useVehicleForm();
  const newVehicleMutation = useMutation(createVehicle);

  const onSubmit = () => {
    console.log(formValue);
    newVehicleMutation.mutate(formValue);
  }

  return (
    <Form title="Vehicle Creation" onSubmit={onSubmit}>
      {FormComponent}
    </Form>
  )
}

export default VehicleForm;