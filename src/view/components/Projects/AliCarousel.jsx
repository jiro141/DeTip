import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../assets/css/alice-carousel.css'
import { Box } from '@chakra-ui/react';
import ButtomsProjects from '../../../components/widgets/ButtomsProjects';
import patolsima from '../../../assets/img/projects/patolsima/1.png'
import detip from '../../../assets/img/projects/Detip/20.png'
function AliCarousel(props) {
    const [active,setActive]=useState(1)
    const carouselRef = useRef(null);
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 3 },
    };
    const handleButtonClick = () => {
        setActive(active+1);
    };

    const items = [
        <div className="item" data-value="1">
            <Box > <ButtomsProjects onClick={() => handleButtonClick(1)} img={detip} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="2">
            <Box > <ButtomsProjects onClick={() => handleButtonClick(2)} img={patolsima} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="3">
            <Box > <ButtomsProjects onClick={() => handleButtonClick(3)} img={detip} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="4">
            <Box > <ButtomsProjects onClick={() => handleButtonClick(4)} img={patolsima} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="5">
            <Box > <ButtomsProjects onClick={() => handleButtonClick(5)} img={patolsima} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="5">
            <Box > <ButtomsProjects onClick={() => handleButtonClick(5)} img={patolsima} titulo={'Misión'} /></Box>
        </div>,
    ];

    const Carousel = () => (
        <AliceCarousel
            activeIndex={active}
            mouseTracking={false}
            items={items}
            responsive={responsive}
            controlsStrategy='responsive'
            autoPlayControls={true}
            disableButtonsControls={false}
            disableDotsControls={true}
            keyboardNavigation={true}
            infinite={true}
            
        />
    );
    return (
        <Box margin={'50px -100px'}> <Carousel /></Box>
    )
}

export default AliCarousel;