import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { Button } from '@chakra-ui/react';

function ContactButtom(props) {
  return (
    // Usa el componente Link para redirigir a /Contact
    <Link to="/Contact">
      <Button borderRadius={'50px'} color={'whiteAlpha.900'} backgroundColor={'blue.400'}>
        Contáctanos
      </Button>
    </Link>
  );
}

export default ContactButtom;
