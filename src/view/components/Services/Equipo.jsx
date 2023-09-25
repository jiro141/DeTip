import React from 'react';
import { Text, Box, Grid } from '@chakra-ui/react';
// import servicios from '../assets/img/servicios.jpg'
import { Link } from 'react-router-dom';
import '../../../assets/css/Equipos.css'; // Asegúrate de importar tu archivo de estilos CSS
import { useInView } from 'react-intersection-observer';
import ContactButtom from '../../../components/widgets/ContactButtom';


function Equipo(props) {
    const [ref, inView] = useInView({
        triggerOnce: false, // La animación solo se activará una vez
        threshold: 0.4, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <>
            <Box className={`equipo-container ${inView ? 'in-view' : ''}`} ref={ref} >
                <Box className='text-container' marginTop={{ base: "5%", md: "5%", lg: "1%" }}>
                    <Text textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>
                        Equipo <br /> de desarrollo
                    </Text>
                    <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                       ¡Empodera tus visiones con nuestro equipo especializado de desarrollo web!
                    </Text>
                    <Box textAlign={'center'} m={'20px'}>
                        <ContactButtom />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Equipo;