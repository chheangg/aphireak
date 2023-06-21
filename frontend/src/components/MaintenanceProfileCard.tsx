import { Card, CardBody, CardHeader, Heading, chakra, Text, Icon, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdPerson4, MdVerified } from "react-icons/md";
import { IoMdCar } from "react-icons/io"
import { GiScooter } from "react-icons/gi";
import { FaTruckMoving, FaCarSide } from "react-icons/fa"

interface MaintenanceProfileCardProp {
  customerName: string;
  accountName: string;
  vehicleName: string;
  vehicleType: string;
}

const vehicleIconEnum = (vehicleType: string) : IconType => {
  switch(vehicleType) {
    case 'truck':
      return FaTruckMoving;
    case 'moto':
      return GiScooter;
    case 'car':
    default:
      return FaCarSide;
  }
}

const MaintenanceProfileCard = ({ customerName, accountName, vehicleName, vehicleType } : MaintenanceProfileCardProp) => (
  <Card>
    <CardHeader display='flex' alignItems='center' gap='1rem' p='0' pt='1rem' px='1rem'>
      <Icon as={MdPerson4} fontSize='2rem' color='orange.400'></Icon>
      <Heading as={chakra.h2} color='orange.300'>{customerName}</Heading>
    </CardHeader>
    <CardBody p='0' px='1rem' pt='0.5rem' pb='1rem'>
      <Flex display='flex' alignItems='center' gap='1rem'>
        <Icon as={MdVerified} fontSize='1.5rem' color='green.400'></Icon>
        <Text fontSize='1.5rem' fontWeight='light'>{accountName}</Text>
      </Flex>
      <Flex display='flex' alignItems='center' gap='1rem'> 
       <Icon as={vehicleIconEnum(vehicleType)} fontSize='1.5rem' color='green.400'></Icon>
        <Text fontSize='1.5rem' fontWeight='light'>{vehicleName}</Text>
      </Flex>
    </CardBody>
  </Card>
)

export default MaintenanceProfileCard;