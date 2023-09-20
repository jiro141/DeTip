import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './view/Home';
import AboutUs from './view/AboutUs';
import Projects from './view/Projects';
import Services from './view/Services';
// import Contact from './components/Contact';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Projects" element={<Projects/>}  />
            <Route path="/Services" element={<Services/>}  />
            {/* <Route path="/Contact" component={Contact} /> */}
        </Routes>
    );
};

export default AppRoutes;
