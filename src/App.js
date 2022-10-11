import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/common/header'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import PageNotFound from './pages/404'
import React from 'react'
import AuthRoutes from './authRoutes'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route
            path="/"
            element={
              <Home />
            }
          />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
