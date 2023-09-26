import React from 'react';
import { Box, Image, Button, Text } from '@chakra-ui/react';
import felipe from '../../assets/img/equipo/felipe.jpg'
function EquipoButtoms({ nombre, foto }) {
    console.log(nombre);
    return (
        <div>
            <Button background={'none'} _hover={'none'} borderRadius={'50%'}>
                <div style={{ textAlign: 'center' }}>
                    <Image borderRadius={'50%'} w={'150px'} h={{ lg: '150px' }} src={foto} />
                    <Text fontSize={'20px'} color={'whiteAlpha.900'}>{nombre}</Text>
                </div>
            </Button>
        </div>

    );
}

export default EquipoButtoms;