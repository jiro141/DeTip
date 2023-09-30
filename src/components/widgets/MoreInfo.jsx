import React from 'react';
import { Text, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
function MoreInfo(props) {
    return (
        <Link to='/Services'>
            <Text
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                marginTop={'10px'}
                textAlign={'center'}
                zIndex={99}
                color={'blue.400'}
                fontSize={{ base: "14px", md: "18px", lg: "20px" }}
            >
                Más Información <FaAngleRight />
            </Text>
        </Link>
    );
}

export default MoreInfo;