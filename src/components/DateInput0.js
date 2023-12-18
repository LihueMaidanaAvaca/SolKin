// DateInput.js
import React from 'react';

function DateInput0({ date, onDateChange }) {
    const handleDateChange = (event) => {
        // Actualiza la fecha basándote en el valor del input
        onDateChange(new Date(event.target.value));
    };

    return (
        <input
            type="date"
            value={date.toISOString().split('T')[0]} // Formatea la fecha para el input
            onChange={handleDateChange}
        />
    );
}

export default DateInput0;
