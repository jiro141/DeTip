import React, { useState, useEffect } from 'react';
import { Text, Box, Grid, Image } from '@chakra-ui/react';
import IconPYME from '../../../assets/img/icons/PYME.png'
import IconEmpresa from '../../../assets/img/icons/Empresa.png'
import IconCorporacion from '../../../assets/img/icons/Corporacion.png'
import '../../../assets/css/animacion.css'
import { useInView } from 'react-intersection-observer';
import ContactButtom from '../../../components/widgets/ContactButtom';
import { Title,SubTitle,Parrafo } from '../../../components/widgets/Texts';
function Empresas(props) {
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
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconPYME} alt='Logo palmosima' />
                    <SubTitle text='PYME' />
                    <Parrafo text=' Desarrollos ' />
                    <Parrafo text='para microempresas' />
                    <ContactButtom />
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconEmpresa} alt='Logo palmosima' />
                    <SubTitle text='Empresas' />
                    <Parrafo text='Programas' />
                    <Parrafo text='especializados' />
                    <ContactButtom />
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" className={animationClass}>
                    <Image h={{ lg: '180px', md: '100px', sm: '100px' }} src={IconCorporacion} alt='Logo palmosima' />
                    <SubTitle text='Corporación' />
                    <Parrafo text='Aplicaciones' />
                    <Parrafo text='hechas a la medida' />
                    <ContactButtom />
                </Box>
            </Grid>
        </Box>
    );
}

export default Empresas;