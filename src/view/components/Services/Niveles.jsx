import React, { useState, useEffect } from 'react';
import { Text, Box, Grid, Image } from '@chakra-ui/react';
import IconJunior from '../../../assets/img/icons/Junior.png'
import IconSemiJunior from '../../../assets/img/icons/SemiJunior.png'
import IconSenior from '../../../assets/img/icons/Senior.png'
import '../../../assets/css/animacion.css'
import { useInView } from 'react-intersection-observer';
import ContactButtom from '../../../components/widgets/ContactButtom';
function Niveles(props) {
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
        <Box className={`${inView ? 'in-view' : ''}`} ref={ref} padding={'40px 40px 60px 40px'}>
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} alignItems="center" justifyContent="center">
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconJunior} alt='Logo palmosima' />
                    <Text fontWeight={'bold'} marginTop={'10px'} zIndex={99} color={'#FFFF'} fontSize={{ base: "18px", md: "24px", lg: "24px" }}>
                        Junior
                    </Text>
                    <Text margin={'10px 0 20px 0 '} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Desarrollo web de <br /> nivel básico
                    </Text>
                    <ContactButtom />
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconSemiJunior} alt='Logo palmosima' />
                    <Text fontWeight={'bold'} marginTop={'10px'} zIndex={99} color={'#FFFF'} fontSize={{ base: "18px", md: "24px", lg: "24px" }}>
                        Semi Junior
                    </Text>
                    <Text margin={'10px 0 20px 0 '} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Desarrolador con <br /> dos años de experiencia
                    </Text>
                    <ContactButtom />
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconSenior} alt='Logo palmosima' />
                    <Text fontWeight={'bold'} marginTop={'10px'} zIndex={99} color={'#FFFF'} fontSize={{ base: "18px", md: "24px", lg: "24px" }}>
                        Senior
                    </Text>
                    <Text margin={'10px 0 20px 0 '} textAlign={'center'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                        Experto en <br /> desarrollo web
                    </Text>
                    <ContactButtom />
                </Box>
            </Grid>
        </Box>
    );
}

export default Niveles;
