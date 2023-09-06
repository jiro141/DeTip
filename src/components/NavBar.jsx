import React from 'react';
import { Link, useLocation, Route } from 'react-router-dom';
import { Flex, Box, Image } from '@chakra-ui/react';
import logo from '../assets/img/logo.png';

const NavBar = () => {
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname;
    };

    const activeLinkStyles = {
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(173,173,173,1) 0%, #1B1A19 68%)',
        padding: ' 0',
        // borderRadius: '5px',
    };

    return (
        <Box
            bg={'#1B1A19'}
            color={'whiteAlpha.900'}
            fontSize={'20px'}
            margin={'0'}
            padding={'10px 20px'}
            display={'flex'}
            justifyContent={'space-between'}
        >
            <Box>
                <Link to='/Home'>
                    <Image h={'50px'} src={logo} alt='Logo palmosima' />
                </Link>
            </Box>
            <Flex gap={'50px'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Link to='/AboutUs' style={isActive('/AboutUs') ? activeLinkStyles : {}}>
                    Nosotros
                </Link>
                <Link to='/Projects' style={isActive('/Projects') ? activeLinkStyles : {}}>
                    Proyectos
                </Link>
                <Link to='/Services' style={isActive('/Services') ? activeLinkStyles : {}}>
                    Servicios
                </Link>
                <Link to='/Contact' style={isActive('/Contact') ? activeLinkStyles : {}}>
                    Contacto
                </Link>
            </Flex>
            
        </Box>
       
    );
};

export default NavBar;
