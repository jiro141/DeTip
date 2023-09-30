import React from 'react';
import { Text, Box, Grid } from '@chakra-ui/react';
// import manos from '../../assets/img/manos.png';
import { Link } from 'react-router-dom';
import '../../../assets/css/Equipos.css'; // Asegúrate de importar tu archivo de estilos CSS
import { useInView } from 'react-intersection-observer'; 
import MoreInfo from '../../../components/widgets/MoreInfo';
import { Title, Parrafo, SubTitle } from '../../../components/widgets/Texts';
function Equipos(props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
        threshold: 0.4, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <Box className={`equipos-container ${inView ? 'in-view' : ''}`} ref={ref} >
            <Box className="text-container" marginTop={{ base: "-100%", md: "-80%", lg: "-25%" }}>
            <SubTitle text={'Equipos de trabajo'}/>
            <SubTitle text={'hechos a mano'}/>
            <Parrafo text={'Trabajemos juntos para construir tus sueños'}/>
                
                <MoreInfo />
            </Box>
        </Box>
    );
}

export default Equipos;
