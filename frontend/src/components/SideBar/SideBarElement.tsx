import { Flex, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface SideBarElementProps {
  icon: IconType;
  children: string;
  to: string;
}

const SideBarElement = ({ icon, children, to} : SideBarElementProps) => (
  <ListItem>
    <Button variant='ghost' borderRadius='0px' padding='0' w='100%' justifyContent='flex-start'>
      <Flex paddingX='1rem' fontSize='0.9rem' fontWeight='normal' alignItems='center' gap='0.3rem' color='red.500'>
        <ListIcon as={icon}></ListIcon>
        {children}
      </Flex>
    </Button>
  </ListItem>
)

export default SideBarElement;