import React from "react";

import "./App.css";
import Home from "./components/pages/Home";
// import Landing from "./components/Landing";

import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Registration from "./components/pages/Registration";
import Reports from "./components/pages/Reports";
import Prescription from "./components/pages/Prescription";
import SignUp from "./components/pages/SignUp";

import Doctor from './components/doctordashboard/doctor';
import Patient from './components/userDashboard/userdashboard';
// import { Home } from "@material-ui/icons";

function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/"  element={<Home/>} />
          {/* <Route path="/registration" element={Registration} />
          <Route path="/reports" element={Reports} />
          <Route path="/prescription" element={Prescription} />
          <Route path="/sign-up" element={SignUp} /> */}
          <Route path="/patient" element={<Patient/>} />
          <Route path="/doctor" element={<Doctor/>} />
          </Routes>
      </Router>
    </>
// import React from 'react';
// // import Userdashboard from './components/userDashboard/userdashboard';
// // import logo from './logo.svg';
// // import { Counter } from './features/counter/Counter';
// import DoctorDashboard from './components/doctordashboard/doctor'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <DoctorDashboard/>
//     </div>
  );
}

export default App;