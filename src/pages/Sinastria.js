import React, { useState } from 'react';
import dayAndMonthK from '../utils/dayAndMonthK.js';
import yearK from '../utils/yearK';
import toKin from '../utils/toKin'
import KinMaya from '../components/KinMaya';

export default function Sinastria() {
    const [fechas, setFechas] = useState([{ id: 1, value: '' }]);
    const [resultadoKin, setResultadoKin] = useState(null);

    const agregarFecha = () => {
        const nuevaFecha = { id: fechas.length + 1, value: '' };
        setFechas([...fechas, nuevaFecha]);
    };

    const handleFechaChange = (id, newValue) => {
        const nuevasFechas = fechas.map((fecha) => {
            if (fecha.id === id) {
                return { ...fecha, value: newValue };
            }
            return fecha;
        });
        setFechas(nuevasFechas);
    };

    const eliminarFecha = (id) => {
        const nuevasFechas = fechas.filter((fecha) => fecha.id !== id);
        setFechas(nuevasFechas);
    };

    const calcularKinMaya = (fecha) => {
        if (!fecha) return null;
        const date = new Date(fecha);
        const day = date.getDate() + 1;
        const month = date.getMonth() + 1; // getMonth() devuelve un índice basado en cero
        const year = date.getFullYear();
        const processedDayMonth = dayAndMonthK(day, month);
        const processedYear = yearK(year);
        const kinMaya = toKin(processedYear, processedDayMonth);
    
        return {
            kinMaya,           // Objeto Kin Maya
            processedDayMonth, // Valor procesado de día y mes
            processedYear      // Valor procesado del año
        };
    };

    const sumarFechasYCalcularKin = () => {
        let totalDayMonth = 0;
        let totalYear = 0;
        fechas.forEach(fecha => {
            const kinMaya = calcularKinMaya(fecha.value);
            if (kinMaya) {
                totalDayMonth += kinMaya.processedDayMonth;
                totalYear += kinMaya.processedYear;
            }
        });
        const resultado = toKin(totalYear, totalDayMonth);
        console.log(resultado.kin, "resultado")
        setResultadoKin(resultado);
    };
    
    return (
        <div className="container mt-4 d-flex flex-column align-items-center justify-content-center " style={{height: "100vh"}}>
            <div>

            {resultadoKin && (
                <div className="card mt-2 mb-4" style={{ width: '20rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Kin Resultante</h5>
                        <KinMaya kinMaya={resultadoKin} />
                        <label>
                                Kin: {resultadoKin ? resultadoKin.kin : 'No seleccionada'}<br></br>
                                {resultadoKin ? resultadoKin.Umbral : 'No seleccionada'}
                            </label>
                    </div>
                </div>
            )}
            </div>
            {!resultadoKin && fechas.map((fecha) => {
                const kinMaya = calcularKinMaya(fecha.value);
                return (
                    <div key={fecha.id} className="card mb-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <label>
                                Kin: {fecha.value ? kinMaya.kinMaya.kin : 'No seleccionada'}<br></br>
                                {fecha.value ? kinMaya.kinMaya.Umbral : 'No seleccionada'}
                            </label>
                            {kinMaya && <KinMaya kinMaya={kinMaya.kinMaya} />}
                            <input
                                type="date"
                                className="form-control"
                                value={fecha.value}
                                onChange={(e) => handleFechaChange(fecha.id, e.target.value)}
                            />
                            <button
                                className="btn btn-danger mt-2"
                                onClick={() => eliminarFecha(fecha.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                );
            })}
            <button className="btn btn-primary mt-2" onClick={agregarFecha}>
                Agregar Fecha
            </button>
            <button className="btn btn-secondary mt-2" onClick={sumarFechasYCalcularKin}>
                Calcular Kin Resultante
            </button>
        </div>
    );
}
