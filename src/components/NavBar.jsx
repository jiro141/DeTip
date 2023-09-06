import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Box, Image, IconButton, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import logo from '../assets/img/logo.png';

const NavBar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (pathname) => {
        return location.pathname === pathname;
    };

    const activeLinkStyles = {
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(173,173,173,1) 0%, #1B1A19 68%)',
        padding: '0',
    };

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
            {/* Mostrar el icono de menú (HamburgerIcon) en modo responsivo */}
            <IconButton
                icon={isMenuOpen ? <CloseIcon fontSize={'20px'} /> : <HamburgerIcon fontSize={'30'} />}
                display={['block', 'block', 'none']} // Mostrar solo en dispositivos móviles
                onClick={toggleMenu}
                aria-label='Toggle Menu'
                bgColor='transparent'
                color='white'
                h={'50px'}
                // fontSize={'20px'}
                _hover={'none'}
                alignSelf="center"
            />
            <Flex
                gap={'50px'}
                alignItems={'center'}
                justifyContent={['space-between', 'space-between', 'flex-end']}
                display={['none', 'none', 'flex']}
            >
                <Link
                    to='/AboutUs'
                    style={isActive('/AboutUs') ? activeLinkStyles : {}}
                    
                >
                    Nosotros
                </Link>
                <Link
                    to='/Projects'
                    style={isActive('/Projects') ? activeLinkStyles : {}}
                >
                    Proyectos
                </Link>
                <Link
                    to='/Services'
                    style={isActive('/Services') ? activeLinkStyles : {}}
                >
                    Servicios
                </Link>
                <Link
                    to='/Contact'
                    style={isActive('/Contact') ? activeLinkStyles : {}}
                >
                    Contacto
                </Link>
            </Flex>
            {/* Mostrar enlace en el menú desplegable en modo responsivo */}
            {isMenuOpen && (
                <Box
                    bg={'#1B1A19'}
                    color={'whiteAlpha.900'}
                    padding={'1.2rem'}
                    fontSize={'20px'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    position={'absolute'}
                    top={'60px'} // Ajusta la posición vertical según tus necesidades
                    right={'20px'} // Ajusta la posición horizontal según tus necesidades
                    zIndex={1} // Asegura que el bloque esté sobre otros elementos
                    gap={'10px'}
                >
                    <Link
                        to='/AboutUs'
                        style={ isActive('/AboutUs') ? activeLinkStyles : {}}
                    >
                        Nosotros
                    </Link>
                    <Link
                        to='/Projects'
                        style={isActive('/Projects') ? activeLinkStyles : {}}
                    >
                        Proyectos
                    </Link>
                    <Link
                        to='/Services'
                        style={isActive('/Services') ? activeLinkStyles : {}}
                    >
                        Servicios
                    </Link>
                    <Link
                        to='/Contact'
                        style={isActive('/Contact') ? activeLinkStyles : {}}
                    >
                        Contacto
                    </Link>
                </Box>
            )}
        </Box>
    );
};

export default NavBar;