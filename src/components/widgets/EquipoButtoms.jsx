import React from 'react';
import { Box, Image, Button } from '@chakra-ui/react';
import felipe from '../../assets/img/equipo/felipe.jpg'
function EquipoButtoms(props) {
    return (
        <div>
            <Button background={'none'} _hover={'none'} borderRadius={'50%'}>
                <Image borderRadius={'50%'} w={'150px'} h={{lg:'150px'}} src={felipe} />
            </Button>
        </div>
    );
}

export default EquipoButtoms;