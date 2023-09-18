import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ButtomsAboutUs from '../../../components/widgets/ButtomsAboutUs';
import mision from '../../../assets/img/icons/Mision.png';
import { Box } from '@chakra-ui/react';
import ButtomsProjects from '../../../components/widgets/ButtomsProjects';
import patolsima from '../../../assets/img/projects/patolsima/1.png'
import detip from '../../../assets/img/projects/Detip/20.png'
function AliCarousel(props) {
    const responsive = {
        0: { items: 1 },
        568: { items: 3 },
        1024: { items: 3 },
    };

    const items = [
        <div className="item" data-value="1">
            <Box > <ButtomsProjects img={detip} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="2">
            <Box > <ButtomsProjects img={patolsima} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="3">
            <Box > <ButtomsProjects img={detip} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="4">
            <Box > <ButtomsProjects img={patolsima} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="5">
            <Box > <ButtomsProjects img={patolsima} titulo={'Misión'} /></Box>
        </div>,
        <div className="item" data-value="5">
            <Box > <ButtomsProjects img={patolsima} titulo={'Misión'} /></Box>
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