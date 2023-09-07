import React from 'react';
import '../assets/css/fondo.css'
import { Text, Box, Image } from '@chakra-ui/react';
import planeta from '../assets/img/astronautas.png'
import Equipos from './components/Equipos';
import Grilla from './components/Grilla';
import Hacemos from './components/Hacemos';

function Home(props) {
    // console.log('home');
    return (
        <>
            <Box className='spece-home'>
                <Box className="space">
                </Box>
                <Text className="slide-up" marginTop={'40px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Juntos construyamos <br></br> el nuevo mundo</Text>
                <Box className="slide-up float" display={'flex'} justifyContent={'center'} marginTop={{lg:'-10%',md:'-5%',sm:'10%'}} >
                    <Image h={{lg:'800px',md:'500px',sm:'500px'}} src={planeta} alt='Logo palmosima' />
                </Box>
            </Box>
            <Equipos />
            <Grilla />
            <Hacemos />
        </>
    );
}

export default Home;
