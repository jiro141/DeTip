import React, { useState } from 'react';
import { useLanguage } from '../assets/context/IdiomaContext';
import logo from '../assets/img/PropuestaLogo.png'
import { Select, Box, FormControl, FormLabel, Image } from '@chakra-ui/react';
import '../assets/css/fondo.css'
import astronautas from '../assets/img/planeta.png'
import { useNavigate } from 'react-router-dom';
const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();
    const [selectedContinent, setSelectedContinent] = useState('');
    const navigate = useNavigate();

    const handleContinentChange = (event) => {
        setSelectedContinent(event.target.value);
    };

    const handleLanguageChange = (event) => {
        changeLanguage(event.target.value);
        navigate('Home');
    };


    const continentOptions = [
        { value: 'north-america', label: 'North America' },
        { value: 'latin-america', label: 'Latin America' },
        { value: 'europe', label: 'Europe' },
    ];

    const languageOptions = {
        'north-america': ['', 'en'],
        'latin-america': ['-selecciona un idioma-', 'es', 'en'],
        'europe': ['-selecciona un idioma-', 'es', 'en'],
    };

    const selectedLanguageOptions = languageOptions[selectedContinent] || [];

    return (
        <Box className='contacto'>
            {/* <Box maxH={'20hv'} className='space'></Box> */}
            <Box gap={'20px'} w={'100%'} margin={'90px 20px'} display={{ lg: 'flex', md: 'block', sm: 'block' }} justifyContent={'space-around'}>
                <Box className='slide-up' w={'40%'} h={'100%'} p={4} borderRadius="20px" backgroundColor={'#bababac1'}>
                    <Image  h={{ lg: '10em', md: '500px', sm: '100px' }} src={logo} alt='Logo palmosima' />
                    <FormControl>
                        <FormLabel textAlign={'left'} zIndex={99} color={'#FFFF'} fontSize={{ base: "14px", md: "15px", lg: "20px" }} htmlFor="continentSelect">Seleccione un continente:</FormLabel>
                        <Select
                            border={'none'}
                            borderRadius={'20px'}
                            backgroundColor={'#bababac1'}
                            id="continentSelect"
                            onChange={handleContinentChange}
                            placeholder="Seleccione un continente"
                        >
                            {continentOptions.map((continent) => (
                                <option key={continent.value} value={continent.value}>
                                    {continent.label}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    {selectedContinent && (
                        <FormControl mt={4}>
                            <FormLabel textAlign={'left'} zIndex={99} color={'#FFFF'} htmlFor="languageSelect">Seleccione un idioma:</FormLabel>
                            <Select
                                border={'none'}
                                borderRadius={'20px'}
                                backgroundColor={'#bababac1'}
                                id="languageSelect"
                                onChange={handleLanguageChange}
                                value={language}
                            >
                                {selectedLanguageOptions.map((lang) => (
                                    <option key={lang} value={lang}>
                                        {lang === 'es' ? 'Español' : 'Inglés'}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default LanguageSelector;
