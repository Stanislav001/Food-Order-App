import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

import './index.css';
import MainNavigation from './components/Header/MainNavigation/MainNavigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <MainNavigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);