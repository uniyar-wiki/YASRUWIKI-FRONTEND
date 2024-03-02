import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProfile from './UserProfile';
import YSUMap from './MapComponent.js';
import AboutProject from './about.js';
import reportWebVitals from './reportWebVitals';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>Главная страница</div>}/>
        <Route path="/teachers" element={<div>Страница преподавателей</div>} />
        <Route path="/teachers/0" element={<App />} />
        <Route path="/buildings" element={<YSUMap />} />
        <Route path="/departments" element={<div>Страница кафедр</div>} />
        <Route path="/about" element={<AboutProject />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();