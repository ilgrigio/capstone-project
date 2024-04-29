import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';
import Antipasti from './pages/Antipasti';
import Primi from './pages/Primi';
import Secondi from './pages/Secondi';
import Desserts from './pages/Desserts';
import Drinks from './pages/Drinks';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/drink" element={<Drinks />} />
        <Route path="/dessert" element={<Desserts />} />
        <Route path="/antipasti" element={<Antipasti />} />
        <Route path="/primi" element={<Primi />} />
        <Route path="/secondi" element={<Secondi />} />
        <Route path="/spinner" element={<LoadingSpinner />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
