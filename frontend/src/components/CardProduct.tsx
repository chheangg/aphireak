import { Card, CardBody, Text, Editable, EditablePreview, EditableInput, Box, Grid, Flex, Divider, Button } from "@chakra-ui/react";
import { MaintenanceDetail } from "../types";
import { MdClose } from 'react-icons/md'
import { useEffect, useState } from "react";

interface CardProductProp {
  maintenanceDetail: MaintenanceDetail;
  onRemove: (id: string) => void;
  onChange: (id: string, md: MaintenanceDetail) => void;
}

const CardProduct = ({ maintenanceDetail, onRemove, onChange } : CardProductProp) => {
  const [quantity, setQuantity] = useState<number>(maintenanceDetail.quantity);
  const [price, setPrice] = useState<number>(maintenanceDetail.priceInCent / 100);

  useEffect(() => {
    if ((quantity !== maintenanceDetail.quantity || price * 100 !== maintenanceDetail.priceInCent) && maintenanceDetail.id) {
      onChange(maintenanceDetail.id.toString(), {
        ...maintenanceDetail,
        quantity,
        priceInCent: price * 100
      })
    }
  }
  , [quantity, price])

  return (
    <Card bgColor='orange.300'>
      <CardBody>
        <Grid templateColumns='auto 100px' alignItems='center'>
          <Text color='gray.50' fontSize='1rem' fontWeight='bold'>{typeof maintenanceDetail.product !== 'number' ?  maintenanceDetail.product.name : ''}</Text>
          <Button colorScheme='red' bgColor='red.500' color='gray.50' leftIcon={<MdClose />} onClick={() => onRemove(maintenanceDetail.id ? maintenanceDetail.id.toString() : '')}>Remove</Button>
        </Grid>
        <Divider my='1rem' />
        <Grid templateColumns='1fr 1fr' gap='1.5rem' fontSize='1rem'>
          <Flex gap='1rem' alignItems='center'>
            <Text fontSize='1.25rem' color='gray.50'>Quantity</Text>
            <Box borderRadius='8px' border='1px solid' borderColor='gray.300'  px='0.5rem' bgColor='gray.50' justifySelf='end'>
              <Editable color='black' defaultValue={`${quantity}`}>
                  <EditablePreview />
                  <EditableInput onChange={e => setQuantity(parseFloat(e.currentTarget.value))} />
              </Editable>
            </Box>
          </Flex>
          <Grid justifyContent='flex-end' templateColumns='1fr 1fr' gap='1rem' alignItems='center'>
            <Text justifySelf='flex-end' fontSize='1.25rem' color='gray.50'>Price ($) </Text>
            <Box borderRadius='8px' border='1px solid' borderColor='gray.300' px='0.5rem' bgColor='gray.50' justifySelf='end'>
              <Editable color='black' defaultValue={`${(price).toFixed(2)}`}>
                <EditablePreview />
                <EditableInput onChange={e => setPrice(parseFloat(e.currentTarget.value))} />
              </Editable>
            </Box>
          </Grid>
        </Grid>
      </CardBody>
    </Card>
  );
}

export default CardProduct