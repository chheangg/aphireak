import { Box } from "@chakra-ui/react"

interface NavbarProps {
  children: string | JSX.Element | JSX.Element[];
}

const Navbar = ({ children } : NavbarProps) => (
  <Box borderBottom='1px solid' borderColor='gray.300' px='1rem' py='0.75rem' h='10vh'>
    {children}
  </Box>
)

export default Navbar;
