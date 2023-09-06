import React from 'react';
import landing from '../../assets/img/landing.png'
import desarrollo from '../../assets/img/desarrollo.png'
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../../assets/css/Equipos.css';
function Grilla(props) {
    return (
        <Grid templateColumns={'repeat(2,1fr)'} w={'100%'} margin={'0'} >
            <Box className="landigs-container">
                <Box className='text-container'>
                    <Text marginTop={'-40%'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={'40px'}>Landing pages <br></br>personalizadas</Text>
                    <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={'20px'}>Es hora de convertir visitantes en clientes <br /> y sueños en realidades</Text>
                    <Link>
                        <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'blue.400'} fontSize={'20px'}  >
                            Más Información &rsaquo;
                        </Text>
                    </Link>
                </Box>
            </Box>
            <Box className="desarrollo-container">
                <Box className='text-container'>
                    <Text marginTop={'-40%'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={'40px'}>Desarrollos <br></br>Especializados</Text>
                    <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={'20px'}>¡Transforma tu vision en una realidad digital!</Text>
                    <Link>
                        <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'blue.400'} fontSize={'20px'}  >
                            Más Información &rsaquo;
                        </Text>
                    </Link>
                </Box>

            </Box>
        </Grid>
    );
}

export default Grilla;