import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/navbar';
import LandingPage from './landing';
import ProductPage from './product';
import Contact from './ContactUs';
import Service from './ServicesSection';
import background from './assets/bg.jpg';
// import Landing from './landing';
import './App.css';

const App = () => {
  return (
    <Router>
     <div className="App" style={{ backgroundImage: `url(${background})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service" element={<Service />} />
          
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
