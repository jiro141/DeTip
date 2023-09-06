import React from 'react';
import { Text, Box, Grid } from '@chakra-ui/react';
import manos from '../../assets/img/manos.png';
import { Link } from 'react-router-dom';
import '../../assets/css/Equipos.css'; // Asegúrate de importar tu archivo de estilos CSS

function Equipos(props) {
    return (
        <Box className="equipos-container" marginBottom={'-4.8%'}>
            <Box className="text-container">
                <Text textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={'40px'}>
                    Equipos de trabajo <br></br> hechos a mano
                </Text>
                <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={'20px'}>
                    Trabajemos juntos para construir tus sueños
                </Text>
                <Link>
                    <Text marginTop={'10px'} textAlign={'center'} zIndex={99} color={'blue.400'} fontSize={'20px'}>
                        Más Información &rsaquo;
                    </Text>
                </Link>
            </Box>
        </Box>
    );
}

export default Equipos;
