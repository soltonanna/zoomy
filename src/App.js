import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { motion } from 'framer-motion';

import Header from './sections/Header';
import Footer from './sections/Footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Instructors from './pages/Instructors';
import Price from './pages/Price';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="zoomy-app">
      <Router>
        <Header />

        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/blog' element = { <Blog /> } />
          <Route path = '/instructors' element = { <Instructors /> } />
          <Route path = '/price' element = { <Price /> } />
          <Route path = '*' element = { <NotFound /> } />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;