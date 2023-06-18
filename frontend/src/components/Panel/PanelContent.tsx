import { Box } from "@chakra-ui/react";

interface PanelContentProps {
  children: string | JSX.Element | JSX.Element[];
}

const PanelContent = ({ children } : PanelContentProps) => (
  <Box flex='1'>
    {children}
  </Box>
)

export default PanelContent;