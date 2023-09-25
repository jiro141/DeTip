import React from 'react';
import { Button, Image } from '@chakra-ui/react';

function ButtomsProjects({ img, value, carouselRef }) {
    // console.log(img);
    // const handleButtonClick = (value) => {
    //     console.log(value);
    //     if (carouselRef.current) {
    //         carouselRef.current.slideTo(value);
    //     }
    // };
    return (
        <div>
            <Button  h={{ lg: '300px', md: '100px', sm: '180px' }} background={'none'}>
                <Image h={{ lg: '300px', md: '100px', sm: '180px' }} src={img} alt='Logo palmosima' />
            </Button>
        </div>
    );
}

export default ButtomsProjects;