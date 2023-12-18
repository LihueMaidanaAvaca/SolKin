import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
    <Header date={selectedDate} onDateChange={setSelectedDate} />
      <Router>
        <MainRoutes date={selectedDate} />
      </Router>
    </>
  );
}

export default App;
