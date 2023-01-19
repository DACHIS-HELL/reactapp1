import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/header/Header';
import Offers from './pages/sections/Offers'
import Contact from './pages/sections/contact';
import Products from './pages/sections/products';
import Footer from './pages/footer/footer';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <Offers/>
      <Products/>
      <Contact/>
      <Footer/>
  </React.StrictMode>
);

