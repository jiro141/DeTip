import React, { useContext } from 'react';
import { NosotrosContext } from '../../../assets/context/nosotrosConstext';
import { Grid, Text, Image, Box } from '@chakra-ui/react';
import mision from '../../../assets/img/Mision.png'
import Vision from '../../../assets/img/Vision.png'
import publico_objetivo from '../../../assets/img/publico_objetivo.png'
import objetivos_generales from '../../../assets/img/objetivos_generales.png';
import { motion } from 'framer-motion';
function Datos(props) {
    const { nosotros } = useContext(NosotrosContext);
    let contenido = null;
    const fadeInVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };
    const fadeInVariantsFonts = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    switch (nosotros) {
        case 'Misión':
            contenido = (
                <Box margin={'30px'}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariantsFonts}
                    >
                        <Text
                            borderBottom={'solid 2px'}
                            borderColor={'#FFFF'}
                            marginTop={'40px'}
                            color={'#FFFF'}
                            fontSize={{ base: "24px", md: "30px", lg: "40px" }}
                        >{nosotros}</Text>
                    </motion.div>
                    <Grid
                        margin={'20px 10px'}
                        gap={'20px'}
                        templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <Image
                                borderRight={'solid 5px'}
                                borderColor={'#FFFF'}
                                h={{ lg: '450px', md: '500px', sm: '500px' }}
                                src={mision}
                                alt='Logo palmosima' />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariantsFonts}
                        >
                            <Text
                                marginTop={'10px'}
                                textAlign={'justify'}
                                color={'#FFFF'}
                                fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                                En DeTip, nuestra misión es liderar la creación de proyectos digitales innovadores con un enfoque sostenible y empresarial, elevando los estándares de calidad en el mercado. Buscamos impulsar la participación de las marcas al brindar servicios completos que generen impacto positivo.
                            </Text>
                        </motion.div>
                    </Grid>
                </Box>
            );
            break;
        case 'Visión':
            contenido = (
                <Box margin={'30px'}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariantsFonts}>
                        <Text
                            borderBottom={'solid 2px'}
                            borderColor={'#FFFF'}
                            marginTop={'40px'}
                            color={'#FFFF'}
                            fontSize={{ base: "24px", md: "30px", lg: "40px" }}
                        >{nosotros}</Text>
                    </motion.div>
                    <Grid margin={'20px 10px'} gap={'20px'} templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}>
                            <Image borderRight={'solid 5px'} borderColor={'#FFFF'} h={{ lg: '450px', md: '500px', sm: '500px' }} src={Vision} alt='Logo palmosima' />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariantsFonts}>
                            <Text  marginTop={'10px'} textAlign={'justify'} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                                Nos esforzamos por ser reconocidos como líderes en la creación de proyectos digitales sostenibles e innovadores que influyan en la forma en que las empresas operan y se relacionan con su entorno. Queremos ser una fuente de inspiración para la adopción de prácticas empresariales y tecnológicas respetuosas y sostenibles.
                            </Text>
                        </motion.div>
                    </Grid>
                </Box>
            );
            break;
        case 'Público Objetivo':
            contenido = (
                <Box margin={'30px'}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariantsFonts}>
                        <Text borderBottom={'solid 2px'} borderColor={'#FFFF'} className="slide-up" marginTop={'40px'} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>{nosotros}</Text>
                    </motion.div>
                    <Grid margin={'20px 10px'} gap={'20px'} templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}>
                            <Image borderRight={'solid 5px'} borderColor={'#FFFF'} h={{ lg: '450px', md: '500px', sm: '500px' }} src={publico_objetivo} alt='Logo palmosima' />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariantsFonts}>
                            <Text className="slide-up" marginTop={'10px'} textAlign={'justify'} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>

                                Nuestro público objetivo incluye empresas y organizaciones que valoran la innovación y la sostenibilidad en sus operaciones. Estamos dirigidos a aquellas entidades que buscan no solo crecer en términos económicos, sino también desean contribuir positivamente al entorno en el que operan.
                            </Text>
                        </motion.div>
                    </Grid>
                </Box>
            );
            break;
        case 'Objetivos Generales':
            contenido = (
                <Box margin={'30px'}>
                    <Text borderBottom={'solid 2px'} borderColor={'#FFFF'} className="slide-up" marginTop={'40px'} color={'#FFFF'} fontSize={{ base: "24px", md: "30px", lg: "40px" }}>{nosotros}</Text>
                    <Grid margin={'20px 10px'} gap={'20px'} templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
                        <Image borderRight={'solid 5px'} borderColor={'#FFFF'} h={{ lg: '450px', md: '500px', sm: '500px' }} src={objetivos_generales} alt='Logo palmosima' />
                        <Text className="slide-up" marginTop={'10px'} textAlign={'justify'} color={'#FFFF'} fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
                            1. Desarrollar proyectos digitales que integren soluciones innovadoras y sostenibles para las empresas.
                            <br /> <br />2. Impulsar la conciencia ecológica y la adopción de prácticas empresariales responsables en el mercado.
                            <br /> <br />3. Fomentar la colaboración y la creación de alianzas estratégicas con instituciones académicas y de investigación.
                        </Text>
                    </Grid>
                </Box>
            );
            break;
        default:
            break;
    }

    return (
        <div>
            {contenido}
        </div>
    );
}

export default Datos;
