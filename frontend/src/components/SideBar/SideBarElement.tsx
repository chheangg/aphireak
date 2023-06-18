import { Flex, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface SideBarElementProps {
  icon: IconType;
  children: string;
  to: string;
}

const SideBarElement = ({ icon, children, to} : SideBarElementProps) => {
  const navigate = useNavigate();
  return (
    <ListItem>
    <Button 
      variant='ghost' 
      borderRadius='0px' 
      padding='0' w='100%' 
      justifyContent='flex-start' 
      color='gray.800' 
      _hover={{ bgColor: 'gray.100', color: 'gray.900' }}
      onClick={() => navigate(to)}
      >
      <Flex paddingX='1rem' fontSize='0.9rem' fontWeight='normal' alignItems='center' gap='0.5rem'>
        <ListIcon as={icon} color='orange.300' fontSize='1.2rem'></ListIcon>
        {children}
      </Flex>
    </Button>
  </ListItem>
  )
}

export default SideBarElement;