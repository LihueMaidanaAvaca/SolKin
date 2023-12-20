// En App.js
import React, { useState } from 'react';
import Header from './components/Header';
import MainRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const currentDate = new Date();
  const [day, setDay] = useState(currentDate.getDate());
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());

  // Función para actualizar la fecha
  const updateDate = (newDay, newMonth, newYear) => {
    setDay(newDay);
    setMonth(newMonth);
    setYear(newYear);
  };

  console.log(day, "dia")

  return (
    <div style={{background: "#41523f"}}>
      <Header day={day} month={month} year={year} onDateChange={updateDate} />
      <Router>
        <MainRoutes day={day} month={month} year={year} />
      </Router>
    </div>
  );
}

export default App;
