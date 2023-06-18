import { Box, Heading } from "@chakra-ui/react"

import Panel from "../../components/Panel"
import { MdTableChart } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { PanelPage } from "../../types"
import MaintenanceList from "./MaintenanceList"
import MaintenanceForm from "./MaintenanceForm"

const PanelObj : PanelPage[] = [
  {
    id: 0,
    tabIcon: MdTableChart,
    tabText: "List Maintenance Record",
    page: <MaintenanceList />,
  },
  {
    id: 1,
    tabIcon: AiOutlinePlus,
    tabText: "Create Maintennace Record",
    page: <MaintenanceForm />,
  }
]

const MaintenanceRecord = () => (
  <Box>
    <Heading color='orange.300' mb='1rem'>Maintenance Record</Heading>
    <Panel pages={PanelObj} />
  </Box>
)

export default MaintenanceRecord