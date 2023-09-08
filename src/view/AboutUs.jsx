import React from 'react';
import '../assets/css/fondo2.css'
import { Text, Box, Image } from '@chakra-ui/react';
import nosotros from '../assets/img/Nosotros.png'
import Podemos from './components/AboutUs/Podemos';
import MySlider from './components/AboutUs/Slider';
import Datos from './components/AboutUs/Datos';
function AboutUs(props) {
    return (
        <>
            <Box className='spece-home' marginBottom={'6rem'}>
                <Box className="space">
                </Box>
                <Box className="slide-up" display={'flex'} justifyContent={'center'}>
                    <Image h={{ lg: '450px', md: '500px', sm: '500px' }} src={nosotros} alt='Logo palmosima' />
                </Box>
                <Text className="slide-up" marginTop={'40px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Objetivo</Text>
                <Text className="slide-up" marginTop={'10px'} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                    Construir sistemas que cambien el mundo
                </Text>
            </Box>
            <Podemos />
            <MySlider />
            <Datos />

        </>
    );
}

export default AboutUs;