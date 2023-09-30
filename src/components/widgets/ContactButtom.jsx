import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { Button } from '@chakra-ui/react';

function ContactButtom(props) {
  return (
    // Usa el componente Link para redirigir a /Contact
    <Link to="/Contact">
      <Button m={'10px'} borderRadius={'5px'} color={' #000'} backgroundColor={'#FFF'}>
        Contáctanos
      </Button>
    </Link>
  );
}

export default ContactButtom;
