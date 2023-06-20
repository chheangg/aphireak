import { Grid } from "@chakra-ui/react";

interface MainLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

// Default Template Layout
const MainLayout = ({ children } : MainLayoutProps) => (
  <Grid gridTemplateColumns='25ch 1fr' flex='1' maxH='100%' h='95vh'>
    {children}
  </Grid>
)

export default MainLayout;