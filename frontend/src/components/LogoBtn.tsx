import { Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface LogoBtnProps {
  logoImg: string;
}

const LogoBtn = ({ logoImg } : LogoBtnProps) => {
  const navigate = useNavigate();
  return (
    <Button h='2rem' variant='unstyled' onClick={() => navigate('/')}>
      <Image h='100%' objectFit='contain' src={logoImg} />
    </Button>
  )
}

export default LogoBtn;