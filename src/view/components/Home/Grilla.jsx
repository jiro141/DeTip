import React from 'react';
// import landing from '../../assets/img/landing.png'
// import desarrollo from '../../assets/img/desarrollo.png'
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../../../assets/css/Equipos.css';
import { useInView } from 'react-intersection-observer';
import MoreInfo from '../../../components/widgets/MoreInfo';
import { SubTitle, Parrafo } from '../../../components/widgets/Texts';
function Grilla(props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
        threshold: 0.5, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <Grid className={`equipos-grilla ${inView ? 'in-view' : ''}`} ref={ref} templateColumns={{ lg: 'repeat(2,1fr)', md: 'repeat(2,1fr)', sm: "repeat(1,1fr)" }} w={'100%'} margin={'0'} >
            <Box className={`landigs-container ${inView ? 'in-view' : ''}`} ref={ref}>
                <Box className='text-container' marginTop={{ base: "-65%", md: "-20rem", lg: "-18rem" }}>
                    <SubTitle text={'Landing pages'} />
                    <SubTitle text={'personalizadas'} />
                    <Parrafo text={'Es hora de convertir visitantes en clientes'} />
                    <Parrafo text={'y sueños en realidades'} />
                    <MoreInfo />
                </Box>
            </Box>
            <Box className={`desarrollo-container ${inView ? 'in-view' : ''}`} ref={ref}>
                <Box className='text-container'  marginTop={{ base: "-65%", md: "-20rem", lg: "-20rem" }}>
                    <SubTitle text={'Desarrollos'} />
                    <SubTitle text={'Especializados'} />
                    <Parrafo text={'¡Transforma tu vision en una realidad digital!'} />
                    {/* <Parrafo text={'y sueños en realidades'} /> */}
                    <MoreInfo />
                </Box>

            </Box>
        </Grid>
    );
}

export default Grilla;