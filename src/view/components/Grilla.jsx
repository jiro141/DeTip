import React from 'react';
import landing from '../../assets/img/landing.png'
import desarrollo from '../../assets/img/desarrollo.png'
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../../assets/css/Equipos.css';
import { useInView } from 'react-intersection-observer'; 
function Grilla(props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
        threshold: 0.5, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <Grid className={`equipos-container ${inView ? 'in-view' : ''}`} ref={ref} templateColumns={{lg:'repeat(2,1fr)',md:'repeat(2,1fr)',sm:"repeat(1,1fr)"}} w={'100%'} margin={'0'} >
            <Box className={`landigs-container ${inView ? 'in-view' : ''}`} ref={ref}>
                <Box className='text-container'>
                    <Text marginTop={{ base: "-65%", md: "-70%", lg: "-80%" }} textAlign={'center'}  color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Landing pages <br></br>personalizadas</Text>
                    <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>Es hora de convertir visitantes en clientes <br /> y sueños en realidades</Text>
                    <Link>
                        <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'blue.400'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}  >
                            Más Información &rsaquo;
                        </Text>
                    </Link>
                </Box>
            </Box>
            <Box className={`desarrollo-container ${inView ? 'in-view' : ''}`} ref={ref}>
                <Box className='text-container'>
                    <Text marginTop={{ base: "-65%", md: "-70%", lg: "-80%" }} textAlign={'center'}  color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Desarrollos <br></br>Especializados</Text>
                    <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>¡Transforma tu vision en una realidad digital!</Text>
                    <Link>
                        <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'blue.400'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}  >
                            Más Información &rsaquo;
                        </Text>
                    </Link>
                </Box>

            </Box>
        </Grid>
    );
}

export default Grilla;