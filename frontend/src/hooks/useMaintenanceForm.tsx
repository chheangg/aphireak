import { 
  Box,
  FormControl, 
  FormLabel,
  Flex,
  Select,
  FormHelperText,
  Heading,
  chakra,
  Grid,
  Text,
  Switch,
  Button
 } from "@chakra-ui/react"
import { Account, Customer, CustomerListElement, Maintenance, MaintenanceDetail, ProductListElement, Vehicle, VehicleListElement } from "../types"
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from "@choc-ui/chakra-autocomplete";
import { useQuery } from "react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { getAllCustomers, getCustomer } from "../services/customerService";
import { getAllProducts } from "../services/productService";
import CardProduct from "../components/CardProduct";
import { v4 as uuidv4 } from 'uuid';
import MaintenanceProfileCard from "../components/MaintenanceProfileCard";

interface MaintenanceFormHook {
  FormComponent: JSX.Element | JSX.Element[];
  formValue: Maintenance | null;
}

interface MaintenanceFormProp {
  maintenance?: Maintenance;
  isUpdate: boolean;
}

const useMaintenanceForm = ({ maintenance, isUpdate } : MaintenanceFormProp) : MaintenanceFormHook => {
  const [query, setQuery] = useState<string>("");
  const [productQueryField, setProductQueryField] = useState<string>('')

  const customerQuery = useQuery(['maintainance-customer-list', query], getAllCustomers, {
    enabled: query !== "",
  });

  const productQuery = useQuery(['maintenance-product-list', productQueryField], getAllProducts, {
    enabled: productQueryField !== "",
  })

  const [queriedCustomer, setQueriedCustomer] = useState<CustomerListElement[]>([]);
  const [queriedProduct, setQueriedProduct] = useState<ProductListElement[]>([]);
  const [customer, setCustomer] = useState<CustomerListElement | Customer>();
  const [vehicle, setVehicle] = useState<VehicleListElement>();
  const [serviceDetails, setServiceDetails] = useState<MaintenanceDetail[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [paid, setPaid] = useState<boolean>(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  const [timestamp, setTimestamp] = useState<Date>(new Date(Date.now()));
  const [account, setAccount] = useState<Account>({ id: 2, username: 'testing' });

  const customerTag = customer ? 'customer' + customer.fullName : '';

  const customerDetail = useQuery([customerTag, `${customer?.id}`], getCustomer, {
    enabled: customer !== undefined && customer !== null
  })

  useEffect(() => {
    if (customerQuery.data && customerQuery.data.data) {
      setQueriedCustomer(customerQuery.data.data.data);
    }
  }, [customerQuery.data])

  useEffect(() => {
    if (productQuery.data && productQuery.data.data) {
      setQueriedProduct(productQuery.data.data.data);
    }
  }, [productQuery.data])

  useEffect(() => {
    if (customerDetail.data && customerDetail.data.data) {
      setSelectedCustomer(customerDetail.data.data);
    }
  }, [customerDetail.data])

  useEffect(() => {
    const totalPrice: number = serviceDetails.reduce((p, c) => p + c.priceInCent / 100 * c.quantity , 0)
    setTotalPrice(totalPrice)
  }, [serviceDetails])
  
  useEffect(() => {
    if (isUpdate && maintenance && maintenance.customer && maintenance.vehicle) {
      setQueriedCustomer([maintenance.customer as CustomerListElement]);
      setCustomer(maintenance.customer);
      if (maintenance.customer.vehicles) {
        const vehicle = maintenance.customer.vehicles.find(v => v.id === maintenance.vehicle as unknown as number);
        if (vehicle) {
          setVehicle(vehicle)
        }
      }
      setServiceDetails(maintenance.serviceDetails);
      setTotalPrice(maintenance.totalCostInCent / 100);
      setPaid(maintenance.paid)
      setTimestamp(maintenance.timestamp)
    }
  }, [maintenance])


  const removeMaintenanceDetail = (id: string) => {
    setServiceDetails(serviceDetails.filter(md => md.id !== id))
  }

  const updateMaintenanceDetail = (id: string, newMd: MaintenanceDetail) => {
    setServiceDetails(serviceDetails.map(md => md.id === id ? newMd : md))
  }

  const matchVehicle = (e : ChangeEvent<HTMLSelectElement>) : Vehicle | null => {
    if (customerDetail.data) {
      const vehicle = customerDetail.data.data.vehicles.find(v => v.id === parseInt(e.currentTarget.value))
      if (vehicle) return vehicle;
    }

    return null;
  }

  const FormHeader = () => 
    isUpdate && customer && account && vehicle ?
      (
        <MaintenanceProfileCard customerName={customer.fullName} accountName={account.username} vehicleName={vehicle.vehicleName} vehicleType={vehicle.vehicleType} />
      )
      :
      (
        <Flex gap='1.5rem'>
          <FormControl>
            <FormLabel>Find Customer</FormLabel>
            <AutoComplete openOnFocus disableFilter> 
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
            <FormHelperText>Search for customer by their name or phone number</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Vehicle</FormLabel>
            <Select
              placeholder="Select Type" 
              onChange={e => setVehicle(matchVehicle(e) || vehicle)} 
              disabled={customerDetail.isLoading || !customer}
            >
                {
                  selectedCustomer
                  ? selectedCustomer.vehicles.map(v =>
                    <option key={v.id} value={v.id}>
                      {v.vehicleName}
                    </option>
                  )
                  : null
                }
            </Select>
          </FormControl>
        </Flex>
      )

  const FormComponent = (
    <Box>
      <FormHeader />
      <Heading mt='1.5rem' as={chakra.h3} fontSize='1.5rem' color='orange.400'>Product Used</Heading>
      <FormControl mt='1rem'>
        <FormLabel>Find Product</FormLabel>
        <AutoComplete openOnFocus>
          <AutoCompleteInput onChange={e => setProductQueryField(e.currentTarget.value)}></AutoCompleteInput>
          <AutoCompleteList>
            {
              queriedProduct ?
                queriedProduct.map(p => 
                  <AutoCompleteItem 
                    key={p.id} 
                    value={p.name}
                    onClick={() => setServiceDetails([...serviceDetails, { id: uuidv4(), quantity: 1, priceInCent: p.priceInCent, product: p }])}
                  >
                      {p.name}
                    </AutoCompleteItem>)
                  :
                  null
            }
          </AutoCompleteList>
          <FormHelperText>Find the product/service used in the maintenance</FormHelperText>
        </AutoComplete>
      </FormControl>
      <FormControl mt='1rem'>
        <FormLabel>Product lists</FormLabel>
        <FormHelperText>Here are the list of products used. You may alter the quantity, price and remove or add certain products.</FormHelperText>
        <Box mt='1rem' border='1px solid' borderColor='gray.300' borderRadius='5px'>
          <Heading bgColor='orange.400' fontSize='1.5rem' p='0.5rem 1rem' as={chakra.h4}>Invoice</Heading>
          <Grid overflow='scroll' templateColumns='1fr 1fr 1fr' gap='2rem' autoRows='150px' h='40vh' p='1rem 1rem'>
            {
              serviceDetails ?
                serviceDetails.map(md => 
                  <CardProduct key={md.id} onChange={updateMaintenanceDetail} onRemove={removeMaintenanceDetail} maintenanceDetail={md} />
                  )
                : null
            }
          </Grid>
        </Box>
      </FormControl>
      <FormControl mt='1rem'>
        <FormLabel htmlFor="paid">Paid</FormLabel>
        <Switch size='md' id='paid' onChange={() => setPaid(!paid)} isChecked={paid}></Switch>
        <FormHelperText>Is the Maintenance record already paid for?</FormHelperText>
      </FormControl>
      <Flex mt='1rem' gap='1rem' alignItems='center'>
          <Text fontWeight='bold'>Total Cost</Text>
          <Text>${totalPrice.toFixed(2)}</Text>
      </Flex>
      <Button type="submit" mt='1rem' colorScheme='orange'>{isUpdate ? 'Update' : 'Create'} Maintenance Record</Button>
    </Box>
  )

  if (!customer || !vehicle) {
    return {
      FormComponent,
      formValue: null
    }
  }

  return {
    FormComponent,
    formValue: {
      id: maintenance ? maintenance.id : 0,
      customer,
      account,
      vehicle,
      serviceDetails: serviceDetails,
      totalCostInCent: totalPrice * 100,
      paid,
      timestamp,
      url: ""
    }
  }
}

export default useMaintenanceForm;