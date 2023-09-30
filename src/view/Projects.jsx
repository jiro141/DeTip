import React from 'react';
import '../assets/css/fondo2.css'
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imgPatolsima } from '../components/array/imgProyect';
import AliCarousel from './components/Projects/AliCarousel';
import EquipoCarrusel from './components/Projects/EquipoCarrusel';
import MoreInfo from '../components/widgets/MoreInfo';
import { Title, Parrafo, SubTitle } from '../components/widgets/Texts';

function Projects(props) {
    return (
        <Box margin={{ lg: '0', md: '0px 8%', sm: '0px 8%' }} overflowX={'hidden'}>
            <Box className='space'>
            </Box>
            <Box className="slide-up" margin={{ lg: '30px 200px', md: '30px 150px', sm: '30px 100px' }}>
                <SubTitle text={'Patolsima App'} aline={'left'} />
                <Grid className="slide-up" gap={'50px'} templateColumns={{ base: '1fr', md: ' 1fr', lg: '1.1fr 1fr' }}>
                    <Carousel
                        showArrows={true} // Oculta las flechas
                        centerMode={false}
                        infiniteLoop={true} // Desactiva el modo centrado
                        autoPlay={true}
                        showStatus={false}
                        showIndicators={false}
                        interval={3000}
                    >
                        {imgPatolsima.map((image) => (
                            <Image h={{ lg: '300px', md: '500px', sm: '500px' }} src={image.url} alt='Logo palmosima' />
                        ))}
                    </Carousel>
                    <Box className="slide-up">
                        <Parrafo text={'Descripción:'} aline={'left'} /> <br />
                        <Parrafo text={'Patolsima App, la revolucionaria herramienta de DeTip para el Laboratorio Patolsima que combina eficiencia en la gestión patológica con un enfoque ecológico, permitiéndote simplificar y digitalizar la administración de informes patológicos. Ahorra papel y abraza los envíos digitales mientras apoya la sostenibilidad. Únete hoy para impulsar el cambio.'} aline={'justify'} />
                        <MoreInfo />
                    </Box>
                </Grid>
                {/* <SubTitle className="slide-up" text={'Opinión del Cliente:'} />
                <Parrafo text={"Originalmente buscaba una forma de crear una base de datos que me permitiera entrelazar las muestras recibidas con los informes. Sin embargo, poder crear y administrar todo desde un mismo lugar nos hizo el trabajo más fácil. Estoy muy satisfecho con el resultado."} />
                <Parrafo text={'Simón Peraza - CEO de laboratorio Patolsima.'} /> */}
            </Box>
            <Box className="slide-up">
                <AliCarousel className="slide-up" />
                <SubTitle text={'Equipo'}/>
                {/* <Text marginY={'40px'} textAlign={'center'} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Equipo</Text> */}
                <EquipoCarrusel className="slide-up" />
            </Box>
        </Box>
    );
}

export default Projects;