import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Registration from "./components/pages/Registration";
import Reports from "./components/pages/Reports";
import Prescription from "./components/pages/Prescription";
import SignUp from "./components/pages/SignUp";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection/>
        <Footer/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/reports" component={Reports} />
          <Route path="/prescription" component={Prescription} />
          <Route path="/sign-up" component={SignUp} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
