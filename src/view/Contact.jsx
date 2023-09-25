import { GoogleLogin } from '@react-oauth/google';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, FormControl, FormLabel, Input, VStack, Textarea, Text, Flex, Link, Grid } from '@chakra-ui/react';
import UnputFlotante from '../components/widgets/UnputFlotante';
import { AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import '../assets/css/Equipos.css';
import '../assets/css/fondo.css'
const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [cargo, setCargo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_o3k1iil', 'template_clzrey7', form.current, 'S9HqDSTRh6YMrrT2I')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  const handleEnviarClick = async () => {

  };


  return (
    <Grid className='contacto' gap={'20px'} templateColumns={{ base: '1fr', md: ' 1fr', lg: '1fr 1fr' }}>
      <Box className='slide-up' margin={'10%'}>
        <Text textAlign={'left'} zIndex={99} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>
          ¡Contáctanos!
        </Text>
        <Text marginTop={'10px'} textAlign={'left'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
          Concreta una cita con nuestro equipo de trabajo y nos comunicaremos contigo a la brevedad posible. Llena nuestro formulario y háblanos sobre tu proyecto. Puedes conococer más de nosotros a través de nuestras redes sociales.
        </Text>
        <Flex marginY={'20px'} gap={'50px'} alignItems={'center'} >
          <Link>
            <AiOutlineWhatsApp color='#FFFF' size={50} />
          </Link>
          <Link >
            <AiFillLinkedin color='#FFFF' size={50} />
          </Link>
          <Link >
            <AiFillInstagram color='#FFFF' size={50} />
          </Link>
          <Link>
            <AiFillMail color='#FFFF' size={50} />
          </Link>
        </Flex>
      </Box>
      <Box  className='slide-up' paddingY={'60px'} borderRadius={'30px'} m={{lg:'10%',md:'8%',sm:'5%'}} backgroundColor={'#bababac1'}>
        <form ref={form} onSubmit={sendEmail}>
          <VStack spacing={2}>
            <FormControl>
              <UnputFlotante
                type="text" 
                nameI="user_name"
                placeholder="Nombre y apellido"
              />
            </FormControl>
            <FormControl>
              <UnputFlotante
                type="email" 
                name="user_email"
                placeholder="Correo"
              />
            </FormControl>
            <Box padding={{ lg: '1% 2.5%', md: '0', sm: '0' }} w={'100%'} display={{ lg: 'flex', md: 'block', sm: 'block' }}>
              <FormControl>
                <UnputFlotante
                  type="text"
                  placeholder="Nombre de la empresa"
                />
              </FormControl>
              <FormControl>
                <UnputFlotante
                  type="text"
                  placeholder="Cargo"

                />
              </FormControl>
            </Box>
            <Box gap={'5%'} padding={'2% 5%'}  w={'100%'} display={{ lg: 'flex', md: 'block', sm: 'block' }}>
              <FormControl >
                <Input
                  type="date"
                  placeholder="Fecha"
                  borderRadius='50px'
                  border={'none'}
                  backgroundColor={'#dadada'}
                />
              </FormControl>
              <FormControl>
                <Input
                  type="time"
                  placeholder="Hora"
                  borderRadius='50px'
                  border={'none'}
                  backgroundColor={'#dadada'}
                />
              </FormControl>
            </Box>
            <Button type="submit" value="Send" borderRadius={'20px'} w={'90%'} backgroundColor="#000" color={'#FFF'} >
              Envía tu mensaje
            </Button>
          </VStack>
        </form>
      </Box>
    </Grid>
  );
};

export default Contact;
