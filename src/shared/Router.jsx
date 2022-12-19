import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Write from '../pages/Write';
import Register from '../pages/Register';
import Login from '../pages/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/" element={<Navigate to="/" replace />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/write" element={<Write />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
