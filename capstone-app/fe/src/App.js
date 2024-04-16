import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
