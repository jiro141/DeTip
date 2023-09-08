import React, { useState, useEffect } from 'react';
import { Text, Box, Grid, Image } from '@chakra-ui/react';
import IconLandings from '../../../assets/img/icons/landing.png'
import IconDesarrollo from '../../../assets/img/icons/desarrollo.png'
import IconEspecializado from '../../../assets/img/icons/especializado.png'
import '../../../assets/css/animacion.css'
import { useInView } from 'react-intersection-observer'; 
function Podemos(props) {
    const [animationClass, setAnimationClass] = useState('slide-left');
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
        threshold: 0.4, // Puedes ajustar este valor según tus necesidades
    });
    console.log(animationClass);
    useEffect(() => {
        // Agregar la clase de animación después de un pequeño retraso para animar uno por uno
        const delay = setTimeout(() => {
            setAnimationClass('slide-left active');
        }, 1000); // Ajusta el retraso según tus preferencias
        return () => clearTimeout(delay);
    }, []);

    return (
        <Box className={`${inView ? 'in-view' : ''}`} ref={ref} bg={'#1b1a19d2'} padding={'40px 40px 60px 40px'}>
            <Text className="slide-up"  textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Podemos ayudarte</Text>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} alignItems="center" justifyContent="center">
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconLandings} alt='Logo palmosima' />
                    <Text marginTop={'10px'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Landing page <br /> personalizadas
                    </Text>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconDesarrollo} alt='Logo palmosima' />
                    <Text marginTop={'10px'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Desarrollo  <br />de sistemas
                    </Text>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconEspecializado} alt='Logo palmosima' />
                    <Text marginTop={'10px'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Desarrollos <br /> especializados
                    </Text>
                </Box>
            </Grid>
        </Box>
    );
}

export default Podemos;
