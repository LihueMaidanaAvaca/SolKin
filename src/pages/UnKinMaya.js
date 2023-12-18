import React, { useState } from 'react';
import toKin from '../utils/toKin';
import dayAndMonthK from '../utils/dayAndMonthK';
import yearK from '../utils/yearK';
import KinMaya from '../components/KinMaya';

const UnKinMaya = () => {
    const [fecha, setFecha] = useState(null);

    const ajustarFecha = (fechaString) => {
        const fecha = new Date(fechaString);
        fecha.setMinutes(fecha.getMinutes() - fecha.getTimezoneOffset());
        return fecha;
    };

    const extraerComponentesFecha = (fecha) => {
        if (!fecha) return { dia: null, mes: null, año: null };
    
        return {
            dia: fecha.getDate(),
            mes: fecha.getMonth() + 1, // Enero es 0, diciembre es 11
            año: fecha.getFullYear()
        };
    };

    const handleDateChange = (event) => {
        const nuevaFecha = ajustarFecha(event.target.value);
        setFecha(nuevaFecha);
    };

    const fechaObj = extraerComponentesFecha(fecha);
    const kinMaya = toKin(dayAndMonthK(fechaObj.dia, fechaObj.mes), yearK(fechaObj.año));

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <input
                type="date"
                value={fecha ? fecha.toISOString().split('T')[0] : ''}
                onChange={handleDateChange}
                style={{
                    fontSize: '1.5rem',
                    padding: '10px',
                    margin: '10px',
                }}
            />
            <KinMaya kinMaya={kinMaya} />
        </div>
    );
};

export default UnKinMaya;
