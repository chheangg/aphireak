import { CustomerListElement, Vehicle } from "../types";
import { 
  Box,
  FormControl, 
  FormLabel, 
  Radio, 
  RadioGroup,
  Stack, 
  Input, 
  FormHelperText, 
  Flex, 
  Grid, 
  Heading, 
  chakra, 
  SimpleGrid, 
  Switch, 
  Button,
 } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getAllCustomers } from "../services/customerService";
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from "@choc-ui/chakra-autocomplete";

interface VehicleFormHook {
  FormComponent: JSX.Element | JSX.Element[];
  formValue: Vehicle;
}

const useVehicleForm = () : VehicleFormHook => {
  const [query, setQuery] = useState<string>("");
  const customerQuery = useQuery(['form-customer-list', query], getAllCustomers, {
    enabled: query !== "",
  });

  const [queriedCustomer, setQueriedCustomer] = useState<CustomerListElement[]>();

  const [nextService, setNextService] = useState<Date>(new Date(Date.now()))
  const [vehicleName, setVehicleName] = useState<string>("")
  const [vehicleType, setVehicleType] = useState<string>("")
  const [plateNumber, setPlateNumber] = useState<string>("")
  const [oilType, setOilType] = useState<string>("")
  const [other, setOther] = useState<string>("")
  const [changeEngineOil, setChangeEngineOil] = useState<boolean>(false);
  const [changeOilFilter, setChangeOilFilter] = useState<boolean>(false);
  const [changeCoolant, setChangeCoolant] = useState<boolean>(false);
  const [changeBrakeFluid, setChangeBrakeFluid] = useState<boolean>(false);
  const [changeAirFilter, setChangeAirFilter] = useState<boolean>(false);
  const [changeTransmission, setChangeTransmission] = useState<boolean>(false)
  const [carCheckup, setCarCheckup] = useState<boolean>(false);
  const [customer, setCustomer] = useState<CustomerListElement>();

  useEffect(() => {
    if (customerQuery.data && customerQuery.data.data) {
      setQueriedCustomer(customerQuery.data.data.data);
      console.log(customerQuery.data.data.data)
    }
  }, [customerQuery.data])


  const FormComponent = (
    <Box>
      <Flex gap='1rem'>
        <FormControl>
          <FormLabel>Next Service Date</FormLabel>
          <Input onChange={(e) => setNextService(new Date(e.currentTarget.value))} type='date'></Input>
          <FormHelperText>Enter the next date for a service checkup for the vehicle!</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Vehicle Name</FormLabel>
          <Input onChange={(e) => setVehicleName(e.currentTarget.value)} placeholder="Lexus 570 Kuro 2023"></Input>
          <FormHelperText>Enter the Vehicle brand name, make name, series/edition and year of production</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Plate Number</FormLabel>
          <Input onChange={(e) => setPlateNumber(e.currentTarget.value)} placeholder="PP 2AA-4421"></Input>
          <FormHelperText>Enter the province and input the vehicle plate number accordingly</FormHelperText>
        </FormControl>
      </Flex>
      <Grid mt='1rem' templateColumns='1fr 1fr 1fr'>
        <FormControl flexGrow='0'>
          <FormLabel>Vehicle Type</FormLabel>
          <RadioGroup onChange={setVehicleType} colorScheme="orange"> 
            <Stack py='0.5rem' direction='row' gap='2rem'>
              <Radio value='car'>Car</Radio>
              <Radio value='moto'>Motocycle</Radio>
              <Radio value='truck'>Truck</Radio>
            </Stack>
          </RadioGroup>
          <FormHelperText>Select the correct vehicle type!</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Owner (The Customer)</FormLabel>
          <AutoComplete openOnFocus> 
            <AutoCompleteInput onChange={e => setQuery(e.currentTarget.value)} />
            <AutoCompleteList>
            {
                queriedCustomer ?
                  queriedCustomer.map(c =>
                    <AutoCompleteItem 
                      key={c.id} 
                      value={c.fullName}
                      onClick={() => setCustomer(c)}
                    >
                      {c.fullName}
                    </AutoCompleteItem> 
                  )
                  :
                  null
              }
            </AutoCompleteList>
          </AutoComplete>
          <FormHelperText>Select the correct owner of the vehicle</FormHelperText>
        </FormControl>
      </Grid>
      <Heading mt='2rem' color='orange.400' fontSize='1.5rem' as={chakra.h3}>
        Service Details
      </Heading>
      <Grid mt='1rem' gap='1rem' templateColumns='1fr 2fr'>
        <FormControl>
          <FormLabel>Oil Type</FormLabel>
          <Input onChange={(e) => setOilType(e.currentTarget.value)} placeholder="Ex: 50W-90" />
          <FormHelperText>Input only the oil preference of a car!</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Other</FormLabel>
          <Input onChange={(e) => setOther(e.currentTarget.value)} placeholder="" />
          <FormHelperText>Enter other relevant information for the vehicle! </FormHelperText>
        </FormControl>
      </Grid>
      <FormControl mt='1rem' as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
        <FormLabel htmlFor='engineOil'>Change Engine Oil</FormLabel>
        <Switch 
          isChecked={changeEngineOil} 
          onChange={e => setChangeEngineOil(!changeEngineOil)}
          id='engineOil'
        />
        <FormLabel htmlFor='oilFilter'>Change Oil Filter</FormLabel>
        <Switch 
          isChecked={changeOilFilter} 
          onChange={e => setChangeOilFilter(!changeOilFilter)}
          id='oilFilter'
        />

        <FormLabel htmlFor='coolant'>Change Coolant</FormLabel>
        <Switch 
          isChecked={changeCoolant} 
          onChange={e => setChangeCoolant(!changeCoolant)}
          id='coolant' 
        />

        <FormLabel htmlFor="brakeFluid">Change Brake fluid</FormLabel>
        <Switch 
          isChecked={changeBrakeFluid} 
          onChange={e => setChangeBrakeFluid(!changeBrakeFluid)}
          id="brakeFluid" 
        />

        <FormLabel htmlFor="airFilter">Change Air filter</FormLabel>
        <Switch 
          isChecked={changeAirFilter} 
          onChange={e => setChangeAirFilter(!changeAirFilter)}
          id="airFilter"
        />

        <FormLabel htmlFor="transmission">Change Transmission Oil</FormLabel>
        <Switch 
          isChecked={changeTransmission}
          onChange={e => setChangeTransmission(!changeTransmission)}
          id="transmission" 
        />
        <FormLabel htmlFor="checkup">Car checkup</FormLabel>
        <Switch
          isChecked={carCheckup}
          onChange={e => setCarCheckup(!carCheckup)}
          id="checkup" 
        />
      </FormControl>
      <Button type="submit" mt='1rem' colorScheme='orange'>Create Vehicle</Button>
    </Box>
  )

  return {
    FormComponent,
    formValue: {
      id: 0,
      nextService,
      vehicleName,
      vehicleType,
      vehicleOwner: "",
      serviceDetail: {
        oilType,
        carCheckup,
        other,
        changeEngineOil,
        changeAirFilter,
        changeBrakeFluid,
        changeCoolant,
        changeOilFilter,
        changeTransmission
      },
      customer,
      plateNumber,
      url: "",
      type: "vehicle"
    }
  }
}

export default useVehicleForm