import React from 'react';
import '../assets/css/fondo2.css'
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { imgPatolsima } from '../components/array/imgProyect';
import AliCarousel from './components/Projects/AliCarousel';
import EquipoCarrusel from './components/Projects/EquipoCarrusel';

function Projects(props) {
    return (
        <>
            <div className='space'>
            </div>
            <Box margin={{ lg: '30px 200px', md: '30px 150px', sm: '30px 100px' }}>
                <Text className="slide-up" marginY={'40px'} textAlign={'left'} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Patolsima App</Text>
                <Grid gap={'50px'} templateColumns={{ base: '1fr', md: ' 1fr', lg: '1.1fr 1fr' }}>
                    <Carousel
                        className="slide-up"
                        // infiniteLoop
                        centerMode
                        // useKeyboardArrows={true}
                        // emulateTouch={true}
                        autoPlay
                        interval={3000}
                    // autoFocus={true}
                    >
                        {imgPatolsima.map((image) => (
                            <Image h={{ lg: '300px', md: '500px', sm: '500px' }} src={image.url} alt='Logo palmosima' />
                        ))}
                    </Carousel>
                    <Box>
                        <Text className="slide-up" marginTop={'10px'} textAlign={'justify'} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                            Descripción: <br />
                            Patolsima App, la revolucionaria herramienta de DeTip para el Laboratorio Patolsima que combina eficiencia en la gestión patológica con un enfoque ecológico, permitiéndote simplificar y digitalizar la administración de informes patológicos. Ahorra papel y abraza los envíos digitales mientras apoya la sostenibilidad. Únete hoy para impulsar el cambio.
                        </Text>
                        <Text className="slide-up" marginTop={'10px'} textAlign={'left'} zIndex={99} color={'blue.400'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                            Más Información &rsaquo;
                        </Text>
                    </Box>
                </Grid>
                <Text className="slide-up" marginY={'20px'} textAlign={'center'} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Opinión del Cliente:</Text>
                <Text className="slide-up" marginTop={'10px'} textAlign={'center'} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                    "Originalmente buscaba una forma de crear una base de datos que me permitiera entrelazar las muestras recibidas con los informes. Sin embargo, poder crear y administrar todo desde un mismo lugar nos hizo el trabajo más fácil. Estoy muy satisfecho con el resultado"
                    Simón Peraza - CEO de laboratorio Patolsima
                </Text>
            </Box>
            <AliCarousel />
            <Text className="slide-up" marginY={'40px'} textAlign={'center'} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>Equipo</Text>
            <EquipoCarrusel />
        </>
    );
}

export default Projects;