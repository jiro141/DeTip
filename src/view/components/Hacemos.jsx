import React from 'react';
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../../assets/css/Equipos.css';
import { useInView } from 'react-intersection-observer'; 
function Hacemos(props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
        threshold: 0.5, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <Grid className={`desarrollo-hacemos ${inView ? 'in-view' : ''}`} ref={ref} templateColumns={{lg:'repeat(2,1fr)',md:'repeat(2,1fr)',sm:"repeat(1,1fr)"}} w={'100%'} margin={'0'} >
            <Box >
                <Box margin={{ base: "20px", md: "50px", lg: "70px" }} className='text-container'>
                    <Text  textAlign={'justify'} zIndex={99} color={'#000'} fontSize={'40px'}>¿Por qué <br />lo hacemos?</Text>
                    <Text marginTop={'10px'} textAlign={'justify'} zIndex={99} color={'#000'} fontSize={'20px'}>Nuestro objetivo es proveer herramientas que permitan el fácil acceso a la información por medio de la actualización de diferentes tipos de procesos. De esta forma contribuimos a la disminución de la huella de carbono y construimos un mundo mejor</Text>
                    <Link>
                        <Text marginTop={'10px'} textAlign={'justify'} zIndex={99} color={'blue.400'} fontSize={'20px'}  >
                            Más Información &rsaquo;
                        </Text>
                    </Link>
                </Box>
            </Box>
            <Box >
                <Box >
                </Box>
            </Box>
        </Grid>
    );
}

export default Hacemos;