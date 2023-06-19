import { Box, Heading, chakra, Alert, AlertIcon, AlertDescription, List  } from "@chakra-ui/react";
import { useState } from "react";

interface FormProps {
  children: string | JSX.Element | JSX.Element[];
  onSubmit: () => void;
  title: string;
}

const Form = ({ children, onSubmit, title } : FormProps) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const submitHandler = (e : React.SyntheticEvent) => {
    e.preventDefault()
    setIsError(false);
    try {
      onSubmit();
      if (!isSuccess) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch {
      if (!isError) {
        setIsError(true);
      }
    } 
  }

  return (
    <Box border='1px solid' borderColor='orange.400' borderBottomRadius='15px'>
      <Box p='0.5rem 1rem' bgColor='orange.400'>
        <Heading fontSize='1.25rem' color='gray.50' as={chakra.h3}>
          {title}
        </Heading>
      </Box>
      <Box as={chakra.form} onSubmit={submitHandler} p='1rem'>
        {children}
        { 
          isSuccess ?
          <Alert mt='1rem' status='success'>
            <AlertIcon />
            Item added. Fire on!
          </Alert> 
          : null
        }
        { 
          isError ?
          <Alert mt='1rem' status='error'>
            <AlertIcon />
            <AlertDescription>
              There was some errors with the request:
                <List>
                  
                </List>
            </AlertDescription>
          </Alert> 
          : null
        }
      </Box>
    </Box>
  )
}

export default Form;