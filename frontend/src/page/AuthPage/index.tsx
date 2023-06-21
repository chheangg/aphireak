import { Box, Flex, Image } from "@chakra-ui/react"
import logoImg from '../../asset/logo.png';

interface AccountCreationProps {
  children: JSX.Element | JSX.Element[];
}

const AccountCreation = ({ children } : AccountCreationProps) => (
  <Box w='100%' h='100vh' bgGradient='linear(to-br, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)'>
    <Flex w='100vw' h='100vh' flexDir='column' justifyContent='center' alignItems='center'>
      <Image src={logoImg} h='5rem' mb='1.5rem' />
      {children}
    </Flex>
  </Box>
)

export default AccountCreation