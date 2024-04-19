import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Packages from './Packages';
import Contact from './Contact';
import Home from './Home';
import ContactForm from './ContactForm';
import Footer from './Footer';
import DemoCarousel from './DemoCarousel';

const App = () => {
  const carouselContent = [
    {
        path : "paris.jpeg",
        text : "Live With No Excuses, Travel With No Regrets",
        id: 1
    },
    {
        path : "bali.jpeg",
        text : "Collect Moments, Not Things",
        id: 2
    },
    {
        path : "singapore.jpeg",
        text : "Investment In Travel Is An Investment In Yourself",
        id: 3
    }
]
  return (

      <Router>
        <Navbar />
        <DemoCarousel carouselContent={carouselContent}/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <ContactForm />
        <Footer/>
      </Router>
      
  );
};

export default App;
