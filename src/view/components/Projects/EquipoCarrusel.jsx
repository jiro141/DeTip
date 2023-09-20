import React from 'react';
import { Box } from '@chakra-ui/react';
import EquipoButtoms from '../../../components/widgets/EquipoButtoms';

function EquipoCarrusel(props) {
    return (
        <Box margin={'100px 50px 200px 50px'} display={'flex'} justifyContent={'space-around'}>
            <EquipoButtoms />
            <EquipoButtoms />
            <EquipoButtoms />
            <EquipoButtoms />

        </Box>
    );
}

export default EquipoCarrusel;