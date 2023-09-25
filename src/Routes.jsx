import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './view/Home';
import AboutUs from './view/AboutUs';
import Projects from './view/Projects';
import Services from './view/Services';
import Contact from './view/Contact';
import Index from './view/Index';
import SpinnerWithLocation from './components/widgets/Spinner';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path='/s' element={<SpinnerWithLocation />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />

        </Routes>
    );
};

export default AppRoutes;
