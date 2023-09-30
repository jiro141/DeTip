import React from 'react';
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import arbol from '../../../assets/img/arbol.png'
import '../../../assets/css/Equipos.css';
import { useInView } from 'react-intersection-observer';
import MoreInfo from '../../../components/widgets/MoreInfo';
import nube2 from '../../../assets/img/nube2.png'
import nube1 from '../../../assets/img/nube1.png'
import hojas from '../../../assets/img/hojas.png';
import { SubTitle, Parrafo } from '../../../components/widgets/Texts';
function Hacemos(props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // La animación solo se activará una vez
        threshold: 0.5, // Puedes ajustar este valor según tus necesidades
    });
    return (
        <Grid className={`desarrollo-hacemos ${inView ? 'in-view' : ''}`} ref={ref} templateColumns={{ lg: 'repeat(2,1fr)', md: 'repeat(2,1fr)', sm: "repeat(1,1fr)" }} w={'100%'} margin={'0'}  >
            <Box order={{ md: 1, lg: 1, base: 2 }} >
                <Image margin={'0 0px -15% 0px'} className="slide-up float" h={{ lg: '200px', md: '100px', base: '50px' }} src={nube2} alt='Logo palmosima' />
                <Box margin={{ base: "20px", md: "50px", lg: "70px" }} className='text-container'>
                    <SubTitle text={'¿Por qué lo hacemos?'} color={'#000'} aline={'left'}/>
                    {/* <SubTitle text={'lo hacemos?'} color={'#000'} aline={'left'}/> */}
                    <Parrafo text={'Nuestro objetivo es proveer herramientas que permitan el fácil acceso a la información por medio de la actualización de diferentes tipos de procesos. De esta forma contribuimos a la disminución de la huella de carbono y construimos un mundo mejor.'} color={'#000'} aline={'justify'}/>
                    
                    <MoreInfo />

                </Box>
                <Box display={'flex'} justifyContent={'end'}>
                    <Image textAlign={'right'} margin={'-15% 0  0'} className="slide-up hojas" h={{ lg: '200px', md: '100px', base: '50px' }} src={hojas} alt='Logo palmosima' />
                </Box>
            </Box>
            <Box order={{ md: 2, lg: 2, base: 1 }} >
                <Box className="slide-up float" display={'flex'} justifyContent={'center'} >
                    <Image h={{ lg: '500px', md: '300px', base: '350px' }} src={arbol} alt='Logo palmosima' />
                </Box>
            </Box>
        </Grid>
    );
}

export default Hacemos;