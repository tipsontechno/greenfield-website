import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';

const App = () => {
  const HomeRef = useRef(null);
  const servicesRef = useRef(null);
  const valuesRef = useRef(null);
  const faqsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (section) => {
    if (['Home', 'Thuis'].includes(section) && HomeRef.current) {
      HomeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (['Services', 'Diensten'].includes(section) && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (['Values', 'Waarden'].includes(section) && valuesRef.current) {
      valuesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (['Testimonials', 'Getuigenissen'].includes(section) && testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (['Contact', 'Contact'].includes(section) && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <BrowserRouter>
      <NavBar onLinkClick={scrollToSection} />
      <Routes>
        <Route path='/' element={
          <Home
            HomeRef={HomeRef}
            servicesRef={servicesRef}
            valuesRef={valuesRef}
            testimonialsRef={testimonialsRef}
            footerRef={footerRef}
          />
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;