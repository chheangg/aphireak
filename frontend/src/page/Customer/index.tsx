import { Box, Heading } from "@chakra-ui/react"

import Panel from "../../components/Panel"
import { MdTableChart } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { PanelPage } from "../../types"
import CustomerList from "./CustomerList"
import CustomerForm from "./CustomerForm"

const PanelObj : PanelPage[] = [
  {
    id: 0,
    tabIcon: MdTableChart,
    tabText: "List Customer Record",
    page: <CustomerList />,
  },
  {
    id: 1,
    tabIcon: AiOutlinePlus,
    tabText: "Create Customer Record",
    page: <CustomerForm />,
  }
]

const Customer = () => (
  <Box>
    <Heading color='orange.300' mb='1rem'>Customer List</Heading>
    <Panel pages={PanelObj} />
  </Box>
)

export default Customer