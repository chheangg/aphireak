import { Box } from "@chakra-ui/react";

interface PageLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

// Default Template Layout
const PageLayout = ({ children } : PageLayoutProps) => (
  <Box py='3ch' px='5ch'>
    {children}
  </Box>
)

export default PageLayout;