import { Box, Grid } from "@chakra-ui/react"

interface NavbarProps {
  children: string | JSX.Element | JSX.Element[];
}

const Navbar = ({ children } : NavbarProps) => (
  <Box borderBottom='1px solid' borderColor='gray.300' px='1rem' py='0.75rem'>
    <Grid templateColumns='1fr 1fr'>
      {children}
    </Grid>
  </Box>
)

export default Navbar;
