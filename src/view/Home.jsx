import React from 'react';
import '../assets/css/fondo.css'
import { Text, Box, Image } from '@chakra-ui/react';
import planeta from '../assets/img/astronautas.png'
import Equipos from './components/Home/Equipos';
import Grilla from './components/Home/Grilla';
import Hacemos from './components/Home/Hacemos';
import { Title, Parrafo } from '../components/widgets/Texts';

function Home(props) {
    // console.log('home');
    return (
        <>
            <Box className='spece-home'>
                <Box className="space1">
                </Box>
                <Title text={'Juntos construyamos'}/>
                <Title text={'el nuevo mundo'}/>
                <Box className="slide-up " display={'flex'} justifyContent={'center'} marginTop={{lg:'-10%',md:'-5%',sm:'10%'}} >
                    <Image className='float' h={{lg:'800px',md:'500px',sm:'500px'}} src={planeta} alt='Logo palmosima' />
                </Box>
            </Box>
            <Equipos />
            <Grilla />
            <Hacemos />
        </>
    );
}

export default Home;
