import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components';
import { CoinPage, Dashboard, Login, NotFound, Profile, Register } from './pages';

const App = () => {
  return (
    <BrowserRouter basename="/stock-market-dashboard">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<ProtectedRoute component={Dashboard} />} />
        <Route path="coins/:id" element={<ProtectedRoute component={CoinPage} />} />
        <Route path="user" element={<ProtectedRoute component={Profile} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
