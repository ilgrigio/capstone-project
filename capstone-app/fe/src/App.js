import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Errorpage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';
import Antipasti from './pages/Antipasti';
import Primi from './pages/Primi';
import Secondi from './pages/Secondi';
import Desserts from './pages/Desserts';
import Drinks from './pages/Drinks';
import { CartProvider } from 'react-use-cart';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/drink" element={<Drinks />} />
          <Route path="/dessert" element={<Desserts />} />
          <Route path="/antipasti" element={<Antipasti />} />
          <Route path="/primi" element={<Primi />} />
          <Route path="/secondi" element={<Secondi />} />
          <Route path="/spinner" element={<LoadingSpinner />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
