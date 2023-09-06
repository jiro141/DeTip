import React from 'react';
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../../assets/css/Equipos.css';
function Hacemos(props) {
    return (
        <Grid className="desarrollo-hacemos" templateColumns={'repeat(2,1fr)'} w={'100%'} margin={'0'} >
            <Box >
                <Box margin={'100px'} className='text-container'>
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