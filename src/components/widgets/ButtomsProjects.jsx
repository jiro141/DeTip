import React from 'react';
import { Button, Image } from '@chakra-ui/react';

function ButtomsProjects({ img }) {
    console.log(img);
    return (
        <div>
            <Button h={{ lg: '300px', md: '100px', sm: '180px' }} background={'none'}>
                <Image h={{ lg: '300px', md: '100px', sm: '180px' }} src={img} alt='Logo palmosima' />
            </Button>
        </div>
    );
}

export default ButtomsProjects;