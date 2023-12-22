import dayAndMonthK from '../utils/dayAndMonthK.js';
import yearK from '../utils/yearK';
import toKin from '../utils/toKin'
import KinMaya from '../components/KinMaya';
import React, { useState } from 'react';

export default function Sinastria() {
    const [fechas, setFechas] = useState([{ id: 1, value: '' }]);

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
        return toKin(processedYear, processedDayMonth);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
            {fechas.map((fecha) => {
                const kinMaya = calcularKinMaya(fecha.value);
                return (
                    <div key={fecha.id} className="card mb-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <label>
                                Fecha Elegida: {fecha.value ? fecha.value : 'No seleccionada'}
                            </label>
                            {kinMaya && <KinMaya kinMaya={kinMaya} />}
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
        </div>
    );
}
