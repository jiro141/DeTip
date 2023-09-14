import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import ButtomsAboutUs from '../../../components/widgets/ButtomsAboutUs';
import mision from '../../../assets/img/icons/Mision.png';
import vision from '../../../assets/img/icons/Vision.png';
import objetivos from '../../../assets/img/icons/objetivos.png';
import publico from '../../../assets/img/icons/Publico objetivo.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../../../assets/css/nosotrosSlider.css"
function MySlider(props) {
    const settings = {
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 4, // Número de imágenes a mostrar en el slider
        focusOnSelect: true,
    };
    const [isMobile, setIsMobile] = useState(false);
console.log(isMobile);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Ajusta el punto de quiebre según sea necesario
        };

        handleResize(); // Comprueba el ancho de pantalla inicial
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box justifyContent={'center'} display={'flex'} margin={'50px'} gap={'30px'}>
            {isMobile ? (
                <>
                    <Carousel
                        infiniteLoop
                        centerMode
                        useKeyboardArrows={true}
                        emulateTouch={true}
                        showThumbs={false}
                        className="custom-carousel"
                    >
                        <Box margin={'10px'}> <ButtomsAboutUs icon={mision} titulo={'Misión'} /></Box>
                        <Box margin={'10px'}><ButtomsAboutUs icon={vision} titulo={'Visión'} /></Box>
                        <Box margin={'10px'}><ButtomsAboutUs icon={objetivos} titulo={'Público Objetivo'} /></Box>
                        <Box margin={'10px'}><ButtomsAboutUs icon={publico} titulo={'Objetivos Generales'} /></Box>
                    </Carousel>
                </>
            ) : (
                <Box display={'flex'} gap={'20px'} marginX={'10px'}>
                    <div>
                        <ButtomsAboutUs icon={mision} titulo={'Misión'} />
                    </div>
                    <div>
                        <ButtomsAboutUs icon={vision} titulo={'Visión'} />
                    </div>
                    <div>
                        <ButtomsAboutUs icon={objetivos} titulo={'Público Objetivo'} />
                    </div>
                    <div>
                        <ButtomsAboutUs icon={publico} titulo={'Objetivos Generales'} />
                    </div>
                </Box>
            )}
        </Box>
    );
}

export default MySlider;
