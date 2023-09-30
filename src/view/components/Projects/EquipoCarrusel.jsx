import React from 'react';
import { Box } from '@chakra-ui/react';
import EquipoButtoms from '../../../components/widgets/EquipoButtoms';
import felipe from '../../../assets/img/equipo/felipe.jpg'
import alfredo from '../../../assets/img/equipo/alfredo.jpg'
import maria from '../../../assets/img/equipo/maria.jpg';
import mariaDev from '../../../assets/img/equipo/maria_dev.jpg'
import jesus from '../../../assets/img/equipo/jesus.jpg'
import nelson from '../../../assets/img/equipo/nelson.jpg'

function EquipoCarrusel(props) {
    return (
        <Box margin={'100px 50px 200px 50px'} display={'flex'} justifyContent={'space-around'}>
            <EquipoButtoms foto={felipe} nombre={'Felipe Colmenares'} labor={'Desarrolador Frontend'}  />
            <EquipoButtoms foto={alfredo} nombre={'Alfredo Villamizar'}  labor={'Scrum Master'}/>
            <EquipoButtoms foto={maria} nombre={'Maria Villamizar'} labor={'Diseñadora UX/UI'} />
            <EquipoButtoms foto={mariaDev} nombre={'Maria Carrero'} labor={'Desarrolador Frontend'}  />
            <EquipoButtoms foto={nelson} nombre={'Nelson Rosales'} labor={'CEO'}  />
            <EquipoButtoms foto={jesus} nombre={'Jesus Reyes'} labor={'Desarrolador Backend'}  />
            {/* <EquipoButtoms /> */}

        </Box>
    );
}

export default EquipoCarrusel;