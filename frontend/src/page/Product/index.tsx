import { Box, Heading } from "@chakra-ui/react"

import Panel from "../../components/Panel"
import { MdTableChart, MdOutlineCategory, MdLibraryAdd } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { PanelPage } from "../../types"
import ProductList from "./ProductList"
import ProductForm from "./ProductForm"
import TypeList from "./TypeList"
import TypeForm from "./TypeForm"

const PanelObj : PanelPage[] = [
  {
    id: 0,
    tabIcon: MdTableChart,
    tabText: "List Product Record",
    page: <ProductList />,
  },
  {
    id: 1,
    tabIcon: AiOutlinePlus,
    tabText: "Create Product Record",
    page: <ProductForm />,
  },
  {
    id: 2,
    tabIcon: MdOutlineCategory,
    tabText: "List Product Types",
    page: <TypeList />,
  },
  {
    id: 3,
    tabIcon: MdLibraryAdd,
    tabText: "Create Product Type",
    page: <TypeForm />,
  }
]

const Product = () => (
  <Box>
    <Heading color='orange.300' mb='1rem'>Product and Product Type View</Heading>
    <Panel pages={PanelObj} />
  </Box>
)

export default Product