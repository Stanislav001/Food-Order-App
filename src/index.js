import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import About from './pages/About';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer/Footer';
import Register from './pages/Register/Register';
import MealDetails from './pages/MealDetail/MealDetail';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path='/meals/:id' element={<MealDetails />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);