
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Service from './pages/ServicesPage'
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <div className="App">
       
        <Navbar />
        
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<ContactPage />} />
         
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
