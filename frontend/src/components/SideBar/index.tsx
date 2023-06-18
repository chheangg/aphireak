import { List } from "@chakra-ui/react";

interface SidebarProps {
  children: string | JSX.Element | JSX.Element[];
}

const SideBar = ({ children } : SidebarProps) => (
  <List spacing='0' borderRight='1px solid' borderColor='gray.300' minH='100%' py='1rem'>
    {children}
  </List>
)

export default SideBar;