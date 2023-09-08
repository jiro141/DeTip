import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Box, Image, IconButton, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion'; // Importa motion y AnimatePresence

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
            fontSize={'18px'}
            margin={'0'}
            padding={'10px 20px'}
            display={'flex'}
            justifyContent={'space-between'}
        >
            <Box>
                <Link to='/Home'>
                    <Image h={'30px'} src={logo} alt='Logo palmosima' />
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
            {/* Agrega animación al menú desplegable */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            position: 'absolute',
                            top: '60px',
                            right: '20px',
                            zIndex: 1,
                        }}
                    >
                        <Box
                            bg={'#1B1A19'}
                            color={'whiteAlpha.900'}
                            padding={'1.2rem'}
                            fontSize={'20px'}
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                            gap={'10px'}
                            borderBottomRadius={'20px'}
                        >
                            {/* Utiliza map para aplicar animación a cada enlace */}
                            {['AboutUs', 'Projects', 'Services', 'Contact'].map((path) => (
                                <motion.div
                                    key={path}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to={`/${path}`}
                                        style={isActive(`/${path}`) ? activeLinkStyles : {}}
                                    >
                                        {path === 'AboutUs' ? 'Nosotros' : path}
                                    </Link>
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

        </Box>
    );
};

export default NavBar;
