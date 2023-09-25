import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Box } from '@chakra-ui/react';
import ButtomsProjects from '../../../components/widgets/ButtomsProjects';
import patolsima from '../../../assets/img/projects/patolsima/1.png'
import detip from '../../../assets/img/projects/Detip/20.png'
function AliCarousel(props) {
    const carouselRef = useRef(null);
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 3 },
    };
    const handleButtonClick = (buttonIndex) => {
        if (carouselRef.current) {
            carouselRef.current.slideTo(buttonIndex);
        }
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
            activeIndex={1}
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            infinite={true}
        />
    );
    return (
        <Box margin={'50px -100px'}> <Carousel /></Box>
    )
}

export default AliCarousel;