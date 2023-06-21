import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => (
  <Flex justifyContent='center'>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='green.400'
      size='32'
    />
  </Flex>
)

export default Loading;