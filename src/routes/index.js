// src/routes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UnKinMaya from '../pages/UnKinMaya';
// import AboutPage from '../pages/AboutPage';
// import ContactPage from '../pages/ContactPage';
// ...importa otras páginas según sea necesario

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/unkinmaya" element={<UnKinMaya />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* ...define otras rutas aquí */}
        </Routes>
    );
}

export default MainRoutes;
