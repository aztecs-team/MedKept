import React from 'react';
import Userdashboard from './components/userDashboard/userdashboard';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import DoctorDashboard from './components/doctordashboard/doctor'
import './App.css';

function App() {
  return (
    <div className="App">
      <DoctorDashboard/>
    </div>
  );
}

export default App;
