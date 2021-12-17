import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Filme from './Pages/Filme/Filme';
import Login from './Pages/Login/Login';
import Navbar from './components/Navbar/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filme" element={<Filme />} />   
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


