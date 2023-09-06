import React from 'react';
import { Link, useLocation, Route } from 'react-router-dom';
import { Flex, Box, Image,Text } from '@chakra-ui/react';
import logo from '../assets/img/logo.png';
import { AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin, AiFillMail } from "react-icons/ai";
function Footer(props) {
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
                    <Image h={'30px'} src={logo} alt='Logo DeTip' />
                </Link>
            </Box>
            <Text textAlign={'center'} fontSize={'16px'}>© 2023 DeTip compañía digital, todos los derechos reservados</Text>
            <Flex gap={'10px'} alignItems={'center'} >
                <Link>
                    <AiOutlineWhatsApp />
                </Link>
                <Link >
                    <AiFillLinkedin />
                </Link>
                <Link >
                    <AiFillInstagram />
                </Link>
                <Link>
                    <AiFillMail />
                </Link>
            </Flex>

        </Box>
    );
}

export default Footer;