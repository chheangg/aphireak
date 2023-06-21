import { Box, Heading } from "@chakra-ui/react"
import { TbUrgent } from 'react-icons/tb'
import { BiTimer } from 'react-icons/bi'
import { MdWarningAmber, MdOutlineCalendarMonth } from "react-icons/md"

import Panel from "../../components/Panel"
import { PanelPage } from "../../types"
import VehicleScheduleList from "./VehicleScheduleList"

const PanelObj : PanelPage[] = [
  {
    id: 0,
    tabIcon: BiTimer,
    tabText: "Within a week",
    page: <VehicleScheduleList days={7} />,
  },
  {
    id: 1,
    tabIcon: MdWarningAmber,
    tabText: "Within a month",
    page: <VehicleScheduleList days={31} />,
  },
  {
    id: 2,
    tabIcon: TbUrgent,
    tabText: "Within 3 months",
    page: <VehicleScheduleList days={93} />,
  },
  {
    id: 3,
    tabIcon: MdOutlineCalendarMonth,
    tabText: "Within 6 months",
    page: <VehicleScheduleList days={168} />,
  }
]

const Schedule = () => (
  <Box>
    <Heading color='orange.300' mb='1rem'>Upcoming Maintenances</Heading>
    <Panel pages={PanelObj} />
  </Box>
)

export default Schedule