import React from 'react';

export default function DateInput({ day, month, year, onDateChange }) {
    // Manejadores de cambios para cada input
    const handleDayChange = (e) => {
        const newDay = e.target.value;
        onDateChange(newDay, month, year);
    };

    const handleMonthChange = (e) => {
        const newMonth = e.target.value;
        onDateChange(day, newMonth, year);
    };

    const handleYearChange = (e) => {
        const newYear = e.target.value;
        onDateChange(day, month, newYear);
    };

    return (
        <div className="input-group" style={{ maxWidth: '220px' }}>
            <input 
                type="number" 
                className="form-control" 
                placeholder={`Día (Hoy: ${day})`} 
                value={day} 
                onChange={handleDayChange} 
                min="1" max="31"
                style={{ width: '22%' }}
            />
            <input 
                type="number" 
                className="form-control" 
                placeholder={`Mes (Hoy: ${month})`} 
                value={month} 
                onChange={handleMonthChange} 
                min="1" max="12"
                style={{ width: '22%' }}
            />
            <input 
                type="number" 
                className="form-control" 
                placeholder={`Año (Hoy: ${year})`} 
                value={year} 
                onChange={handleYearChange} 
                min="1900"
                style={{ width: '34%' }}
            />
        </div>
    );
}
