import React from 'react';
import { Route as RouteDOM, Routes, BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ForgotPass from './components/ForgotPass';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <RouteDOM index element={<LoginForm />} />
        <RouteDOM path="/home" element={<Home />} />
        <RouteDOM path="/forgot" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
