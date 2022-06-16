import React from 'react';
import { createRoot } from "react-dom/client";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import About from './pages/About';
import AuthPage from './pages/AuthPage/AuthPage';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import Footer from './pages/Footer/Footer';
import MealDetails from './pages/MealDetail/MealDetail';
import FavoriteMeals from './pages/FavoriteMeals/FavoriteMeals';

import CartProvider from './store/CartProvider';
import { AuthContextProvider } from './store/auth-context';

import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <AuthContextProvider>
    <CartProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path='/meals/:id' element={<MealDetails />} />
          <Route path='/favoritesMeals' element={<FavoriteMeals />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  </AuthContextProvider>

);