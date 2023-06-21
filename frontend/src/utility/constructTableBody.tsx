import { Tr, Td, Link, Button, Box, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { Data, MaintenanceListElement, CustomerListElement, ProductListElement, TypeListElement, VehicleListElement } from "../types";
import { Link as ReachLink, useNavigate } from "react-router-dom";

export const constructTableBody = (data: Data[]) : JSX.Element | JSX.Element[] | null => {
  const navigate = useNavigate();
  if (data[0]) {
    switch(data[0].type) {
      case 'maintenance':
        return data
          .map(d => d as MaintenanceListElement)
          .map(d =>
            <Tr key={d.id} onClick={() => navigate('/maintenances/' + d.id)} _hover={{ outline: '1px solid', outlineColor: 'green.400', borderRadius: '5px' }}>
                <Td>{d.vehicleName}</Td>
                <Td>{d.customerName}</Td>
                <Td>{d.accountName}</Td>
                <Td isNumeric>$ {(d.totalCostInCent / 100).toFixed(2)}</Td>
                <Td>{d.paid ? 'paid' : 'unpaid'}</Td>
                <Td>
                  <Button colorScheme="green">
                    <Link as={ReachLink} to={'/maintenances/' + d.id}>Detail/Edit</Link>
                  </Button>
                </Td>
                <Td></Td>
            </Tr>  
          );
      case 'customer':
        return data
        .map(d => d as CustomerListElement)
        .map(d =>
          <Tr key={d.id} onClick={() => navigate('/customers/' + d.id)} _hover={{ outline: '1px solid', outlineColor: 'green.400', borderRadius: '5px' }}>
            <Td><Link as={ReachLink} to={'/customers/' + d.id} color='orange.400'>{d.fullName}</Link></Td>
            <Td>{d.phoneNumber}</Td>
            <Td>{d.numberOfVehicles}</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Button colorScheme="green">
                <Link as={ReachLink} to={'/customers/' + d.id}>Detail/Edit</Link>
              </Button>
            </Td>
          </Tr>  
        );
      case 'product':
        return data
        .map(d => d as ProductListElement)
        .map(d =>
          <Tr key={d.id} onClick={() => navigate('/products/' + d.id)} _hover={{ outline: '1px solid', outlineColor: 'green.400', borderRadius: '5px' }}>
            <Td>{d.name}</Td>
            <Td>{d.typeName}</Td>
            <Td isNumeric>$ {(d.priceInCent / 100).toFixed(2)}</Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Button colorScheme="green">
                <Link as={ReachLink} to={'/products/' + d.id}>Detail/Edit</Link>
              </Button>
            </Td>
            <Td></Td>
          </Tr>  
        );
      case 'type':
        return data
        .map(d => d as TypeListElement)
        .map(d =>
          <Tr key={d.id} onClick={() => navigate('/types/' + d.id)} _hover={{ outline: '1px solid', outlineColor: 'green.400', borderRadius: '5px' }}>
            <Td>{d.name}</Td>
            <Td>{d.numberOfProducts} products</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Button colorScheme="green">
                <Link as={ReachLink} to={'/types/' + d.id}>Detail/Edit</Link>
              </Button>
            </Td>
            <Td></Td>
          </Tr>  
        );
      case 'vehicle':
        return data
        .map(d => d as VehicleListElement)
        .map(d =>
          <Tr key={d.id} onClick={() => navigate('/vehicles/' + d.id)} _hover={{ outline: '1px solid', outlineColor: 'green.400', borderRadius: '5px' }}  >
            <Td><Link as={ReachLink} to={'/vehicles/' + d.id} color='orange.400'>{d.vehicleName}</Link></Td>
            <Td>{d.type}</Td>
            <Td>{d.plateNumber}</Td>
            <Td>{format(d.nextService, "do MMMMMMM, yyyy")}</Td>
            <Td>{d.vehicleOwner}</Td>
            <Td>
              <Button colorScheme="green">
                <Link as={ReachLink} to={'/customers/' + d.id}>Detail/Edit</Link>
              </Button>
            </Td>
            <Td></Td>
          </Tr>  
        );
      default:
        return null;
    }
  }
  return (
    <Tr>
      <Td colSpan={7}>
        <Text textAlign='center' fontSize='lg' color='gray.500'>Empty...</Text>
      </Td>
    </Tr>
  )
}