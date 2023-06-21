import { Table, Tbody, Thead } from "@chakra-ui/react";
import { constructTableBody } from "../utility/constructTableBody";
import { Data } from "../types";

interface TableListProp {
  children: JSX.Element | JSX.Element[];
  data: Data[];
  onRemove: (id: number) => void;
}

const TableList = ({ data, children, onRemove } : TableListProp) => (
  <Table p='0' variant='striped' colorScheme="orange">
    <Thead p='0' bgColor='orange.400'>
      {children}
    </Thead>
    <Tbody>
      {constructTableBody(data, onRemove)}
    </Tbody>
  </Table>
)

export default TableList;