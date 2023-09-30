import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../assets/context/IdiomaContext';

// Objeto de traducción
const translations = {
    AboutUs: 'Nosotros',
    Projects: 'Proyectos',
    Services: 'Servicios',
    Contact: 'Contacto',
};

export const MenuItem = ({ label, icon }) => {
    const { language, changeLanguage } = useLanguage();
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(location.pathname === `/${label}`);
    }, [location.pathname, label]);

    // Obtiene la traducción correspondiente según el idioma
    const translatedLabel = translations[label] || label;

    return (
        <div className='menu'>
            <li>
                {isActive ?
                    <Link to={`/${label}`} >
                        <span>
                            <i>{icon}</i>
                        </span>
                    </Link> :
                    <Link className='a' to={`/${label}`} >
                        <span>{translatedLabel}</span>
                        <span>
                            <i>{icon}</i>
                        </span>
                    </Link>
                }
            </li>
        </div>
    );
};
