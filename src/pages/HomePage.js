import React from 'react';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import yearK from '../utils/yearK';
import toKin from '../utils/toKin'
import Oracle from '../components/Oracle';
import KinMaya from '../components/KinMaya'; 
import SpellWave from '../components/SpellWave';

export default function HomePage(){

    // Obtener la fecha actual
    const currentDate = new Date();
    
    // Formatear la fecha para mostrarla
    const formattedDate = currentDate.toLocaleDateString('es-ES', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Obtener el día, mes y año actual
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() devuelve un índice basado en cero, por lo que se suma 1.
    const currentYear = currentDate.getFullYear();

    // Procesar el día y el mes con dayAndMonthK, y el año con yearK
    const processedDayMonth = dayAndMonthK(currentDay, currentMonth);
    const processedYear = yearK(currentYear);

    const kinMaya = toKin(processedYear, processedDayMonth)

    console.log(kinMaya)

    return (
        <div>
            <h5>
                Fecha Actual: {formattedDate}
            </h5>
            < h4>
                {kinMaya.Umbral}
            </h4>
            <KinMaya kinMaya={kinMaya}/>
            <Oracle kinMaya={kinMaya}/>
            <h5>
                Onda: {kinMaya.Onda}
            </h5>
            <SpellWave kinMaya={kinMaya}/>
        </div>
    );
}