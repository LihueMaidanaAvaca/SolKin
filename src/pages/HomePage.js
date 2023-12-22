import React, { useState } from 'react';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import yearK from '../utils/yearK';
import toKin from '../utils/toKin'
import KinMaya from '../components/KinMaya';
import Oracle from '../components/Oracle';
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
    const [showWave, setShowWave] = useState(false);

    // Función para cambiar la visibilidad del Oracle
    const toggleOracleVisibility = () => {
        setShowOracle(!showOracle);
    };

    const toggleWaveVisibility = () => {
        setShowWave(!showWave)
    }

    return (
        <div >
            <section style={{ height: "100vh" }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '10px', margin: '10px' }}>
                    <div className='card' style={{ backgroundColor: 'rgba(0, 0, 0, 0)', borderRadius: '10px', margin: '10px', border: "0" }}>
                        <div className='card-body'>
                            <KinMaya kinMaya={kinMaya} />
                            <h4 className='card-tittle'>
                                KinMaya {kinMaya.kin}: {kinMaya.Umbral}
                            </h4>
                        </div>
                    </div>
                        <details className='ml-3'>
                            <summary class="font-weight-bold ">
                                Sello Solar {kinMaya.sello}: {kinMaya.tribu}
                            </summary>
                            Aqui va una pequeña explicacion Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        </details>
                        <details>
                            <summary>
                                Tono Lunar {kinMaya.tono}: {kinMaya.vibracion}
                            </summary>
                            Aqui va una pequeña explicacion Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        </details>
                </div>
                <button className='btn btn-success' onClick={toggleOracleVisibility}>
                    {showOracle ? 'Ocultar Oracle' : 'Mostrar Oracle'}
                </button>
                <button className='btn btn-success' onClick={toggleWaveVisibility}>
                    {showWave ? 'Ocultar Wave' : 'Mostrar Wave'}
                </button>
                {showOracle && <Oracle kinMaya={kinMaya} />}
                {showWave && <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '10px', margin: '10px' }}>
                    <h5 className='card-tittle'>
                        Onda: {kinMaya.Onda}
                    </h5>
                    <SpellWave kinMaya={kinMaya} />
                </div>
                }
            </section>

        </div>
    );
}