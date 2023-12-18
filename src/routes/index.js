// src/routes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import UnKinMaya from '../pages/UnKinMaya';
import ListaDeKines from '../pages/ListaDeKines';
// import ContactPage from '../pages/ContactPage';
// ...importa otras páginas según sea necesario

const MainRoutes = ({ day, month, year }) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage day={day} month={month} year={year} />} />
            <Route path="/kins" element={<ListaDeKines />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* ...define otras rutas aquí */}
        </Routes>
    );
}

export default MainRoutes;
