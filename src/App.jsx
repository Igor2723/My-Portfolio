import './App.css'
import React from 'react';
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Portfolio from './Components/Portfolio.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </BrowserRouter> 
  );
}




export default App
