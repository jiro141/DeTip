import React from 'react';
import { Text, Box, Grid } from '@chakra-ui/react';
// import servicios from '../assets/img/servicios.jpg'
import { Link } from 'react-router-dom';
import '../assets/css/Equipos.css'; // Asegúrate de importar tu archivo de estilos CSS
import { useInView } from 'react-intersection-observer';
import ContactButtom from '../components/widgets/ContactButtom';
import Niveles from './components/Services/niveles';
import Equipo from './components/Services/Equipo';
import Empresas from './components/Services/Empresas';
import { Title, Parrafo } from '../components/widgets/Texts';
function Services(props) {
    const [ref, inView] = useInView({
        triggerOnce: false, // La animación solo se activará una vez
        threshold: 0.4, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <>
            <Box className={`servicios-container`} >
                <Box className='text-container' marginTop={{ base: "5%", md: "5%", lg: "1%" }}>
                    <Title text='Freelance' />
                    <Parrafo text='Potencia el éxito de tu proyecto  ' />
                    <Parrafo text='¡Consulta disponibilidad de nuestros expertos en el desarrollo web!' />
                    {/* <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Potencia el éxito de tu proyecto <br /> ¡Consulta disponibilidad de nuestros expertos en el desarrollo web!
                    </Text> */}
                    <Box textAlign={'center'} m={'20px'}>
                        <ContactButtom />
                    </Box>
                </Box>
            </Box>
            <Niveles />
            <Equipo />
            <Empresas />
        </>

    );
}

export default Services;