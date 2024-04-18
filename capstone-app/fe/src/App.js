import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/spinner" element={<LoadingSpinner />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
