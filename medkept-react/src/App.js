import React, { useState } from "react";
import Metamask from './metamask/metamask'
import "./App.css";
import { useMoralis } from 'react-moralis';
import Home from "./components/pages/Home";
// import Landing from "./components/Landing";
import Manager from './components/managerdashboard/manager'
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Registration from "./components/pages/Registration";
import Reports from "./components/pages/Reports";
import Prescription from "./components/pages/Prescription";
import SignUp from "./components/pages/SignUp";

import Doctor from './components/doctordashboard/doctor';
import Patient from './components/userDashboard/userdashboard';
// import { Home } from "@material-ui/icons";

function App() {
  const [id,setId]= useState('');
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    // const dispatch = useDispatch();
    // const [ethid,setEthid]= useState("");
    // setEthid(useSelector(selectCertificates))
    const login = async () => {
      if (!isAuthenticated) {
  
        await authenticate({ signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
            setId(user.get("ethAddress"))
            // dispatch(setCertificates(user.get("ethAddress")))
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  
    const logOut = async () => {
      await logout();
      console.log("logged out");
    }
  return (
    <>
      <Router>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
        <Routes>
          <Route path="/"  element={<Home/>} />
          {/* <Route path="/registration" element={Registration} />
          <Route path="/reports" element={Reports} />
          <Route path="/prescription" element={Prescription} />
          <Route path="/sign-up" element={SignUp} /> */}
          <Route path="/patient" element={<Patient id={id}/>} />
          <Route path="/doctor" element={<Doctor id={id}/>} />
          <Route path="/manager" element={<Manager id={id}/>} />
          <Route path="/meta" element={<Metamask/>} />
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