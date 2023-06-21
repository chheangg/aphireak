import { Heading, Box, chakra, Alert, AlertDescription, AlertIcon, List } from "@chakra-ui/react";
import { useState } from "react";

interface DetailProps {
  children: JSX.Element | JSX.Element[],
  title: string,
  onSubmit: () => void;
}

const Detail = ({ children, title, onSubmit } : DetailProps) => {
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
    <Box as={chakra.form} onSubmit={submitHandler}>
        { 
          isSuccess ?
          <Alert mt='1rem' status='success'>
            <AlertIcon />
            Item update. Fire on!
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
      <Heading as={chakra.h2} mb='1rem' color='orange.400'>{title}</Heading>
      {children}
    </Box>
  )
}

export default Detail;