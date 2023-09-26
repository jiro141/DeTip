import React from 'react';
import { Box } from '@chakra-ui/react';
import EquipoButtoms from '../../../components/widgets/EquipoButtoms';
import felipe from '../../../assets/img/equipo/felipe.jpg'
import alfredo from '../../../assets/img/equipo/alfredo.jpg'
import maria from '../../../assets/img/equipo/maria.jpg'

function EquipoCarrusel(props) {
    return (
        <Box margin={'100px 50px 200px 50px'} display={'flex'} justifyContent={'space-around'}>
            <EquipoButtoms foto={felipe} nombre={'Felipe'}  />
            <EquipoButtoms foto={alfredo} nombre={'Alfredo'} />
            <EquipoButtoms foto={maria} nombre={'Maria'} />
            {/* <EquipoButtoms /> */}

        </Box>
    );
}

export default EquipoCarrusel;