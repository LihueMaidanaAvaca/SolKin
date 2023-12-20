import React, { useState } from 'react';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import yearK from '../utils/yearK';
import toKin from '../utils/toKin'
import Oracle from '../components/Oracle';
import KinMaya from '../components/KinMaya';
import SpellWave from '../components/SpellWave';

export default function HomePage({ day, month, year }) {

    // Obtener la fecha actual
    const currentDate = new Date();

    // Formatear la fecha para mostrarla
    const formattedDate = currentDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Procesar el día y el mes con dayAndMonthK, y el año con yearK
    const processedDayMonth = dayAndMonthK(day, month);
    const processedYear = yearK(year);

    const kinMaya = toKin(processedYear, processedDayMonth)

    console.log(kinMaya)

    // Estado para controlar la visibilidad del Oracle
    const [showOracle, setShowOracle] = useState(false);

    // Función para cambiar la visibilidad del Oracle
    const toggleOracleVisibility = () => {
        setShowOracle(!showOracle);
    };

    return (
        < >
            <section style={{height: "100dvh" }}>
                <KinMaya kinMaya={kinMaya} />
                <h4>
                    KinMaya {kinMaya.kin}: {kinMaya.Umbral}
                </h4>
                <button onClick={toggleOracleVisibility}>
                    {showOracle ? 'Ocultar Oracle' : 'Mostrar Oracle'}
                </button>
                {showOracle && <Oracle kinMaya={kinMaya} />}
            </section>
            <h5>
                Onda: {kinMaya.Onda}
            </h5>
            <SpellWave kinMaya={kinMaya} />
        </>
    );
}