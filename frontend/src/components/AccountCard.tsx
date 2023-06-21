import { Button, Flex, Text } from "@chakra-ui/react"

interface AccountCardProps {
  username: string;
  onLogout: () => void;
}

const AccountCard = ({ username, onLogout } : AccountCardProps) => (
  <Flex gap='1.5rem' alignItems='center' justifySelf='flex-end' mr='1rem'>
    <Text>{username}</Text>
    <Button colorScheme="red" onClick={onLogout}>Sign out</Button>
  </Flex>
)

export default AccountCard;