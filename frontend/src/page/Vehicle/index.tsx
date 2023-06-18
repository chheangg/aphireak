import { Box, Heading } from "@chakra-ui/react"

import Panel from "../../components/Panel"
import { MdTableChart } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { PanelPage } from "../../types"
import VehicleList from "./VehicleList"
import VehicleForm from "./VehicleForm"

const PanelObj : PanelPage[] = [
  {
    id: 0,
    tabIcon: MdTableChart,
    tabText: "List Vehicle Record",
    page: <VehicleList />,
  },
  {
    id: 1,
    tabIcon: AiOutlinePlus,
    tabText: "Create Vehicle Record",
    page: <VehicleForm />,
  }
]

const Vehicle = () => (
  <Box>
    <Heading color='orange.300' mb='1rem'>Vehicle List</Heading>
    <Panel pages={PanelObj} />
  </Box>
)

export default Vehicle