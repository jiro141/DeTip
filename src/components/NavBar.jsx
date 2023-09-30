import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Box, Image, IconButton, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faTasks, faUsers, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from './widgets/MenuItem';
import '../assets/css/animacion.css'

import logo from '../assets/img/Propuesta-Logo-1.webp';



const NavBar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (pathname) => {
        return location.pathname === pathname;
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Box
            className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}
            bg={'#1B1A19'}
            color={'whiteAlpha.900'}
            fontSize={'18px'}
            margin={' 0'}
            padding={'10px 20px'}
            display={'flex'}
            justifyContent={'space-between'}
        >
            <Box m={'auto 0'}>
                <Link to="/">
                    <Image h={{ base: '40px', md: '35px', lg: '40px' }} src={logo} alt="Logo palmosima" />
                </Link>
            </Box>
            <IconButton
                icon={isMenuOpen ? <CloseIcon fontSize={'20px'} /> : <HamburgerIcon fontSize={'30'} />}
                display={['block', 'block', 'none']}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                bgColor="transparent"
                color="white"
                h={'50px'}
                alignSelf="center"
            />
            <Flex gap={'50px'} alignItems={'center'} justifyContent={['space-between', 'space-between', 'flex-end']} display={['none', 'none', 'flex']}>
                <MenuItem label="AboutUs" icon={<FontAwesomeIcon icon={faAddressCard} aria-hidden="true" />} />
                <MenuItem label="Projects" icon={<FontAwesomeIcon icon={faTasks} aria-hidden="true" />} />
                <MenuItem label="Services" icon={<FontAwesomeIcon icon={faUsers} aria-hidden="true" />} />
                <MenuItem label="Contact" icon={<FontAwesomeIcon icon={faEnvelopeOpenText} aria-hidden="true" />} />
            </Flex>
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
                            <MenuItem label="AboutUs" icon={<FontAwesomeIcon icon={faAddressCard} aria-hidden="true" />} />
                            <MenuItem label="Projects" icon={<FontAwesomeIcon icon={faTasks} aria-hidden="true" />} />
                            <MenuItem label="Services" icon={<FontAwesomeIcon icon={faUsers} aria-hidden="true" />} />
                            <MenuItem label="Contact" icon={<FontAwesomeIcon icon={faEnvelopeOpenText} aria-hidden="true" />} />
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default NavBar;
