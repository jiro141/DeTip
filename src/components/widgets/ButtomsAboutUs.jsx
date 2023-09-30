import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Image, Text, Box, Icon } from '@chakra-ui/react';
import { NosotrosContext } from '../../assets/context/nosotrosConstext';
import '../../assets/css/animacion.css';
function ButtomsAboutUs({ label, icon }) {
    const { nosotros, changeNosotros } = useContext(NosotrosContext);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        // Actualiza isActive cuando nosotros está activo
        setIsActive(nosotros === label);
    }, [nosotros, label]);
    console.log(nosotros);
    return (
        <Box  minW={'300px'} minH={'80px'} backgroundColor={'#FFF'} borderRadius={'5px'} padding={'10px 20px'}>
            <div className='menu2'>
                <li>
                    {isActive ?
                        <Link  onClick={() => changeNosotros(label)} >
                            <span>
                                <i>{icon}</i>
                            </span>
                        </Link> :
                        <Link className='a' onClick={() => changeNosotros(label)}  >
                            <span>{label}</span>
                            <span>
                                <i>{icon}</i>
                            </span>
                        </Link>
                    }
                </li>
            </div>
        </Box>
    );
}

export default ButtomsAboutUs;