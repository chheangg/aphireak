import { Box, FormControl, FormHelperText, FormLabel, Input, chakra, Button } from "@chakra-ui/react";
import { useState } from "react";

interface RegistrationFormProps {
  onSubmit: (username: string, password: string) => void;
} 

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const submitHandler = (e : React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  }
  
  return (
    <Box as={chakra.form} onSubmit={submitHandler}>
      <FormControl mt='1rem'>
        <FormLabel>Username</FormLabel>
        <Input onChange={(e) => setUsername(e.currentTarget.value)} placeholder="John Appleseed"></Input>
        <FormHelperText>Pick a simple and meaningful username</FormHelperText>
      </FormControl>
      <FormControl mt='1rem'>
        <FormLabel>Password</FormLabel>
        <Input onChange={(e) => setPassword(e.currentTarget.value)} placeholder="Recommend a minimum of 8 characters" type="password"></Input>
        <FormHelperText>Pick a strong password</FormHelperText>
      </FormControl>
      <Button mt='2rem' colorScheme="orange" w='100%s' type="submit">Ceate Account</Button>
    </Box>
  )
}

export default RegistrationForm