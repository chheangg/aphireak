import { Box, FormControl, FormHelperText, FormLabel, Input, chakra, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
} 

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = (e : React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  }
  
  return (
    <Box w='20vw' as={chakra.form} onSubmit={submitHandler}>
      <FormControl mt='1rem'>
        <FormLabel>Username</FormLabel>
        <Input onChange={(e) => setUsername(e.currentTarget.value)} placeholder="John Appleseed"></Input>
      </FormControl>
      <FormControl mt='1rem'>
        <FormLabel>Password</FormLabel>
        <Input onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Recommend a minimum of 8 characters" type="password"></Input>
      </FormControl>
      <Flex justifyContent='center'>
        <Button mt='2rem' colorScheme="orange" w='100%s' type="submit">Login</Button>
      </Flex>
    </Box>
  )
}

export default LoginForm