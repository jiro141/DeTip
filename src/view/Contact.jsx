import { GoogleLogin } from '@react-oauth/google';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, FormControl, FormLabel, Input, VStack, Textarea, Text, Flex, Link, Grid } from '@chakra-ui/react';
import UnputFlotante from '../components/widgets/UnputFlotante';
import { AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import '../assets/css/Equipos.css';
import '../assets/css/fondo.css'
import { Title, Parrafo } from '../components/widgets/Texts';
const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [cargo, setCargo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const notify = () => toast('Tu solicitud ha sido enviada con exito.',
    {
      icon: '🚀',
      style: {
        borderRadius: '20px',
        background: '#333',
        color: '#fff',
      },
    }
  );
  const Error = () => toast.error("Ocurrio un error.")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_o3k1iil', 'template_clzrey7', form.current, 'S9HqDSTRh6YMrrT2I')
      .then((result) => {
        notify();
        console.log(result.text);
      }, (error) => {
        Error();
        console.log(error.text);
      });
  }

  const handleEnviarClick = async () => {

  };


  return (
    <Box marginX={{ base: '5%', md: '0', lg: '0' }}>
      <Grid className='contacto' gap={'20px'} templateColumns={{ base: '1fr', md: ' 1fr', lg: '1fr 1fr' }}>
        <Box className='slide-up' margin={'10%'}>
          <Title aline={'left'} text={'¡Contáctanos!'}/>
          <Parrafo text={'Concreta una cita con nuestro equipo de trabajo y nos comunicaremos contigo a la brevedad posible. Llena nuestro formulario y háblanos sobre tu proyecto. Puedes conococer más de nosotros a través de nuestras redes sociales.'} aline={'justify'}/>
          <Flex marginY={'20px'} gap={'50px'} alignItems={'center'} >
            <Link href='https://wa.me/14095974199'>
              <AiOutlineWhatsApp color='#FFFF' size={"4vw"} />
            </Link>
            <Link href="https://www.linkedin.com/company/detip-company/about/" >
              <AiFillLinkedin color='#FFFF' size={"4vw"} />
            </Link>
            <Link href="https://www.instagram.com/detip_company" >
              <AiFillInstagram color='#FFFF' size={"4vw"} />
            </Link>
            <Link href='mailto:Contacto@DeTipCompany.com'>
              <AiFillMail color='#FFFF' size={"4vw"} />
            </Link>
          </Flex>
        </Box>
        <Box className='slide-up' paddingY={'60px'} borderRadius={'10px'} m={{ lg: '10%', md: '8%', sm: '5%' }} backgroundColor={'#bababac1'}>
          <form ref={form} onSubmit={sendEmail}>
            <VStack >
              <FormControl padding={'1% 2.5%'}>
                <UnputFlotante
                  type="text"
                  nameI="user_name"
                  placeholder="Nombre y apellido"
                />
              </FormControl>
              <FormControl padding={'1% 2.5%'}>
                <UnputFlotante
                  type="email"
                  name="user_email"
                  placeholder="Correo"
                />
              </FormControl>
              <Box  w={'100%'} display={{ lg: 'flex', md: 'block', sm: 'block' }} >
                <FormControl padding={'1% 2.5%'}>
                  <UnputFlotante
                    type="text"
                    placeholder="Nombre de la empresa"
                  />
                </FormControl>
                <FormControl padding={'1% 2.5%'}>
                  <UnputFlotante
                    type="text"
                    placeholder="Cargo"

                  />
                </FormControl>
              </Box>
              <Box   w={'100%'} display={{ lg: 'flex', md: 'block', sm: 'block' }}>
                <FormControl padding={'1% 2.5%'}>
                  <Input
                    // marginBottom={{ base: '5%', md: '0', lg: '0' }}
                    type="date"
                    placeholder="Fecha"
                    borderRadius='5px'
                    border={'none'}
                    backgroundColor={'#dadada'}
                  />
                </FormControl>
                <FormControl padding={'1% 2.5%'}>
                  <Input
                    type="time"
                    placeholder="Hora"
                    borderRadius='5px'
                    border={'none'}
                    backgroundColor={'#dadada'}
                  />
                </FormControl>
              </Box>
              <FormControl padding={'1% 2.5%'} w={'100%'} display={{ lg: 'flex', md: 'block', sm: 'block' }}>
                <Textarea
                  maxH={'100px'}
                  borderRadius='5px'
                  border={'none'}
                  backgroundColor={'#dadada'} placeholder='Mensaje' />
              </FormControl>
              <Button  type="submit" value="Send" borderRadius={'5px'} w={'95%'} backgroundColor="#000" color={'#FFF'} >
                Envía tu mensaje
              </Button>

            </VStack>
          </form>
        </Box>
      </Grid>
      <Toaster />
    </Box>
  );
};

export default Contact;
