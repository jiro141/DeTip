import React from 'react';
import '../assets/css/fondo.css'
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import planeta from '../assets/img/astronautas.png'
import manos from '../assets/img/manos.png'
import landing from '../assets/img/landing.png'
import desarrollo from '../assets/img/desarrollo.png'
import { Link } from 'react-router-dom';
import Equipos from './components/Equipos';
import Grilla from './components/Grilla';
import Hacemos from './components/Hacemos';
function Home(props) {
    console.log('home');
    return (
        <>
            <Box className='spece-home'>
                <Box className="space">
                </Box>
                <Text marginTop={'40px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={'40px'}>Juntos construyamos <br></br> el nuevo mundo</Text>
                <Box display={'flex'} justifyContent={'center'} marginTop={'-10%'} >
                    <Image h={'800px'} src={planeta} alt='Logo palmosima' />
                </Box>
            </Box>
            <Equipos />
            <Grilla />
            <Hacemos />

        </>
    );
}

export default Home;
