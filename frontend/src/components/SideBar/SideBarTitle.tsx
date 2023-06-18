import { ListItem } from "@chakra-ui/react";

interface SideBarTitleProps {
  children: string;
}

const SideBarTitle = ({ children } : SideBarTitleProps) => (
  <ListItem paddingX='1rem' paddingY='0.25rem' fontSize='0.85rem' fontWeight='bold'>
    {children}
  </ListItem>
)

export default SideBarTitle;