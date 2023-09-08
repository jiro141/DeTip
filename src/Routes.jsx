import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './view/Home';
import AboutUs from './view/AboutUs';
// import Projects from './components/Projects';
// import Services from './components/Services';
// import Contact from './components/Contact';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route  path="/Home" element={<Home />} /> 
            <Route path="/AboutUs" component={AboutUs} />
            {/* <Route path="/Projects" component={Projects} /> */}
            {/* <Route path="/Services" component={Services} /> */}
            {/* <Route path="/Contact" component={Contact} /> */}
        </Routes>
    );
};

export default AppRoutes;
