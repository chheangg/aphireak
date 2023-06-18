import { Grid } from "@chakra-ui/react";

interface MainLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

// Default Template Layout
const MainLayout = ({ children } : MainLayoutProps) => (
  <Grid gridTemplateColumns='30ch 1fr'>
    {children}
  </Grid>
)

export default MainLayout;