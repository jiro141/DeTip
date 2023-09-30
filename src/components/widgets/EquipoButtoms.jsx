import React from 'react';
import { Box, Image, Button, Text, Center } from '@chakra-ui/react';
import felipe from '../../assets/img/equipo/felipe.jpg'
function EquipoButtoms({ nombre, foto, labor }) {
    console.log(nombre);
    return (
        <div>
            {/* <Button background={'none'} _hover={'none'} borderRadius={'50%'}> */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Image borderRadius={'50%'} w={'150px'} h={{ lg: '150px' }} src={foto} />
                <Text marginTop={'10px'} fontSize={'20px'} color={'whiteAlpha.900'}>{nombre}</Text>
                <Text marginTop={'10px'} fontSize={'15px'} color={'whiteAlpha.900'}>{labor}</Text>
            </div>
            {/* </Button> */}
        </div>

    );
}

export default EquipoButtoms;