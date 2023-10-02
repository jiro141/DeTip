import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import ButtomsAboutUs from '../../../components/widgets/ButtomsAboutUs';
import mision from '../../../assets/img/icons/Mision.png';
import vision from '../../../assets/img/icons/Vision.png';
import objetivos from '../../../assets/img/icons/objetivos.png';
import publico from '../../../assets/img/icons/Publico objetivo.png';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsBullseye, BsEyeFill } from "react-icons/bs";
import { faSearch, faCrosshairs, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            setIsMobile(window.innerWidth <= 900); // Ajusta el punto de quiebre según sea necesario
        };
        handleResize(); // Comprueba el ancho de pantalla inicial
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(isMobile);
    return (
        <Box justifyContent={'center'} display={'flex'} margin={'50px'} gap={'30px'}>
            {isMobile ? (
                <Box  marginX={'500px'}>
                    <Carousel
                        showArrows={false}
                        infiniteLoop
                        centerMode
                        // autoPlay={true}
                        useKeyboardArrows={true}
                        emulateTouch={true}
                        showThumbs={false}
                        className="custom-carousel"
                    >
                        <Box marginTop={'10px'}>
                            <ButtomsAboutUs icon={<FontAwesomeIcon size={50} icon={faBullseye} />} label={'Misión'} />
                        </Box>
                        <Box>
                            <ButtomsAboutUs icon={<BsEyeFill size={50} />} label={'Visión'} />
                        </Box>
                        <Box>
                            <ButtomsAboutUs icon={<FontAwesomeIcon size={50} icon={faSearch} />} label={'Público Objetivo'} />
                        </Box>
                        <Box>
                            <ButtomsAboutUs icon={<FontAwesomeIcon size={50} icon={faCrosshairs} />} label={'Objetivos Generales'} />
                        </Box>
                    </Carousel>
                </Box>
            ) : (
                <Box display={'flex'} gap={'20px'} marginX={'10px'}>
                    <ButtomsAboutUs icon={<FontAwesomeIcon size={50} icon={faBullseye} />} label={'Misión'} />
                    <ButtomsAboutUs icon={<BsEyeFill size={50} />} label={'Visión'} />
                    <ButtomsAboutUs icon={<FontAwesomeIcon size={50} icon={faSearch} />} label={'Público Objetivo'} />
                    <ButtomsAboutUs icon={<FontAwesomeIcon size={50} icon={faCrosshairs} />} label={'Objetivos Generales'} />
                </Box>
            )}
        </Box>
    );
}

export default MySlider;
