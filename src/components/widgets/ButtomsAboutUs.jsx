import React, { useContext } from 'react';
import { Button, Image, Text, Box } from '@chakra-ui/react';
import { NosotrosContext } from '../../assets/context/nosotrosConstext';

function ButtomsAboutUs({ titulo, icon }) {
    const { nosotros, changeNosotros } = useContext(NosotrosContext);
    console.log(nosotros);
    return (
        <>
            <Button w={{lg:'300px',md:'200px',sm:'300px'}} padding={'100px 20px'} onClick={() => changeNosotros(titulo)}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" >
                    <Image marginTop={'-30px'} h={{ lg: '180px', md: '100px', sm: '180px' }} src={icon} alt='Logo palmosima' />
                    <Text
                        marginTop={'-30px'}
                        color={'blackAlpha.900'}
                        fontSize={{ base: "14px", md: "18px", lg: "20px" }}
                    >
                        {titulo}
                    </Text>
                </Box>
            </Button>
        </>
    );
}

export default ButtomsAboutUs;