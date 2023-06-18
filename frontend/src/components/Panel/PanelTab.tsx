import { Flex } from "@chakra-ui/react"

interface PanelTabProp {
  children: JSX.Element | JSX.Element[];
}

const PanelTab = ({ children } : PanelTabProp) => (
  <Flex>
    {children}
  </Flex>
)

export default PanelTab;