import React from 'react';
import { Text, Box, Grid } from '@chakra-ui/react';
import manos from '../../assets/img/manos.png';
import { Link } from 'react-router-dom';
import '../../assets/css/Equipos.css'; // Asegúrate de importar tu archivo de estilos CSS
import { useInView } from 'react-intersection-observer'; 
function Equipos(props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
        threshold: 0.4, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <Box className={`equipos-container ${inView ? 'in-view' : ''}`} ref={ref} marginBottom={{ base: "-70%", md: "-60%", lg: "-4.8%" }}>
            <Box className="text-container" marginTop={{ base: "-50%", md: "-25%", lg: "-25%" }}>
                <Text textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>
                    Equipos de trabajo <br></br> hechos a mano
                </Text>
                <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                    Trabajemos juntos para construir tus sueños
                </Text>
                <Link>
                    <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'blue.400'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Más Información &rsaquo;
                    </Text>
                </Link>
            </Box>
        </Box>
    );
}

export default Equipos;
