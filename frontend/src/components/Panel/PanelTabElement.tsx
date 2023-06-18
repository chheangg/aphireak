import { Flex, Icon, Button } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PanelTabElementProps {
  icon: IconType,
  children: string;
  onClick: () => void;
  isSelected: boolean;
}

const PanelTabElement = ({ children, icon, onClick, isSelected } : PanelTabElementProps) => (
  <Button
    bgColor={isSelected ? 'orange.400' : 'orange.300'}
    variant='ghost' 
    borderTopRadius='15px' 
    borderBottomRadius='0'
    padding='0' w='25ch' 
    justifyContent='flex-start' 
    color='gray.800' 
    _hover={{ bgColor: isSelected ? 'orange.400' : 'orange.300'}}
    onClick={onClick}
  >
    <Flex paddingX='1rem' fontSize='0.9rem' fontWeight='normal' alignItems='center' gap='0.75rem'>
      <Icon as={icon} color='gray.50' fontSize='1.2rem'></Icon>
      {children}
    </Flex>
  </Button>
)

export default PanelTabElement;