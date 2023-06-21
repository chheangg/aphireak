import { Card, CardBody, CardHeader, Divider, Heading, Text, chakra } from "@chakra-ui/react";

interface AuthCardProps {
  children: JSX.Element | JSX.Element[],
  title: string;
}

const AuthCard = ({ children, title } : AuthCardProps) => (
  <Card p='0.5rem'>
    <CardHeader pt='1rem' pb='0'>
      <Heading textAlign='center' fontSize='4rem' as={chakra.h2}>{title}</Heading>
    </CardHeader>
    <CardBody pt='0.5rem'>
      {children}
    </CardBody>
  </Card>
)

export default AuthCard